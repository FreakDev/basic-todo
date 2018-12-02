import React, { Fragment } from "react"
import { connect } from "react-redux"

import { FORM_SIGNUP } from "../../actions/user"

import { login, displayForm } from "../../actions/user"

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.form = null
        this.onSubmit = this.onSubmit.bind(this)
        this.onClickSignUp = this.onClickSignUp.bind(this)
    }

    onClickSignUp (e) {
        e.preventDefault()
        this.props.displaySignUp()
    }

    onSubmit (e) {
        e.preventDefault()
        let values = Array.prototype.slice.call(this.form.elements).map(e => {
            return e.tagName === "INPUT" ? e.value : null
        }).filter(e => e !== null)

        this.props.login(...values)
    }

    render () {
        return (
            <Fragment>
                <h2>Login</h2>
                <form ref={r => this.form = r} onSubmit={this.onSubmit}>
                    <input name="username" />
                    <input name="password" type="password" />
                    <button type="submit">LOGIN</button>
                    <a onClick={ this.onClickSignUp } href="#">signup</a>
                </form>
            </Fragment>
        )
    }
}

export default connect(
    state => ({}),
    dispatch => ({
        login: (user, password) => dispatch(login(user, password)),
        displaySignUp: () => dispatch(displayForm(FORM_SIGNUP))
    })
)(Login)