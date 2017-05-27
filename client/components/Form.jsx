import React from 'react'

export default class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                name: '',
                email: ''
            }
        }
    }
    handleSubmit(evt) {
        evt.preventDefault()
        console.log(evt)
        this.props.saveUser(this.state.user)
    }

    handleChange(evt) {
        let user = this.state.user
        user[evt.target.name] = evt.target.value
        this.setState({user})
    }

    render() {
        return (
            <form onSubmit={(evt) => this.handleSubmit(evt)}>
                <input type='text' name='name' placeholder='name' onChange={evt => this.handleChange(evt)} />
                <input type='email' name='email' placeholder='email' onChange={evt => this.handleChange(evt)} />
                <input type='submit' value='Save' />
            </form>
        )
    }
}
