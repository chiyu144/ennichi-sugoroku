import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger";

import cellReducer from './reducers/cell';
import characterReducer from "./reducers/character";

const createStore = () => {
    const store = reduxCreateStore(
        combineReducers({
            cell: cellReducer,
            character: characterReducer
        }),
        composeWithDevTools(
            applyMiddleware(
                logger,
            )
        )
    );
    return store;
}

export default createStore;