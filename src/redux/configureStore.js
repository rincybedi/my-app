import { combineReducers } from "redux";
import cryptoReducer from '../redux/reducers/crypto'

export const reducers = {
    cryptoState: cryptoReducer,
}

export const rootReducer = combineReducers({
    ...reducers,
});

