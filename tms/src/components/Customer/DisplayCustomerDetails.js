
export default function DisplayCustomerDetails({ customer }) {

    let { customerId, customerName, customerPassword, address, mobileNo, email } = customer;

    return (

        <div>
            Customer Id is {customerId}
            <br />
            Customer Name is {customerName}
            <br />
            Customer Password is {customerPassword}
            <br />
            Customer Address is {address}
            <br />
            Customer Mobilenumber is {mobileNo}
            <br />
            Customer Email is {email}
            <br />
        </div>
    );
}