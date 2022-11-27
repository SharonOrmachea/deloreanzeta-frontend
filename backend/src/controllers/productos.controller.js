import {pool} from "../db.js";

export const getProducto = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * from producto WHERE id = ?", [req.params.id]);
    
        if(rows.length <= 0){
            return res.status(404).json({
                message: "Producto no encontrado"
            });
        }
        res.json(rows);    
    } catch (error) {
        return res.status(500).json({
            message: "Error al traer el producto"
        });
    }
}

export const getProductos = async (req, res) => {
    try{
       const [rows] = await pool.query("SELECT * from producto");
       if(rows.length <= 0){
           return res.status(404).json({
            message: "Producto not found"
            });  
        }
        res.json(rows);
    }catch(error){
        return res.status(500).json({
            message: "Error al traer los productos"
        });
    }
}

export const createProducto = async (req, res) => {

    const {nombre, precio, categoria,imagen, descripcion} = req.body;
    try{
        const [row] = await pool.query("INSERT INTO producto(nombre,precio,categoria) VALUES (?, ?, ?, ?, ?)",[nombre, precio, categoria, imagen, descripcion]);
        //tengo que ver que la categoria este creada
        


        res.send({
            id: row.insertId,
            nombre,
            precio,
            categoria,
            imagen,
            descripcion
        });
    }catch(error){
        return res.status(500).json({
            message: "Error al crear el producto"
        });
    }
}

export const updateProducto = async (req, res) => {
    const {id} = req.params;
    const {nombre, precio, categoria, imagen, descripcion} = req.body;
    try {
        const [result] = await pool.query("UPDATE producto SET nombre = IFNULL(?, nombre), precio = IFNULL(?, precio), categoria = IFNULL(?, categoria), imagen = IFNULL(?, imagen), descripcion = IFNULL(?, descripcion) WHERE id = ?", [nombre, precio, categoria, imagen, descripcion, id]);
        if(result.affectedRows == 0){
            return res.status(404).json({
                message: "Producto no actualizado"
            });
        }
        const [rows] = await pool.query("SELECT * from producto WHERE id = ?", [id]);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: "Error al actualizar el producto"
        });
    }
}

export const deleteProducto = async (req, res) => {
    try {
        const [rows] = await pool.query("DELETE from producto WHERE id = ?", [req.params.id]);
        if(rows.affectedRows  <= 0){
            return res.status(404).json({
                message: "Producto no eliminado"
            });
        }
        res.sendStatus(204);       
    } catch (error) {
        return res.status(500).json({
            message: "Error al eliminar el producto"
        });
    }
}