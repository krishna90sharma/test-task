const User = require('../model/usersModel');

// Get all Users
exports.getAllUsers = function (req, res) {
  User.find()
    .select('_id userName email phoneNumber')
    .then((allUsers) => {
      return res.status(200).json({
        success: true,
        message: 'A list of all users',
        users: allUsers,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: err.message,
      });
    });
}

// create new User
exports.createUser = function (req, res) {
  const user = new User(
    {
      userName: req.body.userName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber
    }
  );
  return user.save().then((newUser) => {
    return res.status(201).json({
      success: true,
      message: 'New user created',
      newUser: newUser,
    });
  })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: error.message,
      });
    });

}
//update user
exports.update = function (req, res) {
  let id = req.params.id;
  let updateObject = req.body;
  User.updateOne({ _id: id }, { $set: updateObject })
    .exec()
    .then(() => {
      res.status(200).json({
        success: true,
        message: 'User is updated',
        updateUser: updateObject,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.'
      });
    });
}


// delete a user
exports.delete = function (req, res) {

  const id = req.params.id;
  User.findByIdAndRemove(id)
    .exec()
    .then(() => {
      res.status(200).json({
      success: true,
      message: 'Deleted Successfully',
      deletedUser: id
      })
    })
    .catch((err) => res.status(500).json({
      success: false,
      message: 'Server error. Please try again.'
    }));
}
