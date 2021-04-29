
export default function DisplayHotelDetails({ report }) {

    let { reportId, reportType, reportName, bookingsCount, earning } = report;

    return (

        <div>
            Report Id is {reportId}
            <br />
            Report Type is {reportType}
            <br />
            Report Name is {reportName}
            <br />
            Bookings Count is {bookingsCount}
            <br />
            Earnings is {earning}
            <br />

        </div>
    );
}