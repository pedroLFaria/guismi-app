import * as React from 'react'

export default function ChatMessage(user: string, type: "DICE" | "FICHA" | "MESSAGE", message: string) {
    if(type === "DICE"){
        return(<p>
            <strong> {user}</strong><em>{message}</em>
            </p>
        )
    } else if(type === "MESSAGE"){
        return(<p>
                <strong> {user}</strong><em>{message}</em>
            </p>
        )
    } else
        return JSON.parse(message);
}

