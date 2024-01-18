const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    uname: {
        type: String,
        required: true,
        unique: true,
    },
    psw: {
        type: String,
        required: true,
    },
});

userSchema.pre('save', async function (next) {
    const user = this;

    if (!user.isModified('psw')) {
        return next();
    }

    try {
        const hashedPassword = await bcrypt.hash(user.psw, 10);
        user.psw = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }
});

userSchema.methods.comparePassword = async function (candidatePassword) {
    try {
        return await bcrypt.compare(candidatePassword, this.psw);
    } catch (error) {
        throw error;
    }
};

const User = mongoose.model('User', userSchema);

module.exports = User;
