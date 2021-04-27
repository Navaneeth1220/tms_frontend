import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


export default function CustomerNavbar() {

    return (
        <div>


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand" >
                    Customer Module
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link" >
                                <span>CustomerHome </span>
                                <span className="sr-only">(current)</span>

                            </Link>


                        </li>

                        <li className="nav-item">

                            <Link to="/addcustomer" className="nav-link" >
                                <span>Add Customer</span>

                            </Link>
                        </li>

                        <li className="nav-item">

                            <Link to="/customerdetailsById" className="nav-link" >
                                <span>Get Customer Details By Id</span>
                            </Link>
                        </li>

                         <li className="nav-item">

                            <Link to="/customerdetailsByPackageId" className="nav-link" >
                                <span>Get Customer Details By Package Id</span>
                            </Link>
                        </li>

                        <li className="nav-item">

                            <Link to="/customerdetailsByRouteId" className="nav-link" >
                                <span>Get Customer Details By Route Id</span>
                            </Link>
                        </li>




                    </ul>

                </div>
            </nav>






        </div>

    )

}