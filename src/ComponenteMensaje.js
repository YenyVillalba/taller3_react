import React from "react";

class ComponenteMensaje extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrarLista: false,
        };
    }
    componentDidMount()//se llama despues de que el componente se monto
     {
        console.log("El componente se ha montado");
    }
    componentDidUpdate(prevProps, prevState)//se llama cuando el componente se actualiza
     {
        console.log("El componente se ha actualizado");
        if (prevState.mostrarLista !== this.state.mostrarLista) {
            console.log(`La lista está ${this.state.mostrarLista ? "visible" : "oculta"}`);
        }
    }
    componentWillUnmount() //se llama antes de que el componente se desmonte
    {
        console.log("El componente va a desaparecer");
    }
    toggleLista = () => {
        this.setState((prevState) => ({ mostrarLista: !prevState.mostrarLista }));
    };
    render() {
        return (
            <div>
                <button onClick={this.toggleLista} style={{ fontSize: "12px" }}>
                    {this.state.mostrarLista ? "haz click para Ocultar" : "haz click para visualizar"}
                </button>
                {this.state.mostrarLista && (
                    <ul>
                        <li>Baletas</li>
                        <li>Tacones</li>
                        <li>Botines</li>
                        <li>Tenis</li>

                    </ul>
                )}
            </div>
        );
    }
}
export default ComponenteMensaje;
