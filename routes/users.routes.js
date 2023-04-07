module.exports = function (app) {
	const userController = require("../controllers/User.controller");
	
	app.post("/api/users", userController.create);
	app.get("/api/users/:id", userController.findById);
	app.delete("/api/users/:id", userController.delete);
	app.put("/api/users/:id", userController.update);
	app.get("/api/users", userController.findAll);



};