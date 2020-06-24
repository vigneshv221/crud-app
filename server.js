const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = process.env.port || 5000;

//bodyparser middleware to parse requests of content-type application/json
app.use(bodyParser.json());

//middleware to parse requests of content-type application/x-www-from-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//Connecting to mongodb database
const db = require("./app/models/index");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to database"))
    .catch((err) => {
        console.log("Cannot connect to database", err);
        process.exit();
    });

// / route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to CRUD app" });
});

require("./app/routes/product.routes")(app);

app.listen(PORT, () => console.log(`server listening on PORT ${PORT}`));
