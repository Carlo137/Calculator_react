import React from "react";

const Pulsante = (props) => {
    if (props.stato.invio === false) {
        
      return(
        <div>
          <input value={props.stato.nome} onChange={props.onchange} type="text" />
          <button onClick={props.invio}>Clicca</button>
        </div>
        )}
    else {
      return (
        <div>
          <h1>Risultato {props.stato.risultato}</h1>
        </div>
      )
    }
  }
export default Pulsante;