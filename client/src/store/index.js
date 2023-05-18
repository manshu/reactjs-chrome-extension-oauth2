import {applyMiddleware, legacy_createStore as createStore} from 'redux'
import reducers from '../reducers'
import reduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


export const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(reduxThunk)))