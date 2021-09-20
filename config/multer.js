const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/img/products');
    },
    filename: function(req, file, cb){
        console.log(file.originalname);
        cb(null, 'img-' + file.originalname);
    }
});

const uploadFile = multer({ storage });

module.exports = uploadFile;
