import logo from './logo.svg';
import './App.css';



import AddBooking from './component/Booking/AddBooking';
import BookingHome from './component/Booking/BookingHome';
import { Provider } from 'react-redux';
import NavBar from './component/NavBar';
import GetBookingOnRequest from './component/Booking/GetBookingOnRequest';
import store from './redux/bookingredux/store';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import GetBookingOnUserIdRequest from './component/Booking/GetBookingOnUserIdRequest'
import Home from './component/Home'
import HotelHome from './component/hotelcomponent/HotelHome'
import FeedBackHome from './component/Feedback/FeedbackHome';

function App() {





  return (
    <div>
      <Provider store={store} >

        <Router>
          <NavBar/>
            <div className="container" style = {{mariginTop : '50px'}}>
              <div className="row">
                <div className="col-md-9">


                  <Switch>
                  <Route exact path="/" component = {Home} />
                    <Route exact path="/bookinghome" component = {BookingHome} />
                    <Route exact path="/addbooking" component = {AddBooking} />
                    <Route exact path="/bookingdetails" component = {GetBookingOnRequest} />
                    <Route exact path="/useridbooking" component = {GetBookingOnUserIdRequest}/>
                    <Route exact path="/hotelhome" component={HotelHome}/>
                    <Route exact path="/feedbackhome" component={FeedBackHome}/>
                  </Switch>


                </div>
              </div>
            </div>
          


        </Router>

      </Provider>

    </div>
  );
}

export default App;
