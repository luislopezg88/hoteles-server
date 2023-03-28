const models = require("../models/index");
const User = models.User;

exports.findById = async (req, res) => {
  try {
    const row = await User.findByPk(req.params.id, {
      
    });
    res.send(row)
  } catch (error) {
    res.status(400).json({ message: "Error de Servidor", success: false });
  }
};

exports.create = async(req, res) => {
    console.log("entra en el create user controller");
    try {
      const row = await User.create({
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
            status: req.body.status
      });
      res.send(row); 
    } catch (error) {
      console.log(error)
      res.status(400).json({ message: "Error de Servidor", success: false });
    }
};


  