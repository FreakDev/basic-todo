import { combineReducers } from "redux"
import user from "./user"

const makeRootReducer = () => {
    return combineReducers({
        user
    })
}

export default makeRootReducer