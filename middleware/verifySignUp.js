const models = require("../models/index");
const User = models.User;
const Role = models.Role;

const checkDuplicateUsernameOrEmail = async (req, res, next) => {

  try {
    const user = await User.findOne({where: {userName: req.body.userName}});
    if (user) {
      res.status(400).send({message: "Failed! Username is already in use!"});
      return;
    }
    // Email
    const user2 = await User.findOne({where: {email: req.body.email}})
    if (user2) {
      res.status(400).send({message: "Failed! Email is already in use!"});
      return;
    }
    next();
  } catch (error) {
    console.log('error', error.message)
    res.status(500).send({ message: error.message });
  }
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
};
module.exports = verifySignUp;