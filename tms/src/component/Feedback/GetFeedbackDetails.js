
import React, { useState } from "react"
import DisplayFeedbackDetails from "./DisplayFeedbackDetails"
import commonStyle from "./commonStyle.module.css"





export default function GetFeedbackDetails() {

    const feedbackIdRef = React.createRef();

    const initialState = { feedbackId: undefined, feedback: undefined, errMsg: undefined };

    const [currentState, setNewState] = useState(initialState);

    const submitHandler = (event) => {

        event.preventDefault();

    }

    const setFieldState = () => {

        const feedbackIdValue = feedbackIdRef.current.value;
        const newState = { ...currentState, feedbackId: feedbackIdValue };
        setNewState(newState);

    }



    return (

        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Enter Feedback Id: </label>
                    <input
                        name="feedbackId"
                        type="number"
                        ref={feedbackIdRef}
                        onChange={setFieldState}

                    />
                    <button>Get Feedback</button>

                </div>
            </form>

            {
                currentState.feedback ? (
                    <div>
                        <DisplayFeedbackDetails feed={currentState.feed} />
                    </div>

                ) : ""}

            {
                currentState.errMsg ? (
                    <div className={commonStyle.error}>
                        Feedback Request Processing Unsuccessful
                        <br />
                        {currentState.errMsg}
                    </div>
                ) : ""}
        </div>
    );
}