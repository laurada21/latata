import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useState } from 'react';

/*ModificarProducto=ModificarUsuario
usuarioModificar=productoModificar
newUsuario=newProducto
modificarProducto=modificarUsuario
setNewUsuario=setNewProducto
*/

const ModificarStock= ()=>{
  const productoModificarJson=JSON.parse(localStorage.getItem("productoModificar"))
   let userModificado=false  
  const [newProducto,setNewProducto]=useState(productoModificarJson)
  const modificarNombre=(nombrep)=>{
    setNewProducto({nombre:nombrep,descripcion:newProducto.descripcion,precio:newProducto.precio,stock:newProducto.stock})
  }
  const modificarDescripcion=(descripcionp)=>{
    setNewProducto({descripcion:descripcionp,nombre:newProducto.nombre,precio:newProducto.precio,stock:newProducto.stock})
  }
  const modificarPrecio=(preciop)=>{
    setNewProducto({precio:preciop,nombre:newProducto.nombre,descripcion:newProducto.descripcion,stock:newProducto.stock})
    }
    const modificarStock=(stockp)=>{
      setNewProducto({stock:stockp,nombre:newProducto.nombre,descripcion:newProducto.descripcion,precio:newProducto.precio})
    }
      
    
    const modificarProducto=(e)=>{
     
      const datosProductos =JSON.parse(localStorage.getItem("productos"))
         for(let i=0 ; i<datosProductos.length; i++){
          if(datosProductos[i].nombre===newProducto.nombre){
            datosProductos[i].descripcion===newProducto.descripcion
            datosProductos[i].precio===newProducto.precio
            datosProductos[i].stock===newProducto.stock
          }
         }
       
        localStorage.setItem("productos",JSON.stringify(datosProductos ))
        localStorage.setItem("productoModificar",JSON.stringify(newProducto))
        userModificado=true
        alert("Producto Modificado")
        e.target.form.elements.nombrenewinput.value=""
        e.target.form.elements.descripcionnewinput.value=""
        e.target.form.elements.precionewinput.value=""
        e.target.form.elements.stocknewinput.value=""
  
      }
    return (
        <div>
          {
            userModificado ? <p> Producto Modificado con Exito</p>:
            <Form onSubmit={(e) => {
              modificarProducto(e);
          } }>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th> Descripcion</th>
                  <th>Precio</th>
                  <th>Stock</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon2">Nombre</InputGroup.Text>
                      <Form.Control
                        id="nombrenewinput"
                        placeholder="Nombre"
                        aria-label="Nombre"
                        aria-describedby="basic-addon2"
                        defaultValue={newProducto.nombre}
                        onChange={(e) => { modificarNombre(e.target.value); } } />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon2">Descripcion</InputGroup.Text>
                      <Form.Control
                        id="descripcionnewinput"
                        placeholder="Descripcion"
                        aria-label="Descripcion"
                        aria-describedby="basic-addon2"
                        defaultValue={newProducto.descripcion}
                        onChange={(e) => { modificarDescripcion(e.target.value); } } />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon3">Precio</InputGroup.Text>
                      <Form.Control
                        id="precionewinput"
                        type='Precio'
                        placeholder="Precio"
                        aria-label="Precio"
                        aria-describedby="basic-addon3"
                        defaultValue={newProducto.precio}
                        onChange={(e) => { modificarPrecio(e.target.value); } } />
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon3">Stock</InputGroup.Text>
                      <Form.Control
                        id="stockwordnewinput"
                        type='Stock'
                        placeholder="Stock"
                        aria-label="Stock"
                        aria-describedby="basic-addon3"
                        defaultValue={newProdcuto.stock}
                        onChange={(e) => { modificarStock(e.target.value); } } />
                    </InputGroup>
                  </td>
                  <td>  <Button variant="primary" type='submit'>Modificar
                  </Button></td>
                </tr>
              </tbody>
            </Table>
          </Form>
         }
    </div>
    )
}
;
export default modificarStock