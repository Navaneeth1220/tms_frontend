
import logo from './logo.svg';
import './App.css';
import DisplayHotelDetails from './component/hotel/DisplayHotelDetails';
import GetHotelDetails from './component/hotel/GetHotelDetails';
import DisplayHotelList from './component/hotel/DisplayHotelList';
import AddHotel from './component/hotel/AddHotel';
import DisplayPackageDetails from './component/package/DisplayPackageDetails';
import GetPackageDetails from './component/package/GetPackageDetails';
import DisplayPackageList from './component/package/DisplayPackageList';
import AddPackage from './component/package/AddPackage';
import { addHotel } from './service/HotelService';
import { addPackage } from './service/PackageService';

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

  /*  const pack1 = {
  
      packageId: 1,
      packageName: "holiday1",
      packageDescription: "Cool1",
      packageType: "Legend1",
      packageCost: 5000.0,
      hotelId: 13,
      hotelName: "A2B13",
      hotelType: "Super13",
      hotelDescription: "Five Stars13",
      address: "chennai13",
      rent: 1013.0,
      hotelStatus: "Available"
    }
  
    const pack2 = {
  
      packageId: 2,
      packageName: "holiday2",
      packageDescription: "Cool2",
      packageType: "Legend2",
      packageCost: 5001.0,
      hotelId: 12,
      hotelName: "A2B12",
      hotelType: "Super12",
      hotelDescription: "Five Stars12",
      address: "chennai12",
      rent: 1012.0,
      hotelStatus: "Available"
    }
  
    const pack3 = {
  
      packageId: 3,
      packageName: "holiday3",
      packageDescription: "Cool3",
      packageType: "Legend3",
      packageCost: 5002.0,
      hotelId: 11,
      hotelName: "A2B11",
      hotelType: "Super11",
      hotelDescription: "Five Stars11",
      address: "chennai11",
      rent: 1011.0,
      hotelStatus: "Available"
    }
  
    const packs = [pack1, pack2, pack3];*/

  /*const data1 = {
 
     hotelName: "A2B11",
     hotelType: "Super11",
     hotelDescription: "Five Stars11",
     address: "chennai11",
     rent: 1011.0
 
   }
 
   const promise = addHotel(data1);
   promise.then(response => console.log("add hotel request response", response.data))
     .catch(error => console.log("hotel error response fetched", error.message));*/

  /*const data2 = {

    packageName: "National",
    packageDescription: "Super_Awesome",
    packageType: "Four_Star",
    packageCost: 8500.0,
    hotelId: 3

  }

  const promise = addPackage(data2);
  promise.then(response => console.log("add package request response", response.data))
    .catch(error => console.log("package error response fetched", error.message));*/



  return (

    <div>

      {/* <DisplayHotelDetails hotel={hotel1} />*/}

      {/*<GetHotelDetails />*/}

      {/*<DisplayHotelList hotels={hotels} />*/}

      {/*<AddHotel />*/}

      {/*<DisplayPackageDetails pack={pack1} />*/}

      {/*<GetPackageDetails />*/}

      {/*<DisplayPackageList packs = {packs} />*/}

      {/*<AddPackage />*/}


    </div>

  );
}

export default App;
