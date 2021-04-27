import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


export default function FeedbackNavbar() {

    return (
        <div>


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand" >
                    Feedback Module
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link" >
                                <span>FeedbackHome </span>
                                <span className="sr-only">(current)</span>

                            </Link>


                        </li>

                        <li className="nav-item">

                            <Link to="/addfeedback" className="nav-link" >
                                <span>Add Feedback</span>

                            </Link>
                        </li>

                        <li className="nav-item">

                            <Link to="/feedbackdetailsByCustomerId" className="nav-link" >
                                <span>Get Feedback Details By Customer Id</span>
                            </Link>
                        </li>


                    </ul>

                </div>
            </nav>






        </div>

    )

}