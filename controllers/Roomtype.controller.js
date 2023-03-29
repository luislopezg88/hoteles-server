const models = require("../models/index");
const RoomType = models.RoomType;



exports.findById = async (req, res) => {
    try {
      const row = await RoomType.findByPk(req.params.id, {
        
      });
      res.send(row)
    } catch (error) {
      res.status(400).json({ message: "Error de Servidor", success: false });
    }
  };

exports.findAll = async (req, res) => {
    try {
      const rows = await RoomType.findAll({
        include: [
          {model: models.Room },
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
      const row = await RoomType.create({
            name: req.body.name,
            
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
      await RoomType.update({
        name: req.body.name,
      },
      {
        where: { id },
      })
      res.status(200).send("updated successfully a Type with id = " + id);
    } catch (error) {
      res.status(400).json({ message: "Error de Servidor", success: false });
    }
};


exports.delete = async(req, res) => {
    const id = req.params.id;
    try {
      await RoomType.destroy({
        where: { id },
      });
      res.status(200).send("deleted successfully a Type with id = " + id);
    } catch (error) {
      res.status(400).json({ message: "Error de Servidor", success: false });
    }
};
  
