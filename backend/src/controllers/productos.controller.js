import {pool} from "../db.js";

export const getProductos = async (req, res) => {
    const [result] = await pool.query("SELECT * from producto");
    res.json(result);
}

export const createProducto = (req, res) => {
    // pool.query("INSERT INTO producto(nombre, precio, categoria) VALUES (?, ?)",[]);
    res.send("Proceso realizado");
}

export const updateProducto = (req, res) => res.send("Actualizando producto");
export const deleteProducto = (req, res) => res.send("Eliminando producto");

