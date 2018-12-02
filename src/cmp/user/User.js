import React from "react"
import { connect } from "react-redux";

import {
    FORM_LOGIN,
    FORM_SIGNUP,
    logout,
    isLoggedIn
} from "../../actions/user"

import Login from "./Login"
import SignUp from "./SignUp"

class User extends React.Component {
    constructor(props) {
        super(props)

        this.onClickLogout = this.onClickLogout.bind(this)
    }

    onClickLogout (e) {
        e.preventDefault()
        this.props.logout()
    }

    componentDidMount() {
        this.props.checkLogin()
    }

    render () {
        const props = this.props

        let form
        if (props.form === FORM_LOGIN)
            form = <Login />
            
        if (props.form === FORM_SIGNUP)
            form = <SignUp />
    
        return (
            <div className="user_box">
                { props.currentUser ? 
                    <div className="user_box-current">
                        { props.currentUser.username }
                        <a href="#" onClick={ this.onClickLogout } >logout</a>
                    </div>
                    : 
                    <div className="user_box-forms">
                        { props.message ? (<p>{ props.message }</p>) : null }
                        { form }
                    </div>                            
                }
            </div>
        )
    }
 }

export default connect(
    state => ({
        message: state.user.ui.message,
        form: state.user.ui.form,
        currentUser: state.user.currentUser
    }),
    dispatch => ({
        logout: () => dispatch(logout()),
        checkLogin: () => dispatch(isLoggedIn())
    })
)(User)