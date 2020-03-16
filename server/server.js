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

//basic request to main page serving build as static
app.use('/build', express.static(path.join(__dirname, '../build')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
})


//one endpoint to run through middleware
app.post('/bigram', bigramController.readFile, bigramController.parse, (req, res) => {
    res.status(200).json({ histogram: res.locals.histogram })
})


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}...`));

module.exports = app;