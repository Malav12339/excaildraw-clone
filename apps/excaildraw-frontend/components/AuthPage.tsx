"use client"
import { Button } from "@repo/ui/button"
import { Input } from "@repo/ui/input"

export function AuthPage({isSignin} : {
    isSignin: boolean
}) {
    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="p-8 flex flex-col gap-2 bg-slate-200 rounded">
            <Input text="email" />
            <Input text="password" />
            <Button>{isSignin ? "Sign in" : "Signup"}</Button>
        </div>
    </div>
}