import { combineReducers } from "redux"

import { 
    TASK_CREATED,
    TASK_UPDATED,
    TASK_DELETED,
    TASK_REFRESHED
} from "../actions/tasks"

export const list = (state = [], action) => {
    let newState = state.slice(),
        taskIndex 
    switch (action.type) {
        case TASK_CREATED:
            newState.push(action.task)
            break
        case TASK_UPDATED:
            taskIndex = newState.findIndex(t => t._id === action.task._id)
            let task = Object.assign({}, newState[taskIndex], { title: action.task.title, description: action.task.description })
            newState.splice(taskIndex, 1, task)
            break
        case TASK_DELETED:
            taskIndex = newState.findIndex(t => t._id === action.taskId)
            newState.splice(taskIndex, 1)
            break
        case TASK_REFRESHED:
            newState = action.list
    }
    return newState
}

export default combineReducers({
    list
})