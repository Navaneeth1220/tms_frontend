import logo from './logo.svg';
import './App.css';



import AddBooking from './component/Booking/AddBooking';
import BookingHome from './component/Booking/BookingHome';
import { Provider } from 'react-redux';
import BookingNavBar from './component/Booking/BookingNavBar';
import GetBookingOnRequest from './component/Booking/GetBookingOnRequest';
import store from './redux/store';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import GetBookingOnUserIdRequest from './component/Booking/GetBookingOnUserIdRequest'

function App() {

  /*
let mockBooking = {
  
  bookingTitle : "Vacation",
  bookingType :"Economy",
  description : "Family trip",
  userId : 1,
  packageId : 10,
  paymentMode : "card",
  bankName : "SBI",
  cardNo : 123456789,
  netAmount : 1000.0,
  paymentStatus : "true",
  routeId : "4fc9a735-5c61-468b-b0a5-a11dc11c1ad3"
}

const book1= {
  bookingId : 1,
  bookingType : "Economy",
  description : "family trip",
  bookingTitle : "Weekend",
  userId : 2
}

const book2= {
  bookingId : 2,
  bookingType : "Eecutive",
  description : "family trip",
  bookingTitle : "Weekend",
  userId : 2
}

const bookings = [book1,book2];



const data = {
  bookingTitle : "Vacation",
  bookingType :"Economy",
  description : "Family trip",
  userId : 1,
  packageId : 10,
  paymentMode : "card",
  bankName : "SBI",
  cardNo : 123456789,
  netAmount : 1000.0,
  paymentStatus : "true",
  routeId : "4fc9a735-5c61-468b-b0a5-a11dc11c1ad3"

};
*/


/*const promise = addBooking(data);
   promise.then(response => console.log("add Booking request response", response.data))
     .catch(error => console.log("Booking error response fetched", error.message)); */




  return (
    <div>
      <Provider store={store} >

        <Router>
          <BookingNavBar/>
            <div className="container" style = {{mariginTop : '50px'}}>
              <div className="row">
                <div className="col-md-9">


                  <Switch>
                    <Route exact path="/" component = {BookingHome} />
                    <Route exact path="/addbooking" component = {AddBooking} />
                    <Route exact path="/bookingdetails" component = {GetBookingOnRequest} />
                    <Route exact path="/useridbooking" component = {GetBookingOnUserIdRequest}/>
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
