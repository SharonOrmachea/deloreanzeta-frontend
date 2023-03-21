import { body } from 'express-validator';
import { validateResult } from './validate.helper';

export const validateProduct = [
	body('name')
		.exists()
		.withMessage("El campo nombre no fue ingresado")
	    .notEmpty()
		.withMessage('El campo nombre no puede estar vacio')
		.isString()
		.withMessage('El campo nombre debe ser una cadena de caracteres')
		.isLength({ min: 3 })
		.withMessage(
			'El campo nombre debe componerse de al menos 3 caracteres'
		)
		.custom((value, { req }) => {
			if (value.trim() == 0)
				throw new Error(
					'El campo nombre no puede componerse unicamente de espacios'
				);
			return true;
		}),
	body('price')
		.exists()
		.withMessage("El campo precio no fue ingresado")
	    .notEmpty()
		.withMessage('El campo precio no puede estar vacio')
		.isNumeric()
		.withMessage('El campo precio debe ser numerico')
		.custom((value, { req }) => {
			if (value < 0)
				throw new Error(
					'El campo precio no puede ser negativo'
				);
			return true;
		}),
	body('discount')
		.optional()
		.isNumeric()
		.withMessage('El campo descuento debe ser numerico')
		.custom((value, { req }) => {
			if (value <= 0)
				throw new Error(
					'El campo descuento no puede ser negativo'
				);
			return true;
		}),
	body('information')
		.exists()
		.withMessage("El campo informacion no fue ingresado")
	    .notEmpty()
		.withMessage('El campo informacion no puede estar vacio')
		.isString()
		.withMessage('El campo informacion debe ser una cadena de caracteres')
		.isLength({ min: 3 })
		.withMessage(
			'El campo informacion debe componerse de al menos 3 caracteres'
		)
		.custom((value, { req }) => {
			if (value.trim() == 0)
				throw new Error(
					'El campo informacion no puede componerse unicamente de espacios'
				);
			return true;
		}),
	body('description')
		.isString()
		.withMessage('El campo descripcion debe ser una cadena de caracteres')
		.optional()
		.isLength({ min: 3 })
		.withMessage(
			'El campo descripcion debe componerse de al menos 3 caracteres'
		)
		.custom((value, { req }) => {
			if (value.trim() == 0)
				throw new Error(
					'El campo descripcion no puede componerse unicamente de espacios'
				);
			return true;
		}),
	body('imageUrl')
		.exists()
		.withMessage('El campo imagen no fue ingresado')
		.not()
		.isEmpty()
		.withMessage('El campo imagen no puede estar vacio')
		.isArray({min: 1, max: 4})
		.withMessage('El campo imagen debe ser una lista de caracteres de longitud entre 1 y 4'),
	body('category')
		.exists()
		.withMessage('El campo categoria no fue ingresado')
		.not()
		.isEmpty()
		.withMessage('El campo categoria no puede estar vacio')
		.isString()
		.withMessage("El campo categoria debe ser una cadena de caracteres")
		.custom((value, { req }) => {
			if (value.trim() == 0)
				throw new Error(
					'El campo categoria no puede componerse unicamente de espacios'
				);
			return true;
		}),
	(req, res, next) => {
		validateResult(req, res, next);
	},
];
