import tasks from "../api/tasks"

export const TASK_IS_LOADING_ACTION = "task-is-loading"
export const TASK_CREATED = "task-created"
export const TASK_UPDATED = "task-updated"
export const TASK_DELETED = "task-deleted"
export const TASK_REFRESHED = "task-refreshed"

export const refreshList = () => {
    return dispatch => {
        dispatch({ type: TASK_IS_LOADING_ACTION, state: true })

        tasks.list()
            .then(data => {
                dispatch({ type: TASK_IS_LOADING_ACTION, state: false  })
                dispatch({ type: TASK_REFRESHED, list: data  })
            })
    }
}

export const createTask = (title, description) => {
    return dispatch => {
        dispatch({ type: TASK_IS_LOADING_ACTION, state: true  })

        tasks.create(title, description)
            .then(data => {
                dispatch({ type: TASK_IS_LOADING_ACTION, state: false  })
                dispatch({ type: TASK_CREATED, task: { _id: data._id, title: data.title, description: data.description } })
            })
    }
}

export const editTask = (id, title, description) => {
    return dispatch => {
        dispatch({ type: TASK_IS_LOADING_ACTION, state: true  })

        tasks.edit(id, title, description)
            .then(data => {
                dispatch({ type: TASK_IS_LOADING_ACTION, state: false  })
                dispatch({ type: TASK_UPDATED, task: { _id: data._id, title: title, description: description } })
            })
    }
}

export const removeTask = (id) => {
    return dispatch => {
        dispatch({ type: TASK_IS_LOADING_ACTION, state: true  })

        tasks.remove(id)
            .then(data => {
                dispatch({ type: TASK_IS_LOADING_ACTION, state: false  })
                dispatch({ type: TASK_DELETED, taskId: data._id }) 
            })
    }
}