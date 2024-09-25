import React from "react";

class TercerComponente extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mensaje: "Bienvenido a nuestra tienda de calzado."
        };
    }

    cambiarMensaje = () => {
        const nuevosMensajes = [
            "Explora nuestra tienda para ver nuevos Diseños.",
            "Aprovecha Ofertas Exclusivas, solo para ti.",
            "Encuentra aqui! el calzado perfecto para cualquier ocasión."
        ];
        const mensajeAleatorio = nuevosMensajes[Math.floor(Math.random() * nuevosMensajes.length)];
        this.setState({ mensaje: mensajeAleatorio });
    };

    render() {
        return (
            <div style={{ width: '500px', height: '200px', borderRadius:'15px', border: '5px solid #9933ff ', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign:"center", color:"#330099" }}>
            <h2>{this.state.mensaje}</h2>
            <button onClick={this.cambiarMensaje}>Clickea para más Opciones</button>
        </div>

        );
    }
}

export default TercerComponente;
