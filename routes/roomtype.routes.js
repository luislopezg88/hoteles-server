module.exports = function (app) {
	const userController = require("../controllers/Building.controller");
	
	app.post("/api/roomtypes", roomtypeController.create);
	app.get("/api/roomtypes/:id", roomtypeController.findById);
	app.post("/api/roomtypes", roomtypeController.delete);
	app.get("/api/roomtypes/:id", roomtypeController.update);
	app.get("/api/roomtypes/:id", roomtypeController.findAll);



};