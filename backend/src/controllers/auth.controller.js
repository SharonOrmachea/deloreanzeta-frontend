import {pool} from "../db.js";
import jwt from "jsonwebtoken";
//import {TOKEN_KEY} from "../config.js"
const TOKEN_KEY = "x4TvnErxRETbVcqaL15dqMI115eN14wD"

export const registro = async (req, res) => {
    const {email, password, permisos, nombre, apellido, telefono} = req.body;
    try{
        const [usuarioExist] = await pool.query("SELECT * from usuario WHERE email = ?", [email])
        console.log("filas encontradas", usuarioExist.length);
        if(usuarioExist.length > 0){
            return res.json({
                messege: "El usuario ya existe"
            });
        }else{
            const [usuario] = await pool.query("INSERT INTO usuario(email, password, permisos, nombre, apellido, telefono) VALUES (?, ?, ?, ?, ?, ?)",[email, password, permisos, nombre, apellido, telefono]);
            const token = jwt.sign(
                {email:email},
                TOKEN_KEY,
                {expiresIn: "7d"}
            );
            res.status(200).json({
                email,
                password,
                permisos,
                nombre,
                apellido,
                telefono,
                token
            })
        }
    }catch(error){
        return res.status(500).json({
            message: "Error al registrarse"
        });
    }
    
}



export const getCompras = async (req, res) => {
    try{
        const [rows] = await pool.query("SELECT * from venta WHERE comprador = ?", [req.params.user]);
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
}

const createToken = (req, res) => {

}


export const login = async (req, res) => { 

    const {email, password} = req.body;
    try{
        const [usuarioExist] = await pool.query("SELECT * from usuario WHERE email = ?", [email])
        console.log("filas encontradas", usuarioExist.length);
        if(usuarioExist.length === 0){
            return res.status(400).json({
                messege: "El usuario no existe"
            });
        }else{
            if(password !== usuarioExist[0].password){
                return res.status(401).json({
                    message: "Clave incorrecta"
                });
            }else{

                const token = jwt.sign(
                    {email:email},
                    TOKEN_KEY,
                    {expiresIn: "7d"}
                );

                res.status(200).json({
                    email: usuarioExist[0].email,
                    password: usuarioExist[0].password,
                    permisos: usuarioExist[0].permisos,
                    nombre: usuarioExist[0].nombre,
                    apellido: usuarioExist[0].apellido,
                    telefono: usuarioExist[0].telefono,
                    token: token
                })
            }
        }
    }catch(error){
        return res.status(500).json({
            message: "Error "
        });
    }


}

/*
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
    res.json(nDatos);*/