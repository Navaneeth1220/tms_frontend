import { applyMiddleware , combineReducers , createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import addBookingReducer from "./bookingredux/addBooking/addBookingReducer"
import findByIdReducer from "./bookingredux/findbyid/findByIdReducer"
import findByUserIdReducer from './bookingredux/findByUserId/findByUserIdReducer'
import getBookingOnRequestReducer from "./bookingredux/getbookingonrequest/getBookingOnRequestReducer";
import getBookingOnUserIdRequestReducer from "./bookingredux/getBookingOnUserIdRequest/getBookingOnUserIdRequestReducer";

const store = createStore (

    combineReducers({

        addBooking : addBookingReducer,
        findById : findByIdReducer,
        findByUserId : findByUserIdReducer,
        getBookingOnRequest : getBookingOnRequestReducer,
        getBookingOnUserIdRequest : getBookingOnUserIdRequestReducer,
    }),

    composeWithDevTools(applyMiddleware(thunk))
);

export default store;