"use client"
import { Button } from "@repo/ui/button"
import { Input } from "@repo/ui/input"
import Link from "next/link"
import { useState } from "react"
import { BACKEND_URL } from "../config"
import axios from "axios"


async function handleSignIn(email: string, password: string) {
    try {
        const response = await axios.post(`${BACKEND_URL}/signin`, {
            email,
            password
        })
        alert(response.data.token)
    } catch(e) {
        alert("server error")
    }
}

async function handleSignUp(name: string, email: string, password: string) {
    try {
        const response = await axios.post(`${BACKEND_URL}/signup`, {
            name,
            email,
            password
        })
        if(response.status === 200) {
            // success
            alert("sign up success!")
        } else {
            // failure
            alert("incorrect inputs")
        }
    
    } catch(e) {
        alert("server error")
        // failure
        console.error("eror in sign up: ", e)
        
    }
}

export function AuthPage({isSignin} : {
    isSignin: boolean
}) {
    const signinText = "Don't have an account? "
    const signupText = "Already have an account? "
    const linkClassName = "hover:text-blue-500"
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const onClickFn = () => {isSignin ? handleSignIn(email, password) : handleSignUp(name, email, password)}

    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="p-8 flex flex-col gap-4 bg-slate-200 rounded">
            <Input onChangeFn={(e) => setEmail(e.target.value)} inputValue={email} placeholder="email" />
            <Input onChangeFn={(e) => setPassword(e.target.value)} inputValue={password} placeholder="password" />
            {isSignin ? null : 
            <Input onChangeFn={(e) => setName(e.target.value)} inputValue={name} placeholder="name" /> }
            <Button onClickFn={onClickFn}>{isSignin ? "Sign in" : "Sign up"}</Button>
            {isSignin ? <p>{signinText} <Link className={linkClassName} href="/signup">Signup</Link></p> : 
            <p>{signupText} <Link className={linkClassName} href="/signin">Signin</Link></p>}
        </div>
    </div>
}