"use client"

import { useSocket } from "../hooks/useSocket"

export function ChatRoomClient({
    messages,
    id
} : {
    messages: {message: string}[],
    id: string
}) {
    const {loading, socket} = useSocket()
    
}