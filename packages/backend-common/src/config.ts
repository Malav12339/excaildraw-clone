import path from "path"
import dotenv from "dotenv"

export function loadEnv() {
    const envPath = path.resolve(process.cwd(), "../../.env")
    dotenv.config({path: envPath})
}


export const getJwt = () => process.env.JWT_SECRET || "time pass"