import React,{ Component } from 'react'


class Formulario extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)

        this.state = {
            nombre: "",
            correo: ""
        }

        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
    }

    cambiarNombre(e) {
        this.setState({
            nombre: e.target.value
        })
    }

    cambiarCorreo(e){
        this.setState({
            correo: e.target.value
        })
    }

    render() {
        return(
            <div className="ed-grid lg-grid-3">
                <h1>Formulario</h1>
                <form id="formElemento">
                    <div className="form__item">
                        <label > Nombre Completo</label>
                        <input type="text" onChange={this.cambiarNombre} />
                    </div>
                    <div className="form__item">
                        <label > Correo Electronico</label>
                        <input type="email" onChange={this.cambiarCorreo} />
                    </div>
                    
                </form>
                <div>
                    <h2>{`Hola ${this.state.nombre}`}</h2>
                    <p>{`Tu correo es: ${this.state.correo}`}</p>
                </div>
            </div>
        )
    } 

    //componentDidMount se ejecuta una ves ya se ha renderizado el DOM, aqui podemos ejecutar 
    // elementos que necesitemos relaizar, una ves ya se haya cargado todo el DOM ejemplo: 
    componentDidMount(){ 
        let elemento = document.getElementById("formElemento")
        console.log(elemento)
    }

    componentDidUpdate (prevProps, prevState){
        console.log(prevProps)
        console.log(prevState)
        console.log("___________")
    }
}


export default Formulario