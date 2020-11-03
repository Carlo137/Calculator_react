import React,{Component} from "react";
import Calcolatrice from "./Calcolatrice";



class App extends Component{
  state = {
    scelta : "" ,
    invio : false 
  }
  render() {
    const estrai = () => {
      return(
        <div>
          <h1>ciao</h1>
        </div>
      );
    };
    

    return(
      <div>
        <h1 onclick="estrai()">Sasso</h1>
        <h1 onclick="estrai()">Carta</h1>
        <h1 onclick="estrai()">Forbici</h1>
      </div>
    );
  };
};

export default App;

