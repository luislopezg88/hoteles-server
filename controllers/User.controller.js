const models = require("../models/index");
const User = models.User;
const bcrypt = require('bcryptjs');

exports.findById = async (req, res) => {
  try {
    const row = await User.findByPk(req.params.id, {
      
    });
    res.send(row)
  } catch (error) {
    res.status(400).json({ message: "Error de Servidor", success: false });
  }
};

exports.findAll = async (req, res) => {
  try {
    const rows = await User.findAll({
      include: [
        {model: models.Role },
      ],
    });
    res.send(rows);
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: "Error de Servidor", success: false });
  }
};

exports.create = async(req, res) => {
    
    try {
      const row = await User.create({
            userName: req.body.userName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10) ,
            status: req.body.status
      });
      res.send(row); 
    } catch (error) {
      console.log(error)
      res.status(400).json({ message: "Error de Servidor", success: false });
    }
};


exports.update = async(req, res) => {
  const id = req.params.id;
  try {
    await User.update({
      userName: req.body.userName,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10) ,
      status: req.body.status
    },
    {
      where: { id },
    })
    res.status(200).send("updated successfully a User with id = " + id);
  } catch (error) {
    res.status(400).json({ message: "Error de Servidor", success: false });
  }
};


exports.delete = async(req, res) => {
  const id = req.params.id;
  try {
    await User.destroy({
      where: { id },
    });
    res.status(200).send("deleted successfully a User with id = " + id);
  } catch (error) {
    res.status(400).json({ message: "Error de Servidor", success: false });
  }
};


  