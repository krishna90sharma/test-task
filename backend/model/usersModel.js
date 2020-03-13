const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    userName: {type: String},
    email: {type: String},
    phoneNumber: {type: String}
});


// Export the model
var user = module.exports = mongoose.model('userRecords', UserSchema);
module.exports.get = function (callback, limit) {
    user.find(callback).limit(limit);
}
