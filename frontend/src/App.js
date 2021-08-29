
import './App.css';
import Header from './compornents/header';
import AddVehicle from './compornents/AddVehicle';
import EditVehicles from './compornents/EditVehicles';
import DisplayAllVehicles from './compornents/DisplayAllVehicles'
import {BrowserRouter as Router, Route} from "react-router-dom"


function App() {
  return (
    <Router>
        <div >
          
          <Header/>
        
          <Route path="/addvehicle" exact component ={AddVehicle}/>
          <Route path="/DisplayAllVehicles" exact component ={DisplayAllVehicles}/>

        </div>
    </Router>
  );
}

export default App;
