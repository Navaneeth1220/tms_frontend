
import commonStyle from "./commonStyle.module.css";

export default function PackageHome() {

  return (


    <div className="container mt-5">
      <h1> Package Module </h1>

      <div className={commonStyle.content}>
        <div>
          <br /> The features available are :
        <ul className="list-group mt-4">

            <li className="nav-item">

              <Link to="/addpackage" className="nav-link" >
                <span>Add Package</span>

              </Link>
            </li>

            <li className="nav-item">

              <Link to="/updatepackage" className="nav-link" >
                <span>Update Package</span>

              </Link>
            </li>




            <li className="nav-item">

              <Link to="/allpackages" className="nav-link" >
                <span>Get All Packages</span>
              </Link>
            </li>*

            <li className="nav-item">

              <Link to="/packagedetailsonrequest" className="nav-link" >
                <span>Get Package Details</span>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}
