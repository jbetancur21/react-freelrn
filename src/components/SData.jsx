import React, { useState } from "react";
import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "./css/Programming.module.css";

const SData = ({ flagUsuario, regCursos, user, cursos }) => {
  const [cursoUser, setCursoUser] = useState([]);
  const [filterCursos, setFilterCursos] = useState([]);
  const [insert, setInsert] = useState([]);

  useEffect(() => {
    setCursoUser(
      regCursos.filter(
        (filtro) => filtro.USERNAME === user && filtro.ID_CATEGORIA === 3
      )
    );
  }, [cursoUser]);

  useEffect(() => {
    setFilterCursos(
      cursos.filter((filtro) => filtro.CATEGORIA_CURSOS_ID_CATEGORIA === 3)
    );
  }, [filterCursos]);

  useEffect(() => {
    setInsert({ USERNAME: user, ID_CATEGORIA: 3 });
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
      user+"/"+3 ,
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
              <h2>Ciencia de Datos</h2>
              <p>
                La ciencia de datos es un campo académico interdisciplinario que
                utiliza estadística, computación científica, métodos, procesos,
                algoritmos y sistemas científicos para obtener (recolectar o
                extraer), tratar, analizar y presentar informes a partir de
                datos ruidosos, estructurados y no estructurados.La ciencia de
                datos es multifacética y puede describirse como una ciencia, un
                paradigma de investigación, un método de investigación, una
                disciplina, un flujo de trabajo o una profesión.
              </p>
            </div>

            <div class="statistics-right">
              <img
                src="images/index/sData1.jpeg"
                alt=""
              />
            </div>
          </div>
          <div class="statistics">
            <div class="statistics-right">
              <img src="images/index/sData2.jpg" alt="" />
            </div>
            <div class="statistics-left">
              <p>
                Aprende los conocimientos mínimos indispensables y los
                fundamentos matemáticos para iniciar una ruta de aprendizaje en
                Ciencia de Datos. Por otro lado, el análisis de datos se ocupa
                principalmente de la estadística, las matemáticas y el análisis
                estadístico.
              </p>
            </div>
          </div>
        </div>
      ) : flagUsuario === true && cursoUser.length > 0 ? (
        <div>
          <h2 className={styles.cabecera}>Ciencia de Datos</h2>
          <div className={styles.container}>
            {filterCursos.map((elemento) => {
              return (
                <div className={styles.tarjetas} key={elemento.ID_CURSOS}>
                  <h2>{elemento.NOMBRE_CURSOS}</h2>
                  <img
                    className={styles.img}
                    src="images/index/cienciaDatos.jpg"
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
              <h2>Ciencia de Datos</h2>
              <p>
                La ciencia de datos es un campo académico interdisciplinario que
                utiliza estadística, computación científica, métodos, procesos,
                algoritmos y sistemas científicos para obtener (recolectar o
                extraer), tratar, analizar y presentar informes a partir de
                datos ruidosos, estructurados y no estructurados.La ciencia de
                datos es multifacética y puede describirse como una ciencia, un
                paradigma de investigación, un método de investigación, una
                disciplina, un flujo de trabajo o una profesión.
              </p>
            </div>

            <div class="statistics-right">
              <img
                src="images/index/fundamentos-programacion-bases-datos.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="statistics">
            <div class="statistics-right">
              <img src="images/index/sData2.jpg" alt="" />
            </div>
            <div class="statistics-left">
              <p>
                Aprende los conocimientos mínimos indispensables y los
                fundamentos matemáticos para iniciar una ruta de aprendizaje en
                Ciencia de Datos. Por otro lado, el análisis de datos se ocupa
                principalmente de la estadística, las matemáticas y el análisis
                estadístico.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SData;
