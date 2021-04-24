export default function DisplayRouteDetails({route}){

    let {routeId,routeFrom,routeTo,pickupPoint,fare} = route;

    return (
       
       
       <div>
            Route id is {routeId}
            <br/>
            Route From is {routeFrom}
            <br/>
            Route To is {routeTo}
            <br/>
            Pickup  Point is {pickupPoint}
            <br/>
            Fare is {fare}
            <br/>
        </div>
    );
}