
import React, { useState } from "react";
import DisplayPackageDetails from "./DisplayPackageDetails";
import commonStyle from "./commonStyle.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { getPackageOnRequestAction } from '../../redux/packageredux/getpackageonrequest/getPackageOnRequestActions';



export default function GetPackageDetailsOnRequest() {

    /*let mockPackage = {
 
         packageId: 1,
         packageName: "holiday1",
         packageDescription: "Cool1",
         packageType: "Legend",
         packageCost: 5000.0,
         hotelId: 5,
         hotelName: "A2B",
         hotelType: "Super",
         hotelDescription: "Five Stars",
         address: "chennai",
         rent: 1000.0,
         hotelStatus: "Available"
     };*/

    const packageIdRef = React.createRef();

    const initialState = { packageId: undefined };

    const [currentState, setNewState] = useState(initialState);

    const response = useSelector(state => {

        return ({

            pack: state.getPackageOnRequest.pack,
            error: state.getPackageOnRequest.error
        });
    })

    const dispatch = useDispatch();

    const submitHandler = (event) => {

        event.preventDefault();
        console.log("current state", currentState);
        const packageId = packageIdRef.current.value;
        dispatch(getPackageOnRequestAction(packageId));

    }

    const setFieldState = () => {

        const packageIdValue = packageIdRef.current.value;
        const newState = { ...currentState, packageId: packageIdValue, pack: undefined, errMsg: undefined };
        setNewState(newState);

    }



    return (

        <div>
            <h1> Get Package Details On Request</h1>

            <div className={commonStyle.content}>
                <form onSubmit={submitHandler} className={commonStyle.content}>

                    <div className="form-group">
                        <label>Enter Package Id: </label>
                        <input
                            name="packageId"
                            type="number"
                            ref={packageIdRef}
                            onChange={setFieldState}
                            className="form-control"

                        />
                    </div>
                    <button className="btn-btn-primary">Get Package</button>


                </form>

                {
                    response.pack ? (
                        <div>
                            <DisplayPackageDetails pack={response.pack} />
                        </div>

                    ) : ""}

                {
                    response.error ? (
                        <div className={commonStyle.error}>
                            Package Request Processing Unsuccessful
                            <br />
                            {response.error}
                        </div>
                    ) : ""}
            </div>
        </div>
    );
}