import React from "react";
import styles from "./css/Login.module.css";
import { useState } from "react";
import LOGO from "./images/LOGO.png";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const SignUp = ({usuario,setFlagUsuario,setUser}) => {
  const [usuarios, setUsuarios] = useState([]);//Array que va a añadir el nuevo usuario



  const handlerChange = (e) => {
		setUsuarios({ ...usuarios, [e.target.name]: e.target.value,"ID_TIPOS":2 });
	};

  
  const handlerSubmit = (i) =>{
    i.preventDefault();
    const e = usuario.filter(nombreU => nombreU.USERNAME === usuarios.USERNAME);
    if(e.length === 1){
      swal({
        text:"Este usuario ya existe, por favor intente con otro",
        icon:"warning",
        button:"Aceptar"});
    }else{
      const requestInit = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuarios),
      };
      fetch("http://localhost:9000/api/", requestInit)
        .then((res) => res.text())
        .then((res) => console.log(res));
  
      setFlagUsuario(true)
      setUser(usuarios.USERNAME)
      swal({
        title:"Bienvenido a FreeLRN",
        text:"Usuario registrado correctamente",
        icon:"success",
        button:"Continuar"});
      document.getElementById("oculto").click()
    }
  }

  return (
    <div className={styles.container}>
      <img src={LOGO} />
      <div>
        <form className={styles.form_login} onSubmit={handlerSubmit}>
          <label for="user">Nombre de Usuario</label>
          <input
            id="user"
            type="text"
            name="USERNAME"
            placeholder="xxxxxxxxxxxx"
            onChange={handlerChange}
            required
          />
          <label for="email">Correo Electrónico</label>
          <input
            id="email"
            type="email"
            name="CORREO_USU"
            placeholder="xxxxxxxxxxxx"
            onChange={handlerChange}
            required
          />
          <label for="password">Contraseña</label>
          <input
            id="password"
            name="CONTRASEÑA"
            type="password"
            placeholder="xxxxxxxxxxxx"
            onChange={handlerChange}
            required
          />

          <label for="name">Nombre</label>
          <input
            id="name"
            type="text"
            name="NOMBRE_USU"
            placeholder="xxxxxxxxxxxx"
            onChange={handlerChange}
            required
          />
          <label for="lastname">Apellidos</label>
          <input
            id="lastname"
            type="text"
            name="APELLIDO_USU"
            placeholder="xxxxxxxxxxxx"
            onChange={handlerChange}
            required
          />
          <button type="submit">Registrarse</button>
        </form>
        <Link id="oculto" to="/" className={styles.oculto}>
          Hola
        </Link>
      </div>
    </div>
  );
};

export default SignUp;