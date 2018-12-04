import { combineReducers } from "redux"
import user from "./user"
import tasks from "./tasks"

const makeRootReducer = () => {
    return combineReducers({
        user,
        tasks
    })
}

export default makeRootReducer