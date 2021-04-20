import logo from './logo.svg';
import './App.css';
import DisplayHotelDetails from './component/Hotel/DisplayHotelDetails';
import GetHotelDetails from './component/Hotel/GetHotelDetails';
import DisplayHotelList from './component/Hotel/DisplayHotelList';
import AddHotel from './component/Hotel/AddHotel';
import DisplayPackageDetails from './component/Package/DisplayPackageDetails';

function App() {

  /*const hotel1 = {
     hotelId: 5,
     hotelName: "A2B",
     hotelType: "Super",
     hotelDescription: "Five Stars",
     address: "chennai",
     rent: 1000.0
   }
 
   const hotel2 = {
     hotelId: 4,
     hotelName: "A2B1",
     hotelType: "Super1",
     hotelDescription: "Five Stars1",
     address: "chennai1",
     rent: 1001.0
   }
 
   const hotel3 = {
     hotelId: 3,
     hotelName: "A2B2",
     hotelType: "Super2",
     hotelDescription: "Five Stars2",
     address: "chennai2",
     rent: 1002.0
   }
   const hotels = [hotel1, hotel2, hotel3];*/

  const pack1 = {

    packageId: 1,
    packageName: "holiday1",
    packageDescription: "Cool1",
    packageType: "Legend",
    packageCost: 5000.0,
    hotelId: 13,
    hotelName: "A2B13",
    hotelType: "Super13",
    hotelDescription: "Five Stars13",
    address: "chennai13",
    rent: 1013.0,
    hotelStatus: "Available"
  }

  


  return (

    <div>

      {/* <DisplayHotelDetails hotel={hotel1} />*/}

      {/*<GetHotelDetails />*/}

      {/*<DisplayHotelList hotels={hotels} />*/}

      {/*<AddHotel />*/}

      {<DisplayPackageDetails pack={pack1} />}



    </div>

  );
}

export default App;
