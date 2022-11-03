const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
  render () {
    const { name, _id, color, image } = this.props.blog
    return (
      <Default title={`${name} Edit Page`} blog={this.props.blog}>
        <form method='POST' action={`/blog/${_id}?_method=PUT`}>
          Title: <input type='text' name='name' defaultValue={name} /><br />
          Post: <input type='text' name='color' defaultValue={color} /><br />
          image: <input type='text' name='image' placeholder={image} /> <br />
          <input type='submit' value='Edit Blog' />
        </form>
      </Default>
    )
  }
}

module.exports = Edit
