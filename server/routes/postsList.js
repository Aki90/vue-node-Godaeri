const express = require('express');
const db = require('../models');

const router = express.Router();

// GET /
router.get('/', async (req, res) => {
    try {
        const posts = await db.Post.findAll({
            include: [{
                model: db.User,
                attributes: ['id', 'nickname'],
            }]
        });

        return res.status(200).json({
            posts: posts
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
});

module.exports = router;
