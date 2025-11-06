import axios from "axios";
import { BACKEND_URL } from "../../config";

async function getChats(roomId: string) {
    const response = await axios.get(`${BACKEND_URL}/chat/${roomId}`)
    return response.data.chats
}

export async function ChatRoom({id} : {id: string}) {
    const messages = await getChats(id)
    
}