module.exports = function (app) {
	const userController = require("../controllers/User.controller");
	
	app.post("/api/users", userController.create);
	app.get("/api/users/:id", userController.findById);



};