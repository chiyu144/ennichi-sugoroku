import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";

import cellReducer from './reducers/cell';
import chessReducer from "./reducers/chess";
import characterReducer from "./reducers/character";

const createStore = () => {
    const store = reduxCreateStore(
        combineReducers({
            cell: cellReducer,
            chess: chessReducer,
            character: characterReducer
        }),
        applyMiddleware(
            logger,
        )
    );
    return store;
}

export default createStore;