import { WebSocket, WebSocketServer } from "ws";
import jwt from "jsonwebtoken"
import { getJwt, loadEnv } from "@repo/backend-common/config"
import { prismaClient } from "@repo/db/client";

loadEnv()

interface User {
    ws: WebSocket
    userId: string,
    rooms: string[]
}

const wss = new WebSocketServer({port: 8080})

const users: User[] = []

function checkUser(token: string): string | null {
    try {
        const decoded = jwt.verify(token, getJwt())
        if(!decoded || typeof decoded == "string" || !decoded.userId) {
            return null
        }
        return decoded.userId
    } catch(e) {
        return null
    }
}

wss.on("connection", function connnection(ws, request) {
    const url = request.url
    if(!url) return;
    const queryParams = new URLSearchParams(url.split('?')[1])
    const token = queryParams.get('token') || ""
    const userId = checkUser(token)
    if(!userId) {
        ws.close()
        return;
    }

    users.push({
        ws,
        userId,
        rooms: []
    })

    ws.on("message", async function message(data) {
        const parsedData = JSON.parse(data.toString())

        // {type: "join_room", roomId: "123"}
        if(parsedData.type === "join_room") {
            const user = users.find(user => user.ws == ws)
            if(!user) return;
            user.rooms.push(parsedData.roomId)
            user.ws.send("joined room " + parsedData.roomId)
        }

        // {type: "leave_room", roomId: "123"}
        if(parsedData.type === "leave_room") {
            const user = users.find(user => user.ws === ws)
            if(!user) return;
            user.rooms = user.rooms.filter(room => room !== parsedData.roomId)
            user.ws.send("exited room " + parsedData.roomId)
        }

        // {type: "chat", message: "Hi there!", roomId: "cs-class"}
        if(parsedData.type === "chat") {
            const message = parsedData.message
            const roomId = parsedData.roomId

            try {
                // should push to queue which should push to db                
                await prismaClient.chat.create({
                    data: {
                        userId: userId.toString(),
                        roomId,
                        message
                    }
                })

                users.forEach(user => {
                    if(user.rooms.includes(roomId)) {
                        user.ws.send(JSON.stringify({
                            type: "chat",
                            message,
                            roomId
                        }))
                    }
                })
            } catch(dbErr) {
                console.error("error joining room \n",dbErr)
                ws.send("invalid roomId")
            }
        }
    })
})