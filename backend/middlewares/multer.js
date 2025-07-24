import multer from 'multer'


// Multer Middleware for parsing formData

const storage = multer.diskStorage({
    filename: function (re, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage });


export default upload;