import React from "react";
import styles from "./css/Login.module.css";
import { useState } from "react";
import LOGO from "./images/LOGO.png";
import { Link } from "react-router-dom";



const Login = ({usuario,setFlagUsuario}) => {

  const [user, setUser] = useState('');
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
      alert("Este usuario no existe, por favor registrese");
    }else if (e[0].CONTRASEÑA != password){
      alert("Contraseña incorrecta")
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