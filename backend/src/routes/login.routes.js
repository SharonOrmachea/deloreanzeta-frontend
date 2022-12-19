import {Router} from "express";
import {pool} from "../db.js";
import jwt from "jsonwebtoken";

const router = Router();

router.post("/usuario/login", async (req, res) => {
    const emailParam = req.body.email;
    const passwordParam = req.body.password;
    const [usuario] = await pool.query("SELECT * from usuario WHERE email = ?", [emailParam]);
    
    if(passwordParam !== usuario[0].password){
        return res.status(404).json({
            message: "Credenciales incorrectas"
        });
    }
    const datos = {
        email: usuario[0].email,
        password: usuario[0].password,
        permisos: usuario[0].permisos,
        nombre: usuario[0].nombre,
        apellido: usuario[0].apellido,
        telefono: usuario[0].telefono
    };
    const token = jwt.sign(
        {email:datos.email},
        TOKEN_KEY,
        {expiresIn: "2h"}
    );
    let nDatos = {...datos, token};
    res.json(nDatos);
        
});

const TOKEN_KEY = "x4TvnErxRETbVcqaL15dqMI115eN1p5y";

const verifyToken = (req, res, next) => {
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

router.get("/usuario/:comprador/compras",verifyToken, async (req, res) => {
    
    try{
        const [rows] = await pool.query("SELECT * from venta WHERE comprador = ?", [req.params.comprador]);
        if(rows.length <= 0){
            return res.status(404).json({
             message: "Compras not found"
             });  
         }
         res.json(rows);
     }catch(error){
         return res.status(500).json({
             message: "Error al traer el historial de compras realizadas"
         });
     }
 });


export default router;