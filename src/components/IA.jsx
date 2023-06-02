import React, { useState } from "react";
import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import swal from "sweetalert";
import styles from "./css/Programming.module.css";

const IA = ({ flagUsuario, regCursos, user, cursos }) => {
  const [cursoUser, setCursoUser] = useState([]);
  const [filterCursos, setFilterCursos] = useState([]);
  const [insert, setInsert] = useState([]);

  useEffect(() => {
    setCursoUser(
      regCursos.filter(
        (filtro) => filtro.USERNAME === user && filtro.ID_CATEGORIA === 4
      )
    );
  }, [cursoUser]);

  useEffect(() => {
    setFilterCursos(
      cursos.filter((filtro) => filtro.CATEGORIA_CURSOS_ID_CATEGORIA === 4)
    );
  }, [filterCursos]);

  useEffect(() => {
    setInsert({ USERNAME: user, ID_CATEGORIA: 4 });
  });

  const handlerSubmit = (i) => {
    i.preventDefault();
    swal({
      title: "¿Deseas registrarte en este curso?",
      text: "Este curso tiene un costo de 0$",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((respuesta) => {
      if (respuesta) {
        const requestInit = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(insert),
        };
        fetch("http://localhost:9000/api_usuario_curso", requestInit)
          .then((res) => res.text())
          .then((res) => console.log(res));

        swal({ text: "El registro se realizó exitosamente!", icon: "success" });
      }
    });
  };

  const handleDelete = (user) => {
    swal({
      title: "¿Deseas eliminar este curso?",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((respuesta) => {
      if (respuesta) {
        const requestInit = {
          method: "DELETE",
        };
        fetch(
          "http://localhost:9000/api_usuario_curso/" + user + "/" + 4,
          requestInit
        )
          .then((res) => res.text())
          .then((res) => console.log(res));

        swal({
          text: "El curso ha sido eliminado correctamente!",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      {flagUsuario === false ? (
        <div>
          <div class="statistics">
            <div class="statistics-left">
              <h2>Inteligencia Artificial</h2>
              <p>
                La inteligencia artificial (IA), en el contexto de las ciencias
                de la computación, es una disciplina y un conjunto de
                capacidades cognoscitivas e intelectuales expresadas por
                sistemas informáticos o combinaciones de algoritmos cuyo
                propósito es la creación de máquinas que imiten la inteligencia
                humana para realizar tareas, y que pueden mejorar conforme
                recopilan información.
              </p>
            </div>

            <div class="statistics-right">
              <img src="images/index/ia1.jpeg" alt="" />
            </div>
          </div>
          <div class="statistics">
            <div class="statistics-right">
              <img src="images/index/ia2.jpg" alt="" />
            </div>
            <div class="statistics-left">
              <p>
                Descubre el mundo de la IA desde cero y sin saber programación.
                Domina los conceptos fundamentales y conoce sus aplicaciones
                prácticas en una variedad de campos. Usa herramientas como
                ChatGPT, Dall-E 2 y Hugging Face. Aprender de inteligencia
                artificial es un reto, pero Platzi lo hace efectivo .
              </p>
            </div>
          </div>
        </div>
      ) : flagUsuario === true && cursoUser.length > 0 ? (
        <div>
          <h2 className={styles.cabecera}>Inteligencia Artificial</h2>
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
          <button
            className={styles.buttonBorrarCurso}
            onClick={() => handleDelete(user)}
          >
            Eliminar Curso
          </button>
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
              <h2>Inteligencia Artificial</h2>
              <p>
                La inteligencia artificial (IA), en el contexto de las ciencias
                de la computación, es una disciplina y un conjunto de
                capacidades cognoscitivas e intelectuales expresadas por
                sistemas informáticos o combinaciones de algoritmos cuyo
                propósito es la creación de máquinas que imiten la inteligencia
                humana para realizar tareas, y que pueden mejorar conforme
                recopilan información.
              </p>
            </div>

            <div class="statistics-right">
              <img src="images/index/ia1.jpeg" alt="" />
            </div>
          </div>
          <div class="statistics">
            <div class="statistics-right">
              <img src="images/index/ia2.jpg" alt="" />
            </div>
            <div class="statistics-left">
              <p>
                Descubre el mundo de la IA desde cero y sin saber programación.
                Domina los conceptos fundamentales y conoce sus aplicaciones
                prácticas en una variedad de campos. Usa herramientas como
                ChatGPT, Dall-E 2 y Hugging Face. Aprender de inteligencia
                artificial es un reto, pero Platzi lo hace efectivo .
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IA;
