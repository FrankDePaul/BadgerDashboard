const badgers = require("./../controllers/badgers");

module.exports = (app)=>{
    app.get("/badgers", badgers.index),
    app.post("/badgers", badgers.create),
    app.get("/badgers/:id", badgers.show),
    app.put("/badgers/:id", badgers.update),
    app.delete("/badgers/:id", badgers.remove)
}