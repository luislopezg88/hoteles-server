module.exports = function (app) {
	const userController = require("../controllers/Building.controller");
	
	app.post("/api/rooms", roomController.create);
	app.get("/api/rooms/:id", roomController.findById);
	app.post("/api/rooms", roomController.delete);
	app.get("/api/rooms/:id", roomController.update);
	app.get("/api/rooms/:id", roomController.findAll);



};