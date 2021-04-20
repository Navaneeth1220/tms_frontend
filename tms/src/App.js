import logo from './logo.svg';
import './App.css';
import DisplayHotelDetails from './component/Hotel/DisplayHotelDetails';

function App() {

  let mockHotel = {
    hotelId: 5,
    hotelName: "A2B",
    hotelType: "Super",
    hotelDescription: "Five Stars",
    address: "chennai",
    rent: 1000.0
  }

  return (

    <div>
      <DisplayHotelDetails hotel={mockHotel} />
    </div>

  );
}

export default App;
