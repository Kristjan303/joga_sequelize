const Sequelize = require ("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

const models = require('../models');

// get all data from the table
const authorArticles = (req, res) => {
    models.Article.findAll({
        where: {
            AuthorId: req.params.id
        },
        include: [{
            model: models.Author,
        }],
    })
        .then(articles => {
            return res.status(200).json({articles});
        })
        .catch(err => {
            return res.status(500).send(err.message);
        })
}

module.exports = {
    authorArticles
}