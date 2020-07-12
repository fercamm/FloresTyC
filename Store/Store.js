import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import initSagaFunctions from './Saga/SagaInitializer';
import { reducerClub } from './ClubStore';

const sessionReducer = (state = null, action) => {
    switch(action.type){
        case 'INIT_SESSION':
            console.log('INIT_SESSION');
            return action.usuario;
        case 'CLOSE_SESSION':
            console.log('CLOSE_SESSION');
            return null;
        default:
            return state;
    }
}

const reducers = combineReducers({
    reducerClub,
    sessionReducer,
    form
})

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(initSagaFunctions);

export default store;