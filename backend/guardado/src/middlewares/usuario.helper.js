import jwt from "jsonwebtoken";
//import {TOKEN_KEY} from "../config.js"
const TOKEN_KEY = "x4TvnErxRETbVcqaL15dqMI115eN14wD"

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers[ "authorization"];
    const token = authHeader && authHeader.split(' ')[1];
    console.log(authHeader);
    if(token==null)
       return res.status(401).send("Token requerido");
    jwt.verify(token, TOKEN_KEY, (err, user) => {
    if(err)
        return res.status(403).send("Token invalido");
    console.log(user);
    req.user = user;
    next();
    });
}