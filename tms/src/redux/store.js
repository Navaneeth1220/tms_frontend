import { applyMiddleware , combineReducers , createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import addBookingReducer from "./bookingredux/addBooking/addBookingReducer"
import findByIdReducer from "./bookingredux/findbyid/findByIdReducer"
import findByUserIdReducer from "./bookingredux/findbyuserid/findByUserIdReducer";
import getBookingOnRequestReducer from "./bookingredux/getbookingonrequest/getBookingOnRequestReducer"

const store = createStore (

    combineReducers({

        addBooking : addBookingReducer,
        findById : findByIdReducer,
        findByUserId : findByUserIdReducer,
        getBookingOnRequest : getBookingOnRequestReducer,

    }),

    composeWithDevTools(applyMiddleware(thunk))
);

export default store;