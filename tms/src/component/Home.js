function Home(){
    return(
        <div className="container mt-5">
           <h3>Welcome to <i><b>Trip Booking System</b></i></h3> <br/>
           <h5>Modules and Members</h5>
           <table className="table table-striped col-md-6">
               <thead>
                   <tr>
                       <th scope="col">Module</th>
                       <th scope="col">Member</th>
                   </tr>
               </thead>
               <tbody>
                   <tr>
                       <td>Booking</td>
                       <td>Navaneeth S</td>
                   </tr>
                   <tr>
                       <td>Package</td>
                       <td>Shivendra Iyer</td>
                   </tr>
                   <tr>
                       <td>Route and Bus</td>
                       <td>Madhusudan</td>
                   </tr>
                   <tr>
                       <td>Customer</td>
                       <td>Mohan and Anubhav</td>
                   </tr>
                   <tr>
                       <td>Report</td>
                       <td>Gunaditha</td>
                   </tr>
                   <tr>
                       <td>Feedback</td>
                       <td>Ajay</td>
                   </tr>
               </tbody>
           </table>
        </div>
    );
}

export default Home;