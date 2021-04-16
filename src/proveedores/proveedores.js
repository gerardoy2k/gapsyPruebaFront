import React from 'react';
import './proveedores.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import api from '../api';
import { Link } from 'react-router-dom';

class Proveedores extends React.Component {

    state = {
        proveedores: [],
    }

    componentDidMount() {
        this.getProveedores();
    }
    
    getProveedores = async e => {
        let response = await api.proveedor.lista();
        if (response)
            this.setState({proveedores: response});
        console.log(response,'edede');
    }

    columns = [{
        dataField: 'id',
        text: 'ID'
      }, {
        dataField: 'nombre',
        text: 'Nombre'
      }, {
        dataField: 'razonsocial',
        text: 'Razón Social'
      }, {
        dataField: 'direccion',
        text: 'Dirección'
      }];

    render() {
        const options = {
            sizePerPage: 5,
            hideSizePerPage: true,
            hidePageListOnlyOnePage: false
          };
        return (
            <React.Fragment>
                <div className="contenedor">
                    <h3 className="text-primary mx-3 my-3">
                        Administración de Proveedores
                    </h3>
                    <div className="w-100 d-flex justify-content-end px-3 mb-3">
                        <Link to="/proveedoresAdd" className="d-flex"> 
                            <div className="div-circulo"></div> Agregar Proveedor
                        </Link>
                    </div>
                    <BootstrapTable keyField='id' 
                                    data={ this.state.proveedores } 
                                    columns={ this.columns } 
                                    pagination={ paginationFactory(options) } />
                </div>
            </React.Fragment>
        )
    }
}
export default Proveedores;