import { applyMiddleware , combineReducers , createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import addBookingReducer from "./addBooking/addBookingReducer"
import getBookingOnRequestReducer from "./getbookingonrequest/getBookingOnRequestReducer";
import getBookingOnUserIdRequestReducer from "./getBookingOnUserIdRequest/getBookingOnUserIdRequestReducer";

const store = createStore (

    combineReducers({

        addBooking : addBookingReducer,
        getBookingOnRequest : getBookingOnRequestReducer,
        getBookingOnUserIdRequest : getBookingOnUserIdRequestReducer,
    }),

    composeWithDevTools(applyMiddleware(thunk))
);

export default store;