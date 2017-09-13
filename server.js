// Require Dependencies 
const express = require('express');
const app = express();
const mongojs = require('mongojs');
const bodyParser = require('body-parser');
// Which Database and Collection being used 
const db = mongojs('contactList', ['contactList']);
// Port used with express
const PORT = 3000;

app.use(express.static(__dirname + "/public"))
app.use(bodyParser.json());

// GET request for data in ContactList
app.get('/contactList', function(req, res) {
    console.log("I received a GET request");

    // Find what is in the database
    db.contactList.find(function(err, docs) {
        console.log(docs);
        res.json(docs);
    });
});

// POST request to insert user data to database
app.post('/contactList', function(req, res) {
    console.log(req.body)
    db.contactList.insert(req.body, function(err, doc) {
        res.json(doc);
    })
});

//
app.delete('/contactlist/:id', function (req, res) {
	// Grab value of id from the URL
	var id = req.params.id;
	console.log(id)

})

// App is listening on Port 3000
app.listen(PORT);;
console.log(`Server running on Port ${PORT}`);