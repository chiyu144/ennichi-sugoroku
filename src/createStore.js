import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import cellReducer from './reducers/cell';
import characterReducer from "./reducers/character";
import eventReducer from "./reducers/event";

const createStore = () => {
    const store = reduxCreateStore(
        combineReducers({
            cell: cellReducer,
            character: characterReducer,
            event: eventReducer
        }),
        composeWithDevTools(
            applyMiddleware()
        )
    );
    return store;
}

export default createStore;