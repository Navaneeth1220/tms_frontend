import './App.css';
import DisplayRouteDetails from './components/Route/DisplayRouteDetails';
import GetRouteDetails from './components/Route/GetRouteDetails';

function App() {
  let mockRoute={
    routeId: "r1",
    routeFrom: "Jaipur",
    routeTo: "Himachal",
    pickupPoint: "Bus Stand",
    fare: 1200
  }
  return (
    <div>
    
     {/*<DisplayRouteDetails route = {mockRoute}/>*}
     {/*<GetRouteDetails/>*/}
     {<CreateRoute/>}
    </div>
  );
}

export default App;
