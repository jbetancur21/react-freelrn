import React, { useState } from "react";
import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "./css/Programming.module.css";
import swal from "sweetalert";

const Programming = ({ flagUsuario, regCursos, user, cursos }) => {
  const [cursoUser, setCursoUser] = useState([]);
  const [filterCursos, setFilterCursos] = useState([]);
  const [insert, setInsert] = useState([]);

  useEffect(() => {
    setCursoUser(
      regCursos.filter(
        (filtro) => filtro.USERNAME === user && filtro.ID_CATEGORIA === 1
      )
    );
  }, [cursoUser]);

  useEffect(() => {
    setFilterCursos(
      cursos.filter((filtro) => filtro.CATEGORIA_CURSOS_ID_CATEGORIA === 1)
    );
  }, [filterCursos]);

  useEffect(() => {
    setInsert({ USERNAME: user, ID_CATEGORIA: 1 });
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
          "http://localhost:9000/api_usuario_curso/" +
          user+"/"+1 ,
          requestInit
        )
          .then((res) => res.text())
          .then((res) => console.log(res));
        swal({ text: "El curso ha sido eliminado correctamente!", icon: "success" });
      }
    });
  };

  return (
    <div>
      {flagUsuario === false ? (
        <div>
          <div class="statistics">
            <div class="statistics-left">
              <h2>Fundamentos de Programación</h2>
              <p>
                Es el soporte directo de las asignaturas: programación orientada
                a objetos, estructura de datos, tópicos avanzados de
                programación y de forma indirecta se relaciona con el desarrollo
                de sistemas de software, sistemas operativos y programación de
                sistemas.
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
              <img src="images/index/1192848_e63a.jpg" alt="" />
            </div>
            <div class="statistics-left">
              <p>
                Da tus primeros pasos en el mundo de la programación aprendiendo
                sus estructuras fundamentales y la lógica funcional detrás de
                cada línea de código.
              </p>
            </div>
          </div>
        </div>
      ) : flagUsuario === true && cursoUser.length > 0 ? (
        <div>
          <h2 className={styles.cabecera}>Fundamentos de Programación</h2>
          <div className={styles.container}>
            {filterCursos.map((elemento) => {
              return (
                <div className={styles.tarjetas} key={elemento.ID_CURSOS}>
                  <h2>{elemento.NOMBRE_CURSOS}</h2>
                  <img
                    className={styles.img}
                    src="images/index/programacionBasica.png"
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
              <h2>Fundamentos de Programación</h2>
              <p>
                Es el soporte directo de las asignaturas: programación orientada
                a objetos, estructura de datos, tópicos avanzados de
                programación y de forma indirecta se relaciona con el desarrollo
                de sistemas de software, sistemas operativos y programación de
                sistemas.
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
              <img src="images/index/1192848_e63a.jpg" alt="" />
            </div>
            <div class="statistics-left">
              <p>
                Da tus primeros pasos en el mundo de la programación aprendiendo
                sus estructuras fundamentales y la lógica funcional detrás de
                cada línea de código.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Programming;
