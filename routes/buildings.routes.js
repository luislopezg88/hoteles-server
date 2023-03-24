module.exports = function (app) {
	const buildingController = require("../controllers/Building.controller");
	app.get("/api/buildings", buildingController.findAll);
	app.post("/api/buildings", buildingController.create);
	app.get("/api/buildings/:id", buildingController.findById);
	app.put("/api/buildings/:id", buildingController.update);
	app.delete("/api/buildings/:id", buildingController.delete);
};