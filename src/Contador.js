import React from "react";

class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        };
    }
    aumentarContador = () => {
        this.setState((prevState) => ({
            contador: prevState.contador + 1
        }));
    };
    retrocederContador = () => {
        this.setState((prevState) => ({
            contador: Math.max(prevState.contador - 1, 0)
        }));
    };

    limpiarContador = () => {
        this.setState({ contador: 0 });
    };
    render() {
        return (
            <div>
                <h1 >Contador: {this.state.contador}</h1>
                <button onClick={this.aumentarContador}>Aumentar</button>
                <button onClick={this.retrocederContador}>Retroceder</button>
                <button onClick={this.limpiarContador}>Limpiar</button>
            </div>
        );
    }
}
export default Contador;
