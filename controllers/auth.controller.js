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
			rolId: 1,
			status: false
		})

		const token = jwt.sign({ id: user.id }, config.secret, {
			expiresIn: 86400 // 24 hours
		});

		res.status(200).send({
			id: user.id,
			userName: user.username,
			email: user.email,
			status: user.status,
			rolId: user.rolId,
			accessToken: token
		});
		
	} catch (erro) {
		console.log('error', err.message)
    res.status(500).send({ message: err.message });
	}
};

exports.signin = (req, res) => {
  User.findOne({where: {userName: req.body.userName}}).then(user => {
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

      /*
			var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        
      });
			*/

			res.status(200).send({
				id: user.id,
				userName: user.username,
				email: user.email,
				rolId: user.rolId,
				status: user.status,
				accessToken: token
			});

    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};