import { useState } from "react"
import { Fragment } from "react"


const Autorizacion =(ComponenteValid,rolesPermitidos)=>{
    const[producto]=useState({idProducto:"1234",role:"USER"})
    return(
        <>{
            rolesPermitidos.includes(producto.role)? <ComponenteValid/> :<h1> pagin no permitida

            </h1>
        }</>
    )
}
export default Autorizacion
