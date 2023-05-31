import React from "react";
import styles from "./css/News.module.css";
import { Outlet,Link } from "react-router-dom";

const News = ({noticias}) => {
  return (
    <div className={styles.container}>
      {noticias.map((elemento) => {
        return (
          <div className={styles.tarjetas} key={elemento.id}>
            <h2>{elemento.title}</h2>
            <img src={elemento.urlToImage} alt="" />
            <p>{elemento.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default News;
