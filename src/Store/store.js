import {createStore, combineReducers, applyMiddleware} from 'redux';
import loginReducer from "./Login/login.reducer"
import animalsReducer from "./Animals/animals.reducer"
import selectAnimalReducer from "./SelectAnimal/selectAnimal.reducer"
import thunk from 'redux-thunk';

const rootReducer = combineReducers(
    {
        login: loginReducer,
        animals:animalsReducer,
        selectAnimal:selectAnimalReducer,
    }
)


const store = createStore(rootReducer, applyMiddleware(thunk))

export default store