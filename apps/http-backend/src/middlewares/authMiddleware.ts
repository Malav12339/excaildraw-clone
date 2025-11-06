import { getJwt } from "@repo/backend-common/config";
import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization ?? ""

    try {
        const decoded = jwt.verify(token, getJwt())
        req.userId = (decoded as JwtPayload).userId
        next()
    } catch(e) {
        return res.status(401).json({
            msg: "Authorization error. try again later"
        })     
    }
}