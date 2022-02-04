const { Router } = require("express");
const api = Router();

api.get("*", (req, res) => res.send("Hello."));

module.exports = api;
