const routes = require("express").Router();
const Converter = require("./Service/index")

routes.post('/converter', (req , res) => {
    const reponse =  Converter.toJson(req.body);
    return res.json(reponse);

})

module.exports = routes

