import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger";

import cellReducer from './reducers/cell';
import chessReducer from "./reducers/chess";
import characterReducer from "./reducers/character";
import gameReducer from "./reducers/game";

const createStore = () => {
    const store = reduxCreateStore(
        combineReducers({
            cell: cellReducer,
            chess: chessReducer,
            character: characterReducer,
            game: gameReducer
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