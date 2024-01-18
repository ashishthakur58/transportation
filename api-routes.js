const express = require('express');
const router = express.Router();
const UserModel = require('./transport'); // Import your Mongoose model

router.post('/login', async (req, res) => {
    try {
        const { uname, psw } = req.body;

        // Find the user in the database
        const user = await UserModel.findOne({ uname, psw });

        if (user) {
            // Successfully logged in
            res.json({ success: true });
        } else {
            // Invalid username or password
            res.status(401).json({ success: false, message: 'Invalid username or password' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;
