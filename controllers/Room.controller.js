const models = require("../models/index");
const Room = models.Room;

exports.findById = async (req, res) => {
    try {
      const row = await Room.findByPk(req.params.id, {
        
      });
      res.send(row)
    } catch (error) {
      res.status(400).json({ message: "Error de Servidor", success: false });
    }
  };

exports.findAll = async (req, res) => {
    try {
      const rows = await Room.findAll({
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

exports.delete = async(req, res) => {
    const id = req.params.id;
    try {
      await Room.destroy({
        where: { id },
      });
      res.status(200).send("deleted successfully a Room with id = " + id);
    } catch (error) {
      res.status(400).json({ message: "Error de Servidor", success: false });
    }
};


exports.create = async(req, res) => {
    
    try {
      const row = await RoomType.create({
            code: req.body.code,
            name: req.body.name,
            price: req.body.price,
            address: req.body.address,
            people: req.body.people,
            status: req.body.status,
            roomTypeId: req.body.roomTypeId,
            buildingId: req.body.buildingId
            
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
            code: req.body.code,
            name: req.body.name,
            price: req.body.price,
            address: req.body.address,
            people: req.body.people,
            status: req.body.status,
            roomTypeId: req.body.roomTypeId,
            buildingId: req.body.buildingId
      },
      {
        where: { id },
      })
      res.status(200).send("updated successfully a Type with id = " + id);
    } catch (error) {
      res.status(400).json({ message: "Error de Servidor", success: false });
    }
};