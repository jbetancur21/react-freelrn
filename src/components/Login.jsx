import React from "react";
import styles from "./css/Login.module.css";
import { useState } from "react";
import LOGO from "./images/LOGO.png";
import { Link } from "react-router-dom";
import swal from "sweetalert";



const Login = ({usuario,setFlagUsuario,user,setUser}) => {

  const [password, setPassword] = useState('');

  const handlerUser = ({ target }) => {
		setUser(target.value);
	};

  const handlerPass = ({ target }) => {
		setPassword(target.value);
	};

  const handlerSubmit = (i) =>{
    i.preventDefault();

    const e = usuario.filter(nombreU => nombreU.USERNAME === user);
    console.log(usuario)
    if(e.length === 0){
      swal({
        text:"Este usuario no existe, por favor registrese",
        icon:"error",
        button:"Aceptar"})
    }else if (e[0].CONTRASEÑA != password){
      swal({
        text:"Contraseña incorrecta",
        icon:"error",
        button:"Aceptar"})
    }else{
      swal({
        title:"Bienvenido",
        icon:"success",
        button:"Aceptar"})
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
            placeholder="xxxxxxxxxxxx"
            onChange={handlerUser}
            value={user}
          />
          <label for="password">Contraseña</label>
          <input
            id="password"
            type="password"
            placeholder="xxxxxxxxxxxx"
            onChange={handlerPass}
            value={password}
          />
          <p>
            ¿Aún no tienes una Cuenta? <Link id="flag" to="/SignUp">Registrate</Link>
          </p>
          <button type="submit">Iniciar Sesión</button>
        </form>
        <Link id="oculto" to="/" className={styles.oculto} >Hola</Link>
      </div>
    </div>
  );
};

export default Login;