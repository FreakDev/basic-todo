
export const FETCH_POST_OPTIONS = {
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    },
    method: 'POST'
}

export const FETCH_GET_OPTIONS = {
    credentials: 'same-origin',
    method: 'GET'
}

export const endpoints = {
    loggedin: "/api/loggedin",
    signup: "/api/signup",
    login: "/api/login",
    logout: "/api/logout",

    tasksList: "/api/tasks",
    taskCreate: "/api/tasks/create",
    taskEdit: "/api/tasks/edit/:id",
    taskDelete: "/api/tasks/delete/:id"
}