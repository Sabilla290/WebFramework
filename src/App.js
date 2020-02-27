import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Subheader from './Subheader.js'; 
import Biodata from './Biodata.js';

class Header extends Component{

  render(){
    return(
    <div><h2>Biodata</h2></div>
    
    );
  }
}


function App() {
  return (
    <div>
    <center>
        <Biodata/>
     </center>
    </div>
  );

}
export default App;
