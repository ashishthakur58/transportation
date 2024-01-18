const express = require('express');
const router = express.Router();
const YourModel = require('./your-model'); // Import your Mongoose model

// Example route for handling login
router.post('/login', async (req, res) => {
    try {
        // Assuming YourModel has fields 'uname' and 'psw'
        const { uname, psw } = req.body;
        const user = await YourModel.findOne({ uname, psw });

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
