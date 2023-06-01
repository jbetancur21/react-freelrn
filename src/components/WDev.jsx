import React, { useState } from "react";
import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "./css/Programming.module.css";

const WDev = ({ flagUsuario, regCursos, user, cursos }) => {
  const [cursoUser, setCursoUser] = useState([]);
  const [filterCursos, setFilterCursos] = useState([]);
  const [insert, setInsert] = useState([]);

  useEffect(() => {
    setCursoUser(
      regCursos.filter(
        (filtro) => filtro.USERNAME === user && filtro.ID_CATEGORIA === 2
      )
    );
  }, [cursoUser]);

  useEffect(() => {
    setFilterCursos(
      cursos.filter((filtro) => filtro.CATEGORIA_CURSOS_ID_CATEGORIA === 2)
    );
  }, [filterCursos]);

  useEffect(() => {
    setInsert({ USERNAME: user, ID_CATEGORIA: 2 });
  });

  const handlerSubmit = (i) => {
    i.preventDefault();
    const requestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(insert),
    };
    fetch("http://localhost:9000/api_usuario_curso", requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));
  };

  const handleDelete = (user) => {
    const requestInit = {
      method: "DELETE",
    };
    fetch(
      "http://localhost:9000/api_usuario_curso/" +
      user+"/"+2 ,
      requestInit
    )
      .then((res) => res.text())
      .then((res) => console.log(res));
  };



  return (
    <div>
      {flagUsuario === false ? (
        <div>
          <div class="statistics">
            <div class="statistics-left">
              <h2>Desarrollo Web</h2>
              <p>
                El desarrollo web es un proceso complejo que implica la creación
                de productos digitales en línea. También es un término que
                define la creación de sitios web para Internet o una intranet.
              </p>
            </div>

            <div class="statistics-right">
              <img
                src="images/index/desarrolloWebImg.png"
                alt=""
              />
            </div>
          </div>
          <div class="statistics">
            <div class="statistics-right">
              <img src="images/index/web-dev-icon.jpg" alt="" />
            </div>
            <div class="statistics-left">
              <p>
                El desarrollo web está compuesto por aquellas herramientas con
                las que puedes interactuar visualmente además de aquello que se
                encarga del almacenamiento, análisis y procesamiento de los
                datos. Este es un ecosistema compuesto por múltiples caminos que
                te permitirán crear grandes proyectos. Únete a la industria que
                te permitirá crecer exponencialmente en tu carrera profesional y
                ser parte de los empleos mejor pagados a nivel global.
              </p>
            </div>
          </div>
        </div>
      ) : flagUsuario === true && cursoUser.length > 0 ? (
        <div>
          <h2 className={styles.cabecera}>Desarrollo Web</h2>
          <div className={styles.container}>
            {filterCursos.map((elemento) => {
              return (
                <div className={styles.tarjetas} key={elemento.ID_CURSOS}>
                  <h2>{elemento.NOMBRE_CURSOS}</h2>
                  <img
                    className={styles.img}
                    src="images/index/desarrolloWeb.png"
                    alt=""
                  />
                  <h4>Nivel: Básico</h4>
                  <a
                    href={elemento.ENLACE_CURSOS}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver
                  </a>
                </div>
              );
            })}
          </div>
          <button className={styles.buttonBorrarCurso} onClick={()=>handleDelete(user)}>Eliminar Curso</button>
          <br />
          <br />
        </div>
      ) : (
        <div>
          <button onClick={handlerSubmit} className={styles.botonRegistro}>
            Registrate a este curso ya!
          </button>
          <div class="statistics">
            <div class="statistics-left">
              <h2>Desarrollo Web</h2>
              <p>
                El desarrollo web es un proceso complejo que implica la creación
                de productos digitales en línea. También es un término que
                define la creación de sitios web para Internet o una intranet.
              </p>
            </div>

            <div class="statistics-right">
              <img
                src="images/index/desarrolloWebImg.png"
                alt=""
              />
            </div>
          </div>
          <div class="statistics">
            <div class="statistics-right">
              <img src="images/index/web-dev-icon.jpg" alt="" />
            </div>
            <div class="statistics-left">
              <p>
                El desarrollo web está compuesto por aquellas herramientas con
                las que puedes interactuar visualmente además de aquello que se
                encarga del almacenamiento, análisis y procesamiento de los
                datos. Este es un ecosistema compuesto por múltiples caminos que
                te permitirán crear grandes proyectos. Únete a la industria que
                te permitirá crecer exponencialmente en tu carrera profesional y
                ser parte de los empleos mejor pagados a nivel global.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WDev;
