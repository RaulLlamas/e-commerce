const controller = {
    index: (req, res) => {
      //res.sendFile(path.resolve("views/products/index.html"));
      res.render('index');
    }
  };
  
  module.exports = controller;