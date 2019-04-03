import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";

import cellReducer from './reducers/cell';

const createStore = () => {
    const store = reduxCreateStore(
        combineReducers({
            cell: cellReducer,
        }),
        applyMiddleware(
            logger,
        )
    );
    return store;
}

export default createStore;