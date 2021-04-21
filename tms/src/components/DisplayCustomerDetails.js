
export default function DisplayCustomerDetails({ customer }) {

    let { customerId, customerName, customerPassword, customerAddress, customerPhonenumber, customerEmail } = customer;

    return (

        <div>
            Customer Id is {customerId}
            <br />
            Customer Name is {customerName}
            <br />
            Customer Password is {customerPassword}
            <br />
            Customer Address is {customerAddress}
            <br />
            Customer Phonenumber is {customerPhonenumber}
            <br />
            Customer Email is {customerEmail}
            <br />
        </div>
    );
}