const models = require("../models/index");
const Building = models.Building;

// Find all Buildings
exports.findAll = async (req, res) => {
  try {
    const rows = await Building.findAll({
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
// Find a Building by Id
exports.findById = async (req, res) => {
  try {
    const row = await Building.findByPk(req.params.id, {
      include: [
        {model: models.Room},
        {model: models.File}
      ],
    });
    res.send(row)
  } catch (error) {
    res.status(400).json({ message: "Error de Servidor", success: false });
  }
};
// Update a Building
exports.update = async(req, res) => {
  const id = req.params.id;
  try {
    await Building.update({
      code: req.body.code,
      address: req.body.address,
      rooms: req.body.Area,
      status: req.body.status
    },
    {
      where: { id },
    })
    res.status(200).send("updated successfully a Building with id = " + id);
  } catch (error) {
    res.status(400).json({ message: "Error de Servidor", success: false });
  }
};
// Create a Building
exports.create = async(req, res) => {
  try {
    const row = await Building.create({
      code: req.body.code,
			address: req.body.address,
			rooms: req.body.rooms,
			status: req.body.status
    });
    res.send(row); 
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: "Error de Servidor", success: false });
  }
};
// Delete a Building
exports.delete = async(req, res) => {
  const id = req.params.id;
  try {
    await Building.destroy({
      where: { id },
    });
    res.status(200).send("deleted successfully a Building with id = " + id);
  } catch (error) {
    res.status(400).json({ message: "Error de Servidor", success: false });
  }
};
