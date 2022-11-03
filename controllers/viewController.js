const RESOURCE_PATH = '/blog'
const viewController = {
  index (req, res, next) {
    res.render('blogs/Index', res.locals.data)
  },
  show (req, res, next) {
    res.render('blogs/Show', res.locals.data)
  },
  edit (req, res, next) {
    res.render('blogs/Edit', res.locals.data)
  },
  newView (req, res, next) {
    res.render('blogs/New')
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    const blogId = req.params.id || res.locals.data.blog._id
    res.redirect(RESOURCE_PATH + `/${res.locals.data.blog.id}`)
  }
}

module.exports = viewController
