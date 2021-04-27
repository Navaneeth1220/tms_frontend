import logo from './logo.svg';
import './App.css';
import AddFeedback from './component/feedback/AddFeedback';
import FeedbackHome from "./component/feedback/FeedbackHome";
import FeedbackNavbar from "./component/feedback/FeedbackNavbar";
import store from "./redux/feedbackredux/feedbackredux";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import GetFeedbackDetailsCustomerId from "./component/feedback/GetFeedbackDetailsCustomerId";
import DisplayFeedbackList from './component/feedback/DisplayFeedbackList';



function App() {

  
  return (
    <div>
      <Provider store={store}>
      <AddFeedback/>
      </Provider>
    </div>
  )
}
export default App;