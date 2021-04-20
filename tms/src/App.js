import logo from './logo.svg';
import './App.css';
import DisplayBookingDetails from './component/DisplayBookingDetails';
import GetBookingDetails from './component/GetBookingDetails';
import DisplayBookingList from './component/DisplayBookingList';

function App() {

let mockBooking = {
  bookId : 1,
  type : "Trip",
  description : "family trip",
  title : "Vacation"
}

const book1= {
  bookId : 1,
  type : "Trip",
  description : "family trip",
  title : "Vacation"
}

const book2= {
  bookId : 2,
  type : "Trip",
  description : "family trip",
  title : "Vacation"
}

const bookings = [book1,book2];


  return (
    <div>
      {<DisplayBookingDetails book={mockBooking}/>}
      {<GetBookingDetails/>}
      {<DisplayBookingList bookings={bookings}/>}

    </div>
  );
}

export default App;
