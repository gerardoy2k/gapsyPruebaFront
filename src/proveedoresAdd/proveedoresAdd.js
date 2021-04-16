import React, { useState } from "react";
import api from '../api';
import { Link } from 'react-router-dom';

const ProveeedoresAdd = () => {
    
    const [form, setForm] = useState({
        id:1,   
        nombre: '',
        razonsocial: '',
        direccion: '',
    }); 

    const handleChange = e => {
        setForm({
                ...form,
                [e.target.name]: e.target.value,        
        });
    }
  
    const handleSubmit = async e => {
        e.preventDefault();
        if (evalForm()){
            let response = null;
            try {
                response = await api.proveedor.crear(form);
                if (response.code === 200)
                    alert("Proveedor agregado");
                else if (response.code === 409)
                    alert("Ese nombre de proveedor ya existe.");
                else
                    alert("Ocurrió un error.");
            } catch (error) {
                console.log(error)
                alert("Ocurrió un error.");
            }
        }
    }

    const evalForm = () => {
        return ((form.nombre !== '' && 
                 form.razonsocial !== '' &&
                 form.direccion !== '') ? true : false );
    }

    return (
        <div className="container">
            <div className="card my-5">
                <div className="card-header"> Agregar Proveedor</div>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-group">
                        <label className="lbl-field">Nombre</label>
                        <input
                            className="form-control"
                            type="text"
                            name="nombre"
                            value={form.nombre}
                            onChange={handleChange}
                            placeholder="Nombre del proveedor"
                        />
                    </div>
                    <div className="form-group">
                        <label className="lbl-field">Razón social</label>
                        <input
                            className="form-control"
                            type="text"
                            name="razonsocial"
                            value={form.razonsocial}
                            onChange={handleChange}
                            placeholder="Razón Social del proveedor"
                        />
                    </div>
                    <div className="form-group">
                        <label className="lbl-field">Dirección</label>
                        <input
                            className="form-control"
                            type="text"
                            name="direccion"
                            value={form.direccion}
                            onChange={handleChange}
                            placeholder="Dirección del proveedor"
                        />
                    </div>
                    <div className="div-submit d-flex justify-content-end">
                        <Link to="/proveedores" className="d-flex"> 
                            <button className="btn btn-danger">Cancelar</button>
                        </Link>
                        <button className="btn btn-primary mx-3">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProveeedoresAdd;