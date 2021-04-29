import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import addCustomerReducer from "./addCustomer/addCustomerReducer";
import fetchCustomerByIdReducer from "./fetchCustomerById/fetchCustomerByIdReducer";
import updateCustomerReducer from "./updateCustomer/updateCustomerReducer";


const store = createStore(
  combineReducers({
    fetchCustomerById: fetchCustomerByIdReducer,
    addCustomer: addCustomerReducer,
    updateCustomer:updateCustomerReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
