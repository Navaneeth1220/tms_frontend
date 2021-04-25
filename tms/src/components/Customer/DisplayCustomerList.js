import { Link } from 'react-router-dom';

export default function DisplayCustomerList({ customers }) {

    console.log("inside Display Customer List", customers);

    return (

        <div>

            <ul>

                {
                    customers.map((customer) => <li key={customer.customerId}>

                        <Link to={`/customerdetails/${customer.customerId}`} >
                            <span>{customer.customerId} {customer.customerName} </span>

                        </Link>

                    </li>)
                }
            </ul>


        </div>

    )

}