import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

interface IDecodedJWT extends jwt.JwtPayload {
    id: string;
    fullname: string;
}

export function auth(request: Request, response: Response, next: NextFunction): void {
    const authHeader = request.headers.authorization;
    try {
        if (!authHeader) {
            response.status(201).json({ message: "Usuário não autenticado." });
            return;
        }
    } catch (error) {
        console.log(error);
    }
    const [, token] = authHeader.split(" ");

    try {
        const decoded = <IDecodedJWT>jwt.verify(token, `${process.env.SECRET_TOKEN}`);
        response.locals.id = decoded.id;
        response.locals.fullname = decoded.fullname;
        next();
    } catch {
        throw new Error("Token inválido.");
    }
}
