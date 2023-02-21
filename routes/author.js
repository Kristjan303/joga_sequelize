const express = require('express');
const router = express.Router();
const articleController = require('../controllers/author');

router.get('/author/:id', articleController.authorArticles);
module.exports = router;