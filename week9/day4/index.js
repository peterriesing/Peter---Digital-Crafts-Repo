const express = require("express");
const app = express();
const PORT = 3002;

app.use(express.json());

app.listen(PORT, `listening on port: ${PORT}`);
