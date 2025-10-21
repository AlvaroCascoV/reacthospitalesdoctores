import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';


export default class DetallesDoctor extends Component {
    url = Global.apiDoctores;
    state = {
        doctor: null
    }

    findDoctor = () => {
        let request = "api/Doctores/" + this.props.iddoctor;
        axios.get(this.url + request).then(response => {
            console.log("leyendo doctor " + this.props.iddoctor)
            this.setState({
                doctor: response.data
            });
        });
    }

    componentDidMount = () => {
        this.findDoctor();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.iddoctor !== this.props.iddoctor) {
            this.findDoctor();
        }
    }

    render() {
        return (<div>
            <h3 style={{ color: "blue" }}>Detalles doctor {this.props.iddoctor}</h3>
            {
                this.state.doctor &&
                (
                    <ul className='list-group'>
                        <li className='list-group-item'>Apellido: {this.state.doctor.apellido}</li>
                        <li className='list-group-item'>Especialidad: {this.state.doctor.especialidad}</li>
                        <li className='list-group-item'>Salario: {this.state.doctor.salario}</li>
                        <li className='list-group-item'>IdHospital: {this.state.doctor.idHospital}</li>
                    </ul>
                )
            }
        </div>)
    }
}
