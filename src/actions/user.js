
import user from "../api/user"

export const USER_LOGIN_LOADING_ACTION = "user-loggin-loading"
export const SET_CURRENT_USER_ACTION = "set-user"
export const SET_USER_ERROR_ACTION = "set-user-error"

export const DISPLAY_USER_FORM_ACTION = "display-user-form"


export const FORM_LOGIN = "form-login"
export const FORM_SIGNUP = "form-signup"

export const isLoggedIn = () => {
    return (dispatch) => {
        dispatch({ type: USER_LOGIN_LOADING_ACTION, state: true })

        user.isLoggedIn().then(user => {
            dispatch({ type: USER_LOGIN_LOADING_ACTION, state: false })
            if (user !== false) {
                dispatch({
                    type: SET_CURRENT_USER_ACTION,
                    user
                })
            }
        })
    } 
}

export const signup = (username, password) => {
    return (dispatch) => {
        dispatch({ type: USER_LOGIN_LOADING_ACTION, state: true })

        user.signup(username, password).then((user) => {
            dispatch({ type: USER_LOGIN_LOADING_ACTION, state: false })
            dispatch({ type: SET_CURRENT_USER_ACTION, user })
        }, error => {
            dispatch({ type: USER_LOGIN_LOADING_ACTION, state: false })
            dispatch({ type: SET_USER_ERROR_ACTION, error:error.message })
        })
    } 
}

export const login = (username, password) => {
    return (dispatch) => {
        dispatch({ type: USER_LOGIN_LOADING_ACTION, state: true })

        user.login(username, password).then((user) => {
            dispatch({ type: USER_LOGIN_LOADING_ACTION, state: false })
            dispatch({ type: SET_CURRENT_USER_ACTION, user })
        }, error => {
            dispatch({ type: USER_LOGIN_LOADING_ACTION, state: false })
            dispatch({ type: SET_USER_ERROR_ACTION, error:error.message })
        })
    } 
}

export const logout = () => {
    return (dispatch) => {
        dispatch({ type: USER_LOGIN_LOADING_ACTION, state: true })

        user.logout().then(res => {
            dispatch({ type: USER_LOGIN_LOADING_ACTION, state: false })
            res && dispatch({ type: SET_CURRENT_USER_ACTION, user: null })
        })
    }
}

export const displayForm = (formId) => {
    return {
        type: DISPLAY_USER_FORM_ACTION,
        formId
    }
} 