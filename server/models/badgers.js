const mongoose = require("mongoose");

const BadgerSchema = new mongoose.Schema({
    name: {type: String, required:[true, "Please enter a badgers name!"], minlength:[3, "Name must be at least 3 characters"]},
    color: {type: String, required:[true, "Please enter a color!"], minlength:[3, "Color must be at least 3 characters"]},
},

 {timestamps: true});


 BadgerSchema.pre('findOneAndUpdate', function(next) {
    
    this.options.runValidators = true;
    next();
    
    
  });




mongoose.model("Badger", BadgerSchema);






