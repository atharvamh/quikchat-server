const express = require("express");
const app = express();
const port = 8135;

app.get("/", (req, res) => {
    res.send("GET request success").status(200);
});

app.listen(port, () => {
    console.info(`Server started on port : ${port}`);
})