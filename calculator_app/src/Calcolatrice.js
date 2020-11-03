import React, { Component } from "react";
import Pulsante from "./Pulsante";

class App extends Component {
  state = {
    nome: "",
    invio: false,
    risultato: "",
  };
  render() {
    const invio = () => {
      const operazione = (ope, n1, n2) => {
        if (ope === "+") {
          return n1 + n2;
        } else if (ope === "-") {
          return n1 - n2;
        } else if (ope === "*") {
          return n1 * n2;
        } else if (ope === "/") {
          return n1 / n2;
        }
      };
      let numeri = this.state.nome.split("");
      let somma = false;
      let numb = "";
      let operatore = "";
      let index = 0;
      for (let num of numeri) {
        index = index + 1;
        if (num === "+" || num === "-" || num === "*" || num === "/") {
          if (somma === false) {
            somma = parseInt(numb);
            numb = "";
            operatore = num;
          } else {
            somma = operazione(operatore, somma, parseInt(numb));
            numb = "";
            operatore = num;
          }
        } else {
          numb = numb + num;
        }
        if (index === numeri.length) {
          somma = operazione(operatore, somma, parseInt(numb));
        }
      }
      this.setState({
        invio: true,
        risultato: somma,
      });
    };
    const onchange = (e) => {
      this.setState({
        nome: e.target.value,
      });
    };
    return (
      <div className="app">
        <Pulsante
          stato={this.state}
          cioa="cioa"
          invio={invio}
          onchange={onchange}
        />
      </div>
    );
  }
}

export default App;