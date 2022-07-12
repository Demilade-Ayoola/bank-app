import { createStore } from 'redux'
import { bankingReducer } from '../reducers/bankingReducers'
import { composeWithDevTools} from 'redux-devtools-extension'

export const store = createStore(bankingReducer, composeWithDevTools());