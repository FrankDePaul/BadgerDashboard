const mongoose = require("mongoose");
const Badger = mongoose.model("Badger");

module.exports = {
    index: (req, res)=>{
        Badger.find({})
        .then(badger => res.json(badger))
        .catch(err => res.send(err))
    },
    create: (req, res)=>{
        Badger.create(req.body)
        .then(badger => res.json(badger))
        .catch(err => res.send(err))
    },
    show: (req, res)=>{
        Badger.findById(req.params.id)
        .then(badger => res.json(badger))
        .catch(err => res.send(err))
    },
    update: (req, res)=>{

        Badger.findByIdAndUpdate({_id:req.params.id},req.body)
        .then(badger => res.json(badger))
        .catch(err => res.send(err))
    },
    remove: (req, res)=>{

        Badger.findByIdAndRemove({_id:req.params.id})
        .then(badger => res.json(badger))
        .catch(err => res.send(err))
    }
}