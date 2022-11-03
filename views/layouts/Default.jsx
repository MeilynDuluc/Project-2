const React = require('react')

class Default extends React.Component {
  render () {
    const { blog, title } = this.props
    return (
      <html>
        <head>
          <link rel='stylesheet' href='/css/app.css' />
          <title>{title}</title>
        </head>
        <body>
          <nav>
            <a href='/blog'>Go to Home Page For Blog</a>
            <a href='/blog/new'>Create a New blog</a><br />
            {blog ? <a href={`/blog/${blog._id}/edit`}> {blog.name} Edit Page </a> : ''}<br />
            {blog ? <a href={`/blog/${blog._id}`}>{blog.name} Show Page</a> : ''}<br />
          </nav>
          <h1>
            {title}
          </h1>

<img id="home" src="https://lh3.googleusercontent.com/T7VSZ3o-Ccq_mAovOzpo1EMQh6eNC9pQeWI2a3XHJSilahhYmtq2z3pO8ca0mgkAL7ZLkzcJL6GUA9FY2hWT_IlQYAfRe_rA9g2rEcTbFu-dp7YJlSnWXGhdElA_Uwz9hWuCn12vDA=w2400" alt="" /> <br />

          <a href="https://www.instagram.com/theodoreable_doodle/">FOLLOW ON INSTAGRAM FOR MORE PAWVENTURES</a><br /><br />
          
          {this.props.children}
        </body>
      </html>
    )
  }
}

module.exports = Default
