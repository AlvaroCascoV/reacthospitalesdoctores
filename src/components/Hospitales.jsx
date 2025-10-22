import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'

export default class Hospitales extends Component {
    url = Global.apiHospitales;
    state = {
        hospitales: []
    }

    loadHospitales = () => {
        let request = "webresources/hospitales";
        axios.get(this.url + request).then(response => {
            console.log("Loading hospitales");
            this.setState({
                hospitales: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadHospitales();
    }
    render() {
        return (
            <div>
                <h1>Hospitales</h1>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Dirección</th>
                            <th>Teléfono</th>
                            <th>Camas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.hospitales.map((hospital, index) => {
                                return (<tr key={index}>
                                    <td>{hospital.idhospital}</td>
                                    <td>{hospital.nombre}</td>
                                    <td>{hospital.direccion}</td>
                                    <td>{hospital.telefono}</td>
                                    <td>{hospital.camas}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}