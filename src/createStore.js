import { applyMiddleware, compose, createStore as createReduxStore } from 'redux'
import thunk from 'redux-thunk'
import makeRootReducer from './reducers/'

const createStore = (initialState = {}) => {

    const middleware = [thunk]

    const enhancers = []
    let composeEnhancers = compose

    const store = createReduxStore(
        makeRootReducer(),
        initialState,
        composeEnhancers(
            applyMiddleware(...middleware),
            ...enhancers
        )
    )

    return store
}

export default createStore