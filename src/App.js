import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Routes,Route, BrowserRouter} from "react-router-dom";
import ListaProductos from './components/myComponent/listaProductos';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Autorizacion from './Autorizacion';
import datosProductoJson from "./components/myComponent/datos.json"
import AddProducto from './components/myComponent/addProducto';
import ModificarProducto from './components/myComponent/modificarProducto copy';
import modificarStock from './components/myComponent/modificarStock';

function App() {
  if(localStorage.getItem("productos")==null){
  localStorage.setItem("productos",JSON.stringify(datosProductoJson))
}
  return (
    <>
    <BrowserRouter>

    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="ver producto">ver producto</Navbar.Brand>
        <Navbar.Brand href="add">add</Navbar.Brand>
        <Navbar.Brand href="Stock">stock</Navbar.Brand>
        <Navbar.Brand href="modificar">modificar</Navbar.Brand>
        </Container>
        </Navbar>

    <Routes>
      <Route path='/ver producto' element={Autorizacion(ListaProductos,["USER","ADMIN"])}/>
      <Route path='/add' element={Autorizacion(AddProducto,["USER","ADMIN"])}/>
      <Route path='/Stock' element={Autorizacion(ModificarStock,["USER","ADMIN"])}/>
      <Route path='/modificar' element={Autorizacion(ModificarProducto,["USER","ADMIN"])}/>
    
    
    </Routes>
    </BrowserRouter>
    </>
    );
}

export default App;
