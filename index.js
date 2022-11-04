const express = require("express");

const routes = require("./routes/flightRoute")

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.redirect('/api')
})

app.use("/api", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});