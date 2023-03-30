const models = require("../models/index");
const User = models.User;
const config = require("../config/auth.config");
const Role = models.Role;

const Op = models.Sequelize.Op;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
	try {
		const user = await User.create({
			userName: req.body.userName,
			email: req.body.email,
			password: bcrypt.hashSync(req.body.password, 8),
			RoleId: 1,
			status: false
		})

		const token = jwt.sign({ id: user.id }, config.secret, {
			expiresIn: 86400 // 24 hours
		});
	
		const rol = await user.getRole()

		res.status(200).send({
			id: user.id,
			userName: user.username,
			email: user.email,
			status: user.status,
			RoleId: user.RoleId,
			accessToken: token,
			rol: rol
		});
		
	} catch (err) {
		console.log('error', err.message)
    	res.status(500).send({ message: err.message });
	}
};

exports.signin = async(req, res) => {

	try {
		const user = await User.findOne({
			where: {userName: req.body.userName},
			include: [
				{model: Role },
			],
		})
		if (!user) {
			return res.status(404).send({ message: "User Not found." });
		}
		const passwordIsValid = bcrypt.compareSync(
			req.body.password,
			user.password
		);

		if (!passwordIsValid) {
			return res.status(401).send({
				accessToken: null,
				message: "Invalid Password!"
			});
		}

		const token = jwt.sign({ id: user.id }, config.secret, {
			expiresIn: 86400 // 24 hours
		});
		res.status(200).send({
			id: user.id,
			userName: user.username,
			email: user.email,
			status: user.status,
			RoleId: user.RoleId,
			accessToken: token,
			rol: user.Role
		});
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
};