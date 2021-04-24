export default function DisplayBusDetails({bus}){

    let {busId,busType,busNumber,capacity} = bus;

    return (
       
       
       <div>
            Bus ID is {busId}
            <br/>
            Bus Type is {busType}
            <br/>
            Bus Number is {busNumber}
            <br/>
            Capacity is {capacity}
            <br/>
           
        </div>
    );
}