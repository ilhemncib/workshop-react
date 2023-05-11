
import './App.css'; 
import FullName from './Components/Profile/FullName';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import Address from './Components/Profile/Address';
 function App() { 
    return ( 
      <div className="App"> 
        <div className="card" style={{width: "18rem"}}>
          
  <ProfilePhoto/>

  <div class="card-body">
    <FullName/>
    <Address/>
    <a href="#!" className="btn btn-primary">Go somewhere</a>
  </div>
</div>  
</div> 
          ); } 
    export default App;