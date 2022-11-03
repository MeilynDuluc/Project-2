const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { name, color, image } = this.props.blog
    const capName = name[0].toUpperCase() + name.substring(1)
    return (
      <Default title={`${capName} Show Page`} blog={this.props.blog}>
        <p>{capName}  {color} </p>
        <img src={`${image}`}></img>
      </Default>
    )
  }
}

module.exports = Show
