import {body} from "express-validator";
import {validateResult} from "../helpers/validate.helper.js";

export const validateProducto = [
    body("nombre")
        .exists()
        .withMessage("El nombre del producto no fue ingresado")
        .not()
        .isEmpty()
        .withMessage("El nombre del producto no puede estar vacio")
        .isString()
        .withMessage('El nombre del producto debe ser una cadena de caracteres')
        .isLength({ min: 4 })
        .withMessage('El nombre del producto debe componerse de al menos 4 caracteres')
        .custom((value, {req}) => {
            if(value.trim() == 0)
                throw new Error("El nombre no puede componerse unicamente de espacios");
            return true;
            }
        )
        ,
    body("precio")
        .exists()
        .withMessage("El campo precio no fue ingresado")
        .not()
        .isEmpty()
        .withMessage("El campo precio no puede estar vacio")
        .isString()
        .withMessage('El precio del producto debe ser una cadena de caracteres')
        .isLength({ min: 1 })
        .withMessage('El precio debe componerse de al menos 1 caracter')
        .custom((value, {req}) => {
            if(value.trim() == 0)
                throw new Error("El precio no puede componerse unicamente de espacios");
            return true;
        })
        .custom((value, {req}) => {
            for(let i = 0; i < value.length; i++){
                if(value[i] != 0 && value[i] != 1 && value[i] != 2 && value[i] != 3 && value[i] != 4 && 
                    value[i] != 5 && value[i] != 6 && value[i] != 7 && value[i] != 8 && value[i] != 9){
                        console.log(value[i])
                        throw new Error("El precio debe componerse unicamente de numeros");
                }
            }
            return true;
        })
    ,
    body("imagen")
        .isString()
        .withMessage("El campo imagen debe ser una cadena de caracteres")
        .custom((value, {req}) => {
            if(value.trim() == 0)
                throw new Error("El campo imagen no puede componerse unicamente de espacios");
            return true;
        })
    ,
    body("descripcion")
        .isString()
        .withMessage("El campo descripcion debe ser una cadena de caracteres")
        .custom((value, {req}) => {
            if(value.trim() == 0)
                throw new Error("El campo descripcion no puede componerse unicamente de espacios");
            return true;
        })
    ,
    (req, res, next) => {
        validateResult(req, res, next);
    }
]
