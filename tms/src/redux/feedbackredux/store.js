import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import addFeedbackReducer from "./feedbackredux/addfeedback/addFeedbackReducer"
const store = createStore(
    combineReducers({
      
      addFeedback: addFeedbackReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk))
  );
  
  export default store;