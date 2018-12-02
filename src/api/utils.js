
export const objectToParamString = (object) => {
    let params = []
    Object.keys(object).forEach (key => {
        params.push(key + "=" + encodeURIComponent(object[key]))
    })
    return params.join('&')
}