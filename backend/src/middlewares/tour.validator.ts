import { body } from 'express-validator';
import { validateResult } from './validate.helper';

export const validateTour = [
	body('date')
		.exists()
		.withMessage("El campo fecha no fue ingresado")
	    .notEmpty()
		.withMessage('El campo fecha no puede estar vacio'),
	    //.isDate({ format: 'YYYY-MM-DD' })
		//.withMessage('La fecha debe tener el formato YYYY-MM-DD'),
	body('place')
		.exists()
		.withMessage('El nombre del lugar no fue ingresado')
		.not()
		.isEmpty()
		.withMessage('El nombre del lugar no puede estar vacio')
		.isString()
		.withMessage('El nombre del lugar debe ser una cadena de caracteres')
		.isLength({ min: 3 })
		.withMessage(
			'El nombre del tour debe componerse de al menos 3 caracteres'
		)
		.custom((value, { req }) => {
			if (value.trim() == 0)
				throw new Error(
					'El nombre no puede componerse unicamente de espacios'
				);
			return true;
		}),
	body('city')
		.exists()
		.withMessage('El campo ciudad no fue ingresado')
		.not()
		.isEmpty()
		.withMessage('El campo ciudad no puede estar vacio')
		.isString()
		.withMessage('El campo ciudad debe ser una cadena de caracteres')
		.isLength({ min: 3 })
		.withMessage(
			'El campo ciudad debe componerse de al menos 3 caracteres'
		)
		.custom((value, { req }) => {
			if (value.trim() == 0)
				throw new Error(
					'El campo ciudad no puede componerse unicamente de espacios'
				);
			return true;
		}),
	(req, res, next) => {
		validateResult(req, res, next);
	},
];
