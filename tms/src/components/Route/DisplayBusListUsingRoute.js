import DisplayBusDetails from '../Bus/DisplayBusDetails';

export default function DisplayBusListUsingRoute({buses}) {
    return (
        <div>
            {buses.map((bus) => <li key={bus.busId}><DisplayBusDetails bus={bus}/></li>)}
        </div>
    );
}