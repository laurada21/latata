import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Routes,Route, BrowserRouter} from "react-router-dom";
import ListaUsuarios from './components/myComponent/listaUsuarios';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Autorizacion from './Autorizacion';
import datosUsuarioJson from "./components/myComponent/datos.json"
import AddUsuario from './components/myComponent/addUsuario';
import ModificarUsuario from './components/myComponent/modificarUsuario copy';

function App() {
  if(localStorage.getItem("usuarios")==null){
  localStorage.setItem("usuarios",JSON.stringify(datosUsuarioJson))
}
  return (
    <>
    <BrowserRouter>

    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="ver usuario">ver usuario</Navbar.Brand>
        <Navbar.Brand href="add">add</Navbar.Brand>
        <Navbar.Brand href="modificar">modificar</Navbar.Brand>
        </Container>
        </Navbar>

    <Routes>
      <Route path='/ver usuario' element={Autorizacion(ListaUsuarios,["USER","ADMIN"])}/>
      <Route path='/add' element={Autorizacion(AddUsuario,["USER","ADMIN"])}/>
      <Route path='/modificar' element={Autorizacion(ModificarUsuario,["USER","ADMIN"])}/>

    
    </Routes>
    </BrowserRouter>
    </>
    );
}

export default App;
