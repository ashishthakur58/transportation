const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    uname: {
        type: String,
        required: true,
        trim: true,
    },
    psw: {
        type: String,
        required: true,
        // You might want to add additional validation or hashing for passwords
    },
});

const UserModel = mongoose.model('UserModel', userSchema);

module.exports = UserModel;
