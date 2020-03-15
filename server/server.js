const express = require('express')
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// port variable
const PORT = 8080;

//import controller
const bigramController = require('./controller')

//Parsing JSON req body from client
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//basic request to main page
app.use('/build', express.static(path.join(__dirname, '../build')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
})


app.post('/bigram', bigramController.readFile, (req, res) => {
    res.status(200).json({ text: res.locals.text })
})


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}...`));

module.exports = app;