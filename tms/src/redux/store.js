import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import addCustomerReducer from "./customer/addCustomer/addCustomerReducer";
import fetchCustomerByIdReducer from "./customer/fetchCustomerById/fetchCustomerByIdReducer";


const store = createStore(
  combineReducers({
    fetchCustomerById: fetchCustomerByIdReducer,
    addCustomer: addCustomerReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
