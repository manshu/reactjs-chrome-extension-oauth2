import {applyMiddleware, legacy_createStore as createStore} from 'redux'
import reducers from '../reducers'
import reduxThunk from 'redux-thunk'

export const store = createStore(reducers, {}, applyMiddleware(reduxThunk))