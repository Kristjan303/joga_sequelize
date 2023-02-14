const express = require ("express");
const app = express ();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get("/", (req, res) => {
    res.json({ message: "welcome to sequel - ižžžžžžerrrrrr app."})
})

app.listen(3000, () => {
    console.log('Server is upo and runininiigiggnigiignigniginigni at http://localhost:3000  dont you dare misclick >:O')
})