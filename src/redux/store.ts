import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import currencyReducer from "./reducers/currency";

const rootReducer = combineReducers({
    currency: currencyReducer,
});

const store  = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type GetState = typeof store.getState;

export default store