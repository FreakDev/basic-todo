import React, { Fragment } from "react"
import { connect } from "react-redux"

import { FORM_LOGIN } from "../../actions/user"

import { signup, displayForm } from "../../actions/user"

class SignUp extends React.Component {
    constructor(props) {
        super(props)

        this.form = null
        this.onSubmit = this.onSubmit.bind(this)
        this.onClickLogin = this.onClickLogin.bind(this)
    }

    onClickLogin (e) {
        e.preventDefault()
        this.props.displayLogin()
    }

    onSubmit (e) {
        e.preventDefault()
        let values = Array.prototype.slice.call(this.form.elements).map(e => {
            return e.tagName === "INPUT" ? e.value : null
        }).filter(e => e !== null)

        this.props.signup(...values)
    }

    render () {
        return (
            <Fragment>
                <h2>Sign Up</h2>
                <form ref={r => this.form = r} onSubmit={this.onSubmit}>
                    <input name="username" />
                    <input name="password" type="password" />
                    <button type="submit">SIGNUP</button>
                    <a onClick={ this.onClickLogin } href="#">login</a>
                </form>
            </Fragment>
        )
    }
}

export default connect(
    state => ({}),
    dispatch => ({
        signup: (user, password) => dispatch(signup(user, password)),
        displayLogin: () => dispatch(displayForm(FORM_LOGIN))
    })
)(SignUp)