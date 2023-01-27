import multer from 'multer';
import path = require('path');

export const storage = multer.diskStorage({
	// setting files ubicacion for upload
	destination: './uploads/',
	// setting files size for upload
	limits: {
		fileSize: 1024 * 1024 * 5,
	},
	// setting files name for upload
	filename: (req, file, cb) => {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
		cb(null, file.fieldname + '-' + uniqueSuffix);
	},
	// setting files extension for upload
	fileFilter: (req, file, cb) => {
		const filetypes = /jpeg|jpg|png|gif/;
		const mimetype = filetypes.test(file.mimetype);
		const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
		if (mimetype && extname) {
			return cb(null, true);
		}
		cb('Error: File upload only supports the following filetypes - ' + filetypes);
	},
});
