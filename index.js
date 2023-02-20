const express = require ("express");
const app = express ();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const Sequelize = require ("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

sequelize
    .authenticate()
    .then(() =>{
        console.log('CONNNECTION HAS BEEN MADE WITH the DATA BASE!!!!!');
    })
    .catch(err => {
        console.error('Unableness TO BE CONNECTED has been CONFIRMED BY THE DATABASE', err)
    })
const articleRouter = require('./routes/article');
app.use('/' , articleRouter);
app.use('/article', articleRouter);

app.get("/", (req, res) => {
    res.json({ message: "welcome to sequel - ižžžžžžerrrrrr app."})
})

app.listen(3000, () => {
    console.log('Server is upo and runininiigiggnigiignigniginigni at http://localhost:3000  dont you dare misclick >:O')
})