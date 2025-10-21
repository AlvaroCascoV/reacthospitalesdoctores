import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Home from './components/Home'
import MenuHospitales from './components/MenuHospitales'
import Doctores from './components/Doctores'

export default class Router extends Component {
    render() {
        function DoctoresElement() {
            let { idhospital } = useParams();
            return <Doctores idhospital={idhospital} />
        }
        return (
            <BrowserRouter>
                <MenuHospitales />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/doctores/:idhospital' element={<DoctoresElement />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
