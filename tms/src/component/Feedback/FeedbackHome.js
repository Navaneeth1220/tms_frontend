import FeedbackNavbar from "./FeedbackNavbar";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AddFeedback from "./AddFeedback";
import DisplayFeedbackDetails from "./DisplayFeedbackDetails";
import DisplayFeedbackList from "./DisplayFeedbackList";
import GetFeedbackDetailsCustomerId from "./GetFeedbackDetailsCustomerId";

function FeedbackHome() {
    return (
      <GetFeedbackDetailsCustomerId/>
  );
}

export default FeedbackHome;