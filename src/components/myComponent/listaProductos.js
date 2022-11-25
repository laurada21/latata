import React, { useState } from 'react';


import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';




const ListaProductos = () => 
  { 
    const datosProductoJson=JSON.parse(localStorage.getItem("producto"))
    const [datosProducto,setDatosProducto]=useState(datosProductoJson)
    
    

    const eliminarProducto=(id)=>{
      const listaProductosNew=datosProducto.filter(
        (producto)=>(producto.nombre !==id)
      )
      setDatosProducto(listaProductosNew)
      localStorage.setItem("productos",JSON.stringify(listaProductosNew))
    }
    const modificarProducto=(modificarProducto)=>{
    localStorage.setItem("productoModificar",JSON.stringify(modificarProducto))
    }

    return(
      <div>
      
        
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th> Descripcion</th>
          <th>Precio</th>
          <th>stock</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        
       {
        datosProducto.map(
          (producto,index)=>{
            return(
              <tr>
               <td>{index}</td>
              <td>{producto.nombre}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.precio}</td>
              <td>{producto.stock}</td>
              <td>  <Button variant="warning" onClick={
                ()=>{
                eliminarProducto(producto.email)
                }
                /*producto.nombre=usuario.email
                producto.descripcion=usuario.nombre
                producto.precio=usuario.password
                producto.stock=usuario.satock*/
              }
              >Eliminar</Button>
                   <Button variant="info" onClick={
                    ()=>{
                    modificarProducto(producto)
                    window.location.href="/modificar"
                   }
                  }>Modificar</Button>
                  </td>
              </tr>   
                

            );
            

          }
        )
      }
              
     </tbody>
     </Table>

      </div>
  )


}
;


export default ListaProductos;
