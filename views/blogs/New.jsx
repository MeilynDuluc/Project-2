const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
  render () {
    return (
      <Default title='Create A New post' createNewBlog={true}>
        <form method='POST' action='/blog'>
          Title: <input type='text' name='name' placeholder='Title of  Here' /><br />
          Post: <input type='text' name='color' placeholder='Post   Here' /><br />
          image: <input type='text' name='image' /><br />
          <input type='submit' value='Submit ' />
        </form>
      </Default>
    )
  }
}

module.exports = New
