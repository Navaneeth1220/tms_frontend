import DisplayBookingDetails from "./DisplayBookingDetails";

export default function DisplayBookingList({bookings}) {
    return (
        <div>
            {bookings.map((booking) => <li key={booking.bookingId}><DisplayBookingDetails book={booking}/></li>)}
        </div>
    );
}