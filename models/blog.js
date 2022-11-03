const mongoose = require('mongoose')

// Make a Schema
const blogSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  image: { type: String }
})

// Make a Model From The Schema
const Blog = mongoose.model('Blog', blogSchema)

// Export The Model For Use In The App
module.exports = Blog
