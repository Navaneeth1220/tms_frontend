import logo from './logo.svg';
import './App.css';
import DisplayBookingDetails from './component/Booking/DisplayBookingDetails';
import GetBookingDetails from './component/Booking/GetBookingDetails';
import DisplayBookingList from './component/Booking/DisplayBookingList';
import CreateBooking from './component/Booking/CreateBooking';

function App() {

let mockBooking = {
  bookId : 1,
  type : "Trip",
  description : "family trip",
  title : "Vacation",
  userId : 2
}

const book1= {
  bookId : 1,
  type : "Trip",
  description : "family trip",
  title : "Vacation",
  userId : 2
}

const book2= {
  bookId : 2,
  type : "Trip",
  description : "family trip",
  title : "Vacation",
  userId : 2
}

const bookings = [book1,book2];


  return (
    <div>
      {/*<DisplayBookingDetails book={mockBooking}/>*/}
      {/*<GetBookingDetails/>*/}
      {/*<DisplayBookingList bookings={bookings}/>*/}
      {<CreateBooking/>}

    </div>
  );
}

export default App;
