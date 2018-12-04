import { objectToParamString } from "./utils"

import { 
    FETCH_GET_OPTIONS,
    FETCH_POST_OPTIONS,
    endpoints
} from "./common"

export const isLoggedIn = () => {
    return fetch(endpoints.loggedin, FETCH_GET_OPTIONS).then(res => {
        if (res.ok) {
            return res.json()
        } else if (res.status === 403) {
            return false
        } else {
            throw Error(res.statusText)
        }
    })
}

export const signup = (username, password) => {
    return fetch(endpoints.signup, {
        ...FETCH_POST_OPTIONS,
        body: objectToParamString({ username, password })
    })
    .then(res => res.ok && res.json())
    .then((data) => {
        if (data.message)
            throw Error(data.message)
        else {
            return data
        }
    })
}

export const login = (username, password) => {
    return fetch(endpoints.login, {
        ...FETCH_POST_OPTIONS,
        body: objectToParamString({ username, password })
    })
    .then(res => res.ok && res.json())
    .then(data => {
        if (data.message)
            throw Error(data.message)
        else {
            return data
        }
    })
}

export const logout = () => {
    return fetch(endpoints.logout, FETCH_POST_OPTIONS)
    .then(res => res.ok && res.json())
    .then(data => {
        if (!data.message || data.message !== 'Success')
            throw Error("Ooops")
        else 
            return true
    })
}

export default {
    signup,
    login,
    logout,
    isLoggedIn
}