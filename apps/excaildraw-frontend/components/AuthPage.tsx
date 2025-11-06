"use client"
import { Input } from "@repo/ui/input"

export function AuthPage({isSignin} : {
    isSignin: boolean
}) {
    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="p-8 flex flex-col gap-2 bg-slate-200 rounded">
            <Input text="email" />
            <Input text="password" />
            <input type="text" placeholder="core input box" className="border p-4 border-red-500" />
            <button className="" onClick={() => {

            }}>{isSignin ? "Sign in" : "Signup"}</button>
        </div>
        
    </div>
}