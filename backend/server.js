let express = require('express');
let apiRoutes = require('./routes/index.routes');
let mongoose = require('mongoose');
let body_parser = require('body-parser');

let app = express();
var cors = require('cors');
app.use(cors());
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}));
app.use(body_parser.text());
app.use(body_parser.json({ type: 'application/json'}));

// set up mongoose
mongoose.connect('mongodb://127.0.0.1:27017/userRecords', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=> {
    console.log('Database Connection Successful!!!');
  })
  .catch((error)=> {
    console.log('Error connecting to database');
  });

  // set up port
let port = process.env.PORT || 8080;

// set up route
app.get('/', (req,res) => res.send("Welcome to node server"));
app.use('/user', apiRoutes);

app.listen(port, function() {
        console.log("Running on port",  port);
})
