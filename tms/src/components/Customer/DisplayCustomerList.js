import DisplayCustomerDetails from "./DisplayCustomerDetails";


export default function DisplayCustomerList({ customers }) {

    return (

        <div>
            <ul>
                {customers.map((customer) => <li key={customer.customerId}><DisplayCustomerDetails customer={customer} /></li>)}
            </ul>
        </div>
    );



}