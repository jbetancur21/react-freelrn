import React from "react";
import styles from "./css/Perfil.module.css";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

const Perfil = ({usuario, user,setData,data,setFlagUsuario}) => {
  const [usuarios, setUsuarios] = useState([]);//Array que va a añadir los usuarios que se modificaran
  const [banderaUpdate, setBanderaUpdate]= useState(false);//Bandera que va a activar o desactivar el boton de guardar


  const handleDelete = (user) => {
    const requestInit = {
      method: "DELETE",
    };
    fetch(
      "http://localhost:9000/api/" +
      user ,
      requestInit
    )
      .then((res) => res.text())
      .then((res) => console.log(res));
      setFlagUsuario(false)
      document.getElementById("oculto").click()
  
};

const handleChange = (e)=>{
  setBanderaUpdate(true);
  setUsuarios({...usuarios,[e.target.name]:e.target.value})
}


const handleUpdate = (e) => {
  e.preventDefault();
  //validación de los datos
  if (
    usuarios.CONTRASEÑA === "" ||
    usuarios.NOMBRE_USU === "" ||
    usuarios.APELLIDO_USU === "" ||
    usuarios.CORREO_USU === "" 
  ) {
    alert("Todos los campos son obligatorios");
    return;
  }
  const requestInit = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuarios),
  };
  fetch(
    "http://localhost:9000/api/" +
    user ,
    requestInit
  )
    .then((res) => res.text())
    .then((res) => console.log(res));


    alert("Información actualizada correctamente!")
    document.getElementById("oculto").click()
};

const handleCloseSesion = () =>{
  setFlagUsuario(false);
  document.getElementById("oculto").click()
}


  return (
    <div>
      <div className={styles.container}>
        <button onClick={handleCloseSesion} className={styles.buttonCerrar}>Cerrar Sesión</button>
        <div>
          <form className={styles.form_login} >
            <label for="user">Nombre de Usuario</label>
            <input
              id="user"
              type="text"
              value={user}
              disabled
            />
            <label for="password">Contraseña</label>
            <input
              id="password"
              type="password"
              name="CONTRASEÑA"
              placeholder={data[0].CONTRASEÑA}
              onChange={handleChange}
            />
            <label for="user">Nombre</label>
            <input
              id="user"
              type="text"
              name="NOMBRE_USU"
              placeholder={data[0].NOMBRE_USU}
              onChange={handleChange}
            />
            <label for="user">Apellido</label>
            <input
              id="user"
              type="text"
              name="APELLIDO_USU"
              placeholder={data[0].APELLIDO_USU}
              onChange={handleChange}
            />
            <label for="user">Correo Electrónico</label>
            <input
              id="user"
              type="text"
              name="CORREO_USU"
              onChange={handleChange}
              placeholder={data[0].CORREO_USU}
            />
            {banderaUpdate?<button type="button" className={styles.button_guardar}  onClick={handleUpdate}>Guardar Cambios</button>:<button hidden type="button" className={styles.button_guardar} >Guardar Cambios</button>}
            <button type="button" className={styles.button_eliminar} onClick={()=>handleDelete(user)}>Eliminar Cuenta</button>
            <Link id="oculto" to="/" className={styles.oculto} >Hola</Link>
          </form>
        </div>
      </div>
      {
        data[0].ID_TIPOS===1?
        <div>
          <table>
            
          </table>

        </div>
        :
        <h1>Soy Estudiante</h1>

      }



    </div>
  );
};

export default Perfil;
