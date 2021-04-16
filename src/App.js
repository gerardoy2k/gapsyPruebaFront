import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Proveedores from './proveedores/proveedores';
import ProveedoresAdd from './proveedoresAdd/proveedoresAdd';
import Home from './home/home';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/proveedores" component={Proveedores} />
          <Route exact path="/proveedoresAdd" component={ProveedoresAdd} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
