// YOUR CODE HERE
const express = require('express')
const cors = require('cors')
const db = require('./data/db.json')
const fs = require('fs')

const app = express()






app.use(cors())





app.get('/', (req, res) => {
    res.status(200)
    res.send(db)
})


app.get('/:id', (req, res) => {
    const {id} = req.params
    let productsList = JSON.parse(fs.readFileSync('./data/db.json'));
    if(!productsList.products[id]) {
        res.status(404).send({ message: "Item is not found"});
        return;
    }
     else {
        res.status(200).send(productsList.products[id])
     }
} )


module.exports = app;