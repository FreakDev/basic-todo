
import { 
    FETCH_GET_OPTIONS,
    FETCH_POST_OPTIONS,
    endpoints
} from "./common"
import { objectToParamString } from "./utils";


export const list = () => {
    return fetch (endpoints.tasksList, FETCH_GET_OPTIONS)
        .then(res => res.ok && res.json())
}

export const create = (title, description) => {
    let params = { title, description }
    return fetch (endpoints.taskCreate, {
        ...FETCH_POST_OPTIONS,
        body: objectToParamString(params)
    })
        .then(res => res.ok && res.json())
}

export const edit = (id, title, description) => {
    let params = { title, description }
    return fetch (endpoints.taskEdit.replace(":id", id), {
        ...FETCH_POST_OPTIONS,
        body: objectToParamString(params)
    })
        .then(res => res.ok && res.json())
}

export const remove = (id) => {
    return fetch (endpoints.taskDelete.replace(":id", id), FETCH_POST_OPTIONS)
        .then(res => res.ok && res.json())
}

export default {
    list,
    create,
    edit,
    remove
}