import {createStore, combineReducers, applyMiddleware} from 'redux';
import loginReducer from "./Login/login.reducer"
import thunk from 'redux-thunk';

const rootReducer = combineReducers(
    {
        login: loginReducer,
    }
)


const store = createStore(rootReducer, applyMiddleware(thunk))

export default store