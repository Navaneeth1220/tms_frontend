import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCustomerByPackageId } from "../../redux/customer/fetchCustomerByPackageId/fetchCustomerByPackageIdActions"
import commonStyle from "./commonStyle.module.css"
import DisplayCustomerDetails from "./DisplayCustomerDetails"





export default function GetCustomerDetailsPackageId() {
    

    const packageIdRef = React.createRef();

    const intitalState = { packageId: undefined };

    const [currentState, setNewState] = useState(intitalState);

    const response=useSelector(state=>{
        return ({
          customer:state.fetchCustomerByPackageId.customer,
          error: state.fetchCustomerByPackageId.error
        });
    })

    const dispatch=useDispatch();



    const submitHandler = (event) => {
        event.preventDefault();
        console.log("current state", currentState);
         const packageId=packageIdRef.current.value;
         dispatch(fetchCustomerByPackageId(packageId));

    }

    const setFieldState = () => {
        const idValue = packageIdRef.current.value;
        const newState = { ...currentState, packageId: idValue, customer: undefined, errMsg: undefined };
        setNewState(newState);
    }

    return (
        <div>
            <h1> Get customer details By Package id</h1>

            <div className={commonStyle.content}>
                <form onSubmit={submitHandler} className={commonStyle.content}>

                    <div className="form-group">
                        <label>Enter  Package id</label>

                        <input name="packageId" type="number" ref={packageIdRef} onChange={setFieldState} className="form-control" />

                    </div>

                    <button className="btn btn-primary">Get Customer</button>

                </form>

                {response.customer ? (
                    <div>
                        <DisplayCustomerDetails customer={response.customer} />
                    </div>
                ) : ''}


                {
                    response.error ? (

                        <div className={commonStyle.error}>
                            Request processing unsuccessful
                            <br />
                            {response.error}

                        </div>
                    ) : ''

                }
            </div>
        </div>

    );

}

