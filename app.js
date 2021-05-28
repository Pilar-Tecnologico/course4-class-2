const express = require('express');
const app = express();
const playerData = require('./data.json');
app.use(express.json());


app.get('/', (req, res) => {
    res.json({
        hello: 'world'
    });
});

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    const userAge = req.query.age;
    const userRole = req.query.role;
    console.log(userAge);
    res.status(200).send(userRole);
});

app.post('/user/new', (req, res) => {
    const bodyData = req.body;
    const age = Number(bodyData.age);
    if(age  === 20){
        res.json({status: 'ok'})
    } else {
        res.status(409).json({status: 'Not ok'})
    }
});

app.get('/players/:name', (req, res) => {
    const name = req.params.name;
    playerData.players.forEach(player => {
        if(player.name === name){
            res.status(200).json(player);
        }
    });
    res.status(404).json({status: 'Error. Player not found'});
})

app.listen(3000, () => {
    console.log('Express server started!');
});