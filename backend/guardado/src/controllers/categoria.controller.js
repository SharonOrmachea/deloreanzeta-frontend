import {pool} from "../db.js";

export const getCategoria = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * from categoria WHERE id = ?", [req.params.id]);
    
        if(rows.length <= 0){
            return res.status(404).json({
                message: "Categoria no encontrada"
            });
        }
        res.json(rows);    
    } catch (error) {
        return res.status(500).json({
            message: "Error al traer la categoria"
        });
    }
}

export const getCategorias = async (req, res) => {
    try{
       const [rows] = await pool.query("SELECT * from categoria");
       if(rows.length <= 0){
            return res.status(404).json({
                message: "Categoria not found"
            });  
        }
        res.json(rows);
    }catch(error){
        return res.status(500).json({
            message: "Error al traer las categorias"
        });
    }
}

export const createCategoria = async (req, res) => {
    const {nombre} = req.body;
    try{
        const [row] = await pool.query("INSERT INTO categoria(nombre) VALUES (?)",[nombre]);
        res.send({
            id: row.insertId,
            nombre
        });
    }catch(error){
        return res.status(500).json({
            message: "Error al crear la categoria"
        });
    }
}

export const updateCategoria = async (req, res) => {
    const {id} = req.params;
    const {nombre} = req.body;
    try {
        const [result] = await pool.query("UPDATE categoria SET nombre = IFNULL(?,nombre) WHERE id = ?", [nombre, id]);
        if(result.affectedRows == 0){
            return res.status(404).json({
                message: "Categoria no actualizada"
            });
        }
        const [rows] = await pool.query("SELECT * from categoria WHERE id = ?", [id]);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: "Error al actualizar la categoria"
        });
    }
}

export const deleteCategoria = async (req, res) => {
    try {
        const [rows] = await pool.query("DELETE from categoria WHERE id = ?", [req.params.id]);
        if(rows.affectedRows  <= 0){
            return res.status(404).json({
                message: "Categoria no eliminada"
            });
        }
        res.sendStatus(204);       
    } catch (error) {
        return res.status(500).json({
            message: "Error al eliminar la categoria"
        });
    }
}
