import {pool} from "../db.js";
import jwt from "jsonwebtoken";
//import {TOKEN_KEY} from "../config.js"
import bcrypt from "bcryptjs"
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
            let contraseñaEncriptada = await encriptarPassword(password);
            /*try {
                contraseñaEncriptada = await bcrypt.hash(password, 10);
            }catch (error) {
                throw error;
            }*/
            const [usuario] = await pool.query("INSERT INTO usuario(email, password, permisos, nombre, apellido, telefono) VALUES (?, ?, ?, ?, ?, ?)",[email, contraseñaEncriptada, permisos, nombre, apellido, telefono]);
            const token = jwt.sign(
                {email:email},
                TOKEN_KEY,
                {expiresIn: "7d"}
            );
            res.status(200).json({
                email,
                contraseñaEncriptada,
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
            const tokenSesion = await tokenSing(email);
            
            let claveValida = await desencriptarPassword(password,usuarioExist[0].password);
            if(!claveValida){
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
                    // email: usuarioExist[0].email,
                    // password: usuarioExist[0].password,
                    // permisos: usuarioExist[0].permisos,
                    // nombre: usuarioExist[0].nombre,
                    // apellido: usuarioExist[0].apellido,
                    // telefono: usuarioExist[0].telefono,
                    token: token
                });
            }
        }
    }catch(error){
        return res.status(500).json({
            message: "Error "
        });
    }


}

export const logout = async (req, res) => {
    const authHeader = req.headers["authorization"];
    jwt.sign(authHeader, "", { expiresIn: 1 } , (logout, err) => {
       if (logout) {
          res.send({msg : 'Has sido desconectado' });
       } else {
          res.send({msg:'Error'});
       }
    });
}

const encriptarPassword = async (clave) => {
    try {
        let contraseñaEncriptada = await bcrypt.hash(clave, 10);
        return contraseñaEncriptada;
    }catch (error) {
        throw error;
    }
}

const desencriptarPassword = async (clave, datoEncriptado) => {
    try {
        let iguales = await bcrypt.compare(clave, datoEncriptado);
        return iguales;
    }catch (error) {
        throw error;
    }
}