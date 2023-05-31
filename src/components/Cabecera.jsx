import React from "react";
import styles from "./css/cabecera.module.css";
import LOGO from "./images/LOGO_BLANCO.png";
import { Outlet,Link } from "react-router-dom";

const Cabecera = ({flagUsuario}) => {
  return (
    <div>
      <div className={styles.topnav}>
        <img className={styles.image} src={LOGO} />

        {flagUsuario?<Link to="/Perfil">Perfil</Link>:<Link to="/Login">Iniciar Sesión</Link>}
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>
            Cursos
            <i className="fa fa-caret-down"></i>
          </button>
          <div className={styles.dropdown_content}>
            <Link to="/Programming">Fundamentos de Programación</Link>
            <Link to="/WDev">Desarrollo Web</Link>
            <Link to="/SData">Ciencia de Datos</Link>
            <Link to="/IA">Inteligencia Artificial</Link>
          </div>
        </div>

        <Link to="/News">Noticias</Link>
        <Link to="/">
          Inicio
        </Link>
      </div>
      <Outlet/>
    </div>
  );
};

export default Cabecera;
