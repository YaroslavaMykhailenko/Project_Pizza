const cors = require('cors')
const express = require("express");

const Pizza = require('./models/pizzaModel')

const app = express();
app.use(cors())
const db = require("./db");

app.use(express.json());

const pizzasRoute = require('./routes/pizzasRoute')


app.use('/api/pizzas/', pizzasRoute)

app.get("/", (req, res) =>{
    res.send("Server working");
});




const port = process.env.PORT || 5000;
app.listen(port, () => 'Server running on port port');