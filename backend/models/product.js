const mongoose = require("mongoose")

// Define the Courses schema
const coursesSchema = new mongoose.Schema({
  phoneNumber:{type:Number},
  productDescription: { type: String },
  // URL:{type:String},
  price: {
    type: Number,
  },
  createdAt: { type: Date, default: Date.now },
})

// Export the Courses model
module.exports = mongoose.model("Course", coursesSchema)
