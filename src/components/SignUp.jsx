import React from "react";
import styles from "./css/Login.module.css";
import { useState } from "react";
import LOGO from "./images/LOGO.png";
import { Link } from "react-router-dom";

const SignUp = ({usuario,setFlagUsuario,setUser}) => {
  const [usuarios, setUsuarios] = useState([]);//Array que va a añadir el nuevo usuario



  const handlerChange = (e) => {
		setUsuarios({ ...usuarios, [e.target.name]: e.target.value,"ID_TIPOS":2 });
	};

  
  const handlerSubmit = (i) =>{
    i.preventDefault();
    const e = usuario.filter(nombreU => nombreU.USERNAME === usuarios.USERNAME);
    if(e.length === 1){
      alert("Este usuario ya existe, por favor intente con otro");
    }else{
      if (
        usuarios.USERNAME === "" ||
        usuarios.CONTRASEÑA === "" ||
        usuarios.NOMBRE_USU === "" ||
        usuarios.APELLIDO_USU === "" ||
        usuarios.CORREO_USU === "" 
      ) {
        alert("Todos los campos son obligatorios");
        return;
      }


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
      alert("Usuario registrado correctamente");
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
          />
          <label for="email">Correo Electrónico</label>
          <input
            id="email"
            type="email"
            name="CORREO_USU"
            placeholder="xxxxxxxxxxxx"
            onChange={handlerChange}
          />
          <label for="password">Contraseña</label>
          <input
            id="password"
            name="CONTRASEÑA"
            type="password"
            placeholder="xxxxxxxxxxxx"
            onChange={handlerChange}
          />

          <label for="name">Nombre</label>
          <input
            id="name"
            type="text"
            name="NOMBRE_USU"
            placeholder="xxxxxxxxxxxx"
            onChange={handlerChange}
          />
          <label for="lastname">Apellidos</label>
          <input
            id="lastname"
            type="text"
            name="APELLIDO_USU"
            placeholder="xxxxxxxxxxxx"
            onChange={handlerChange}
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