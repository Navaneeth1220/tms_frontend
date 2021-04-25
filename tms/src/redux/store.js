import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import addCustomerReducer from "./customer/addCustomer/addCustomerReducer";
import fetchCustomerByIdReducer from "./customer/fetchCustomerById/fetchCustomerByIdReducer";
import fetchCustomerByPackageIdReducer from "./customer/fetchCustomerByPackageId/fetchCustomerByPackageIdReducer";


const store = createStore(
  combineReducers({
    fetchCustomerById: fetchCustomerByIdReducer,
    fetchCustomerByPackageId: fetchCustomerByPackageIdReducer,
    addCustomer: addCustomerReducer,
    fetchCustomerByRouteId:fetchCustomerByIdReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
