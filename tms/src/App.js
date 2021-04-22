import logo from './logo.svg';
import './App.css';
import DisplayBookingDetails from './component/Booking/DisplayBookingDetails';
import GetBookingDetails from './component/Booking/GetBookingDetails';
import DisplayBookingList from './component/Booking/DisplayBookingList';
import CreateBooking from './component/Booking/CreateBooking';
import { addBooking } from './service/Booking/BookingService'

function App() {

let mockBooking = {
  bookingId : 1,
  bookingType : "Economy",
  description : "family trip",
  bookingTitle : "Weekend",
  userId : 2
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


const promise = addBooking(data);
   promise.then(response => console.log("add Booking request response", response.data))
     .catch(error => console.log("Booking error response fetched", error.message));




  return (
    <div>
      {<DisplayBookingDetails book={mockBooking}/>}
      {<GetBookingDetails/>}
      {<DisplayBookingList bookings={bookings}/>}
      {<CreateBooking/>}


    </div>
  );
}

export default App;
