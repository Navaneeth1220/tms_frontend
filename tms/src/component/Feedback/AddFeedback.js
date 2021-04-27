import React, { useState } from "react";
import DisplayFeedbackDetails from "./DisplayFeedbackDetails";
import commonStyle from "./commonStyle.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useSelector , useDispatch} from "react-redux";
import {addFeedbackAction} from "../../redux/feedbackredux/addfeedback/addFeedbackAction";
import {addFeedback} from "../../service/FeedbackService";


export default function AddFeedback() {


    const feedbackRef = React.createRef();
    const ratingRef = React.createRef();
    const customerIdRef = React.createRef();
    

    const initialState = {
        feedback: undefined,
        rating: undefined,
        customerId:undefined,
        formStatus: "",
    };

     const [currentState, setNewState] = useState(initialState);

     const response= useSelector(state =>{
        return (
            {
                feed : state.addFeedback.feed,
                error : state.addFeedback.error
            }
        );
});

const dispatch  = useDispatch();



const submitHandler = (event) =>{
    event.preventDefault();

    
    
    let data={...currentState};
    console.log("form data that has to be sent to service",data);
    dispatch(addFeedbackAction(data));
};

const setFieldState = (ref) =>{
    const fieldName = ref.current.name;
    const fieldValue = ref.current.value;
    console.log("inside set field state field name = "+fieldName+" fieldValue= "+fieldValue);

    const newState = {

        ...currentState,
        [fieldName] : fieldValue,
        errMsg : undefined,
        
    };

    setNewState(newState);

    console.log("new state",newState);
};

    return (

      <div className="form-group">
          <form onSubmit={(event) => submitHandler(event)}>
              <div className="form-group">
                  <label>Enter Feedback</label>
                  <select
                  className="form-control"
                      name="feedback"
                      type="text"
                      ref={feedbackRef}
                      onChange={() => setFieldState(feedbackRef)}>
                      <option value="Good">Good</option>
                      <option value="Average">Average</option>
                      <option value="Bad">Bad</option>
                      </select>
                  
              </div>
        
              <div className="form-group"> 
                  <label>Enter Rating</label>
                  <select
                  className="form-control"
                      name="rating"
                      type="number"
                      ref={ratingRef}
                      onChange={() => setFieldState(ratingRef)}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      </select>
                  <br /> 
              </div>
              <div className="form-group">
                  <label>Customer Id</label>
                <input type="number" name="customerId" ref={customerIdRef} onChange={()=> setFieldState(customerIdRef)}/>                               </div>
              <button type="submit" className="btn btn-primary">Add Feedback</button>
          </form>
          <h2>{currentState.formStatus}</h2>

          {
                response.feed ? (

                  <div>
                      <h2>Feedback Added Successfully</h2>
                      <DisplayFeedbackDetails feed={response.feed} />
                  </div>

              ) : ""}

          {
              response.errMsg ? (

                  <div className={commonStyle.error}>
                      Feedback Request Was Not Successful <br />
                      {response.errMsg}
                  </div>

              ) : ""}
      </div>
    )
              }  
