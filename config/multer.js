const multer = require('multer');

const imageFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
      cb(null, true);
    } else {
      cb("Please upload only images.", false);
    }
  };
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/img/products');
    },
    filename: function(req, file, cb){
        console.log(file.originalname);
        cb(null, 'img-' + Date.now() + file.originalname);
    }
});

const uploadFile = multer({ storage ,imageFilter});

module.exports = uploadFile;
