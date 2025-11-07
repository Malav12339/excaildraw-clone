import express from "express"
import bcrypt from "bcrypt"
import { getJwt, loadEnv } from "@repo/backend-common/config"
import { CreateRoomSchema, CreateUserSchema, SigninUserSchema } from "@repo/common/types"
import jwt from "jsonwebtoken"
import { authMiddleware } from "./middlewares/authMiddleware"
import { prismaClient, Prisma } from "@repo/db/client"
import cors from "cors"

loadEnv()
const JWT_SECRET = getJwt()

const saltRounds = 10

const app = express()
app.use(express.json())
app.use(cors())

app.post("/signup", async (req, res) => {
    const parsedData = CreateUserSchema.safeParse(req.body)

    if(!parsedData.success) {
        
        return res.status(401).json({
            msg: "Incorrect inputs"
        })
    }

    try {
        
        const hashedPassword = await bcrypt.hash(parsedData.data.password, saltRounds)
        await prismaClient.user.create({
            data: {
                email: parsedData.data.email,
                password: hashedPassword,
                name: parsedData.data.name
            }
        })
        
        return res.status(200).json({
            msg: "signup success!"
        })
    } catch(e) {
        if(e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002') {
            return res.status(409).json({
                msg: "Email already exist"
            })    
        }
        console.error("problem with signup -> \n", e)
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
})

app.post("/signin", async (req, res) => {
    const parsedData = SigninUserSchema.safeParse(req.body)

    if(!parsedData.success) {
        return res.status(401).json({
            msg: "Incorrect inputs"
        })
    }

    try {
        const user = await prismaClient.user.findFirst({
            where: {
                email: parsedData.data.email
            }
        })
        if(!user) {
            return res.status(401).json({
                msg: "Invalid email or password"
            })
        }
        const passCompare = await bcrypt.compare(parsedData.data.password, user.password)
        if(!passCompare) {
            return res.status(401).json({
                msg: "Invalid email or password"
            }) 
        }
        const userId = user.id
        const token = jwt.sign({userId}, JWT_SECRET)
        return res.status(200).json({
            token
        }) 
    } catch(e) {
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
})

app.post("/room", authMiddleware, async (req, res) => {
    const parsedData = CreateRoomSchema.safeParse(req.body)

    if(!parsedData.success) {
        return res.status(401).json({
            msg: "Invalid inputs"
        })
    }

    const userId = req.userId
    if(!userId) {
        return res.status(409).json({
            msg: "Authentication error"
        })
    }
    try {
        const room = await prismaClient.room.create({
            data: {
                slug: parsedData.data.name,
                adminId: userId
            }
        })
        return res.json({
            roomId: room.id
        })
    } catch(e) {
        if(e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002') {
            return res.status(411).json({
                msg: "room already exists"
            })
        }
        console.error("err joining room \n", e)
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
    
})

app.get("/chats/:roomId", async (req, res) => {
    const roomId = Number(req.params.roomId)
    if(!roomId) {
        return res.status(404).json({
            msg: "provide valid roomId"
        })
    }
    const chats = await prismaClient.chat.findMany({
        where: {
            roomId: roomId
        },
        orderBy: {
            id: 'desc'
        },
        take: 50
    })

    return res.json(chats)
})

app.get("/room/:slug", async (req, res) => {
    const slug = req.params.slug
    
    try {
        const room = await prismaClient.room.findFirst({
            where: {slug}
        })
        return res.json({
            room
        })
    } catch(e) {
        return res.status(500).json({
            msg: "Internal server error"
        })
    }
})

app.listen(3001, () => console.log("http running.....\n"))