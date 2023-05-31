import React from "react";
import styles from "./css/Login.module.css";
import { useState } from "react";
import LOGO from "./images/LOGO.png";
import { Link } from "react-router-dom";

const SignUp = ({usuario,setFlagUsuario}) => {
  const [usuarios, setUsuarios] = useState([]);//Array que va a añadir el nuevo usuario
  const [user, setUser] = useState('');



  const handlerChange = (e) => {
		setUsuarios({ ...usuarios, [e.target.name]: e.target.value });
	};

  
  const handlerSubmit = (i) =>{
    i.preventDefault();

    const e = usuario.filter(nombreU => nombreU.nombre === usuarios[0].nombre);
    if(e.length === 1){
      alert("Este usuario ya existe, por favor intente con otro");
    }else{
      setFlagUsuario(true)
      document.getElementById("oculto").click()
    }
  }

  return (
    <div className={styles.container}>
      <img src={LOGO} />
      <div>
        <form className={styles.form_login} onSubmit={handlerSubmit} >
          <label for="user">Nombre de Usuario</label>
          <input
            id="user"
            type="text"
            name="nombre"
            placeholder="xxxxxxxxxxxx"
            onChange={handlerChange}
          />
          <label for="user">Correo Electrónico</label>
          <input
            id="user"
            type="email"
            name="correo"
            placeholder="xxxxxxxxxxxx"
            onChange={handlerChange}
          />
          <label for="password">Contraseña</label>
          <input
            id="password"
            name="contraseña"
            type="password"
            placeholder="xxxxxxxxxxxx"
            onChange={handlerChange}
          />
          <button type="submit">Registrarse</button>
        </form>
        <Link id="oculto" to="/" className={styles.oculto} >Hola</Link>
      </div>
    </div>
  );
};

export default SignUp;