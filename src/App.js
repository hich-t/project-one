import './App.css';
import Homepage from "./Homepage"
import Navbar from "./Navbar"
import People from "./People"


const App = () => {


  return (
    <div className="App">   
      <Navbar />
    <div>
      <Homepage />
    </div>
    
    <div>
     <People />
    </div>
    
    </div>
  );
}

export default App;
