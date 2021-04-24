import logo from './logo.svg';
import './App.css';
import DisplayFeedbackDetails from './component/feedback/DisplayFeedbackDetails';
import DisplayFeedbackList from './component/feedback/DisplayFeedbackList';
import AddFeedback from './component/feedback/AddFeedback';

function App() {
    const feed1 = {
     feedbackId: 5,
     customerId:10,
     customerName: "Ajith",
     feedback: "Super",
     rating: 3,
    
   }

   const feed2 = {
    feedbackId: 8,
    customerId:6,
    customerName: "Ajay Samuel",
    feedback: "Super and clean",
    rating: 5,
   
  }

  const feeds=[feed1,feed2];
  return (
    <div >
      
      { /*<DisplayFeedbackDetails feed={feed1} />*/}

      {/*<DisplayFeedbackList feeds={feeds} />*/}
      {<AddFeedback />}
    </div>
  );
}

export default App;
