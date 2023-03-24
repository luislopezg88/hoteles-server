const models = require("../models/index");
const Building = models.Buildings;

// Find all Buildings
exports.findAll = (req, res) => {
  try {
    Building.findAll({
      include: [
        {model: models.Room, as: 'rooms'},
      ],
    }).then((rows) => {
      res.send(rows);
    });
  } catch (error) {
    res.status(400).json({ message: "Error de Servidor", success: false });
  }
};
// Find a Building by Id
exports.findById = (req, res) => {
  try {
    Building.findByPk(req.params.id, {
      include: [
        {model: models.Room, as: 'rooms'}
      ],
    }).then((rows) => {
      res.send(rows);
    });
  } catch (error) {
    res.status(400).json({ message: "Error de Servidor", success: false });
  }
};
// Update a Building
exports.update = (req, res) => {
  const id = req.params.id;
  try {
    Building.update(
      {
        code: req.body.code,
        address: req.body.address,
        rooms: req.body.Area,
        status: req.body.status
      },
      {
        where: { id },
      }
    ).then(() => {
      res.status(200).send("updated successfully a Building with id = " + id);
    });
  } catch (error) {
    res.status(400).json({ message: "Error de Servidor", success: false });
  }
};
// Create a Building
exports.create = (req, res) => {
  try {
    Building.create({
      code: req.body.code,
			address: req.body.address,
			rooms: req.body.Area,
			status: req.body.status
    })
      .then((row) => {
        res.send(bank);
      })
      .catch((row) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Building.",
        });
      });
  } catch (error) {
    res.status(400).json({ message: "Error de Servidor", success: false });
  }
};
// Delete a Building
exports.delete = (req, res) => {
  const id = req.params.id;
  try {
    Building.destroy({
      where: { id },
    })
      .then(() => {
        res.status(200).send("deleted successfully a Building with id = " + id);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while deleted the Building.",
        });
      });
  } catch (error) {
    res.status(400).json({ message: "Error de Servidor", success: false });
  }
};
