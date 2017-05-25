import React from 'react'

export default class AddSchoolForm extends React.Component {
  constructor (props){
    super(props)
    this.itemModel = {  query: ''}
    this.state = {
      item : {...this.itemModel}
    }
  }

  handleSubmit (evt) {
    evt.preventDefault()

    this.setState({
      item: { ...this.itemModel }
    })
  }

  handleChange (evt) {
    const field = evt.target.name
    this.setState({
      item: {
        ...this.state.item,
        [field]: evt.target.value
      }
    })

  }

  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={this.state.item.name} onChange={this.handleChange.bind(this)} />

          <label htmlFor="name"></label>
          <input type="text" name="name" value={this.state.item.name} onChange={this.handleChange.bind(this)} />

          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={this.state.item.name} onChange={this.handleChange.bind(this)} />

        <input type="submit" value="Add" />
      </form>
    )
  }
}
