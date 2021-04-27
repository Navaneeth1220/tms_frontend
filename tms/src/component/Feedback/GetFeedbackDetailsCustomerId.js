import React, { useEffect, useState } from "react"
import DisplayFeedbackDetails from "./DisplayFeedbackDetails"
import commonStyle from "./commonStyle.module.css"
import {fetchByCustomerId} from "../../service/FeedbackService";


export default function GetFeedbackDetailsCustomerId() {
 
const intialState={feedback:undefined,customerId:undefined,errMsg:undefined};
 const customerIdRef=React.createRef();
 const [currentState,setNewState]=useState(intialState);
 
 const submitHandler = (event) => {
    event.preventDefault();
    console.log("current state", currentState);
     const customerId=customerIdRef.current.value;
     const promise = fetchByCustomerId(customerId);
     promise.then(response=>{
         const newState={...currentState,feedback:response.data};
         setNewState (newState);
        }).catch(error=>{
            const newState={...currentState,errMsg:error.message};
            setNewState(newState);
        }
        )

    

}

        

    

    const setFieldState = () => {
        const idValue = customerIdRef.current.value;
        const newState = { ...currentState, customerId: idValue, feedback: undefined, errMsg: undefined };
        setNewState(newState);
    }
    return (
        <div>
            <h1> Get feedback details By customer id</h1>

            <div className={commonStyle.content}>
                <form onSubmit={submitHandler} className={commonStyle.content}>

                    <div className="form-group">
                        <label>Enter  Customer id</label>

                        <input name="customerId" type="number" ref={customerIdRef} onChange={setFieldState} className="form-control" />

                    </div>

                    <button className="btn btn-primary">Get Feedback</button>

                </form>

                {currentState.feedback ? (
                    <div>
                        <DisplayFeedbackDetails feed={currentState.feedback} />
                    </div>
                ) : ''}


                {
                    currentState.errMsg ? (

                        <div className={commonStyle.error}>
                            Request processing unsuccessful
                            <br />
                            {currentState.errMsg}

                        </div>
                    ) : ''

                }
            </div>
        </div>

    );


}
