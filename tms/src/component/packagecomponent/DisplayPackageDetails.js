

export default function DisplayPackageDetails({ pack }) {

    let { packageId, packageName, packageDescription, packageType, packageCost,
        hotelId, hotelName, hotelType, hotelDescription, address, rent, hotelStatus } = pack;

    return (

        <div>
            Package Id is {packageId}
            <br />
            Package Name is {packageName}
            <br />
            Package Description is {packageDescription}
            <br />
            Package Type is {packageType}
            <br />
            Package Cost is {packageCost}
            <br />
            Hotel Id is {hotelId}
            <br />
            Hotel Name is {hotelName}
            <br />
            Hotel Type is {hotelType}
            <br />
            Hotel Description is {hotelDescription}
            <br />
            Hotel Address is {address}
            <br />
            Hotel Rent is {rent}
            <br />
            Hotel Status is {hotelStatus}
            <br />
        </div>
    );
}