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
            response.status(201).json({ message: "User not authenticated." });
            return;
        }
    } catch (error) {
        console.log(error);
    }

    if (authHeader) {
        const [, token] = authHeader.split(" ");

        try {
            const decoded = <IDecodedJWT>jwt.verify(token, `SECRET_KEY`);
            response.locals.user = decoded.user;
            next();
        } catch {
            throw new Error("Token inválido.");
        }
    }
}
