import { combineReducers } from "redux";
import { 
    USER_LOGIN_LOADING_ACTION,
    SET_CURRENT_USER_ACTION,
    SET_USER_ERROR_ACTION,
    DISPLAY_USER_FORM_ACTION,
    FORM_LOGIN,
} from "../actions/user"


const currentUser = (state = null, action) => {
    let newState = state
    if (action.type === SET_CURRENT_USER_ACTION) {
        newState = action.user
    }
    return newState
}

const message = (state = '', action) => {
    let newState = state
    if (action.type === SET_USER_ERROR_ACTION) {
        newState = action.error
    }
    if (action.type === DISPLAY_USER_FORM_ACTION) {
        newState = ''
    }
    return newState
}

const isLoading = (state = false, action) => {
    let newState = state
    if (action.type === USER_LOGIN_LOADING_ACTION)
        newState = action.state
    return newState
}

const form = (state = FORM_LOGIN, action) => {
    let newState = state
    if (action.type === DISPLAY_USER_FORM_ACTION) {
        newState = action.formId
    }
    return newState
}

export default combineReducers({
    ui: combineReducers({
        message,
        isLoading,
        form
    }),
    currentUser
})