import logo from './logo.svg';
import './App.css';
import AddFeedback from './component/feedback/AddFeedback';
import FeedbackHome from "./component/feedback/FeedbackHome";
import FeedbackNavbar from "./component/feedback/FeedbackNavbar";
import store from "./redux/feedbackredux/feedbackredux";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import GetFeedbackDetailsCustomerId from "./component/feedback/GetFeedbackDetailsCustomerId";



function App() {

  
  return (

    <Provider store={store} >

    <Router>
      <FeedbackNavbar />
      <div className="container" style={{ marginTop: '50px' }}>

        <div className="row">

          <div className="col-md-9">

            <Switch>

              <Route exact path="/" component={FeedbackHome} />

              <Route exact path="/addfeedback" component={AddFeedback} />
              <Route exact Path="/feedbackdetailsByCustomerId" component={GetFeedbackDetailsCustomerId}/>
            </Switch>

          </div>
        </div>
      </div>

    </Router>
  </Provider>
  )
}
export default App;