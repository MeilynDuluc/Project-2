const apiController = {
    index(req, res, next){
      res.json(res.locals.data.blog)
    },
    show(req, res, next){
      res.json(res.locals.data.blog)
    }
  }
  
  // We only need Index and Show because we are currently only ever showing a list of blog
  // Or we are showing a single blog
  // Additional Routes will be added on Tuesday once we incorporate nuanced functionality
  module.exports = apiController