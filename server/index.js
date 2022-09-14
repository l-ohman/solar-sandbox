const express = require("express")
const app = express();
const path = require("path");
const volleyball = require("volleyball");

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(volleyball);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
