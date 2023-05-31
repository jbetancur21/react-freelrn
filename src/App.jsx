import Cabecera from "./components/Cabecera";
import News from "./components/News";
import Login from "./components/Login";
import Perfil from "./components/Perfil";
import Home from "./components/Home";
import WDev from "./components/WDev";
import IA from "./components/IA";
import Programming from "./components/Programming";
import SData from "./components/SData";
import SignUp from "./components/SignUp";
import { useState,useEffect } from "react";
import { Routes,Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [usuario, setUsuario] = useState([]);//Array que guarda el listado de los usuarios
  const [noticias, setNoticias] = useState([]);
  const [flagUsuario, setFlagUsuario] = useState(false);//Bandera que determina si se ha iniciado sesion

  /*API DE NODE*/
  useEffect(() => {
      fetch("http://localhost:9000/api")
      .then((res) => res.json())
      .then((res) => setUsuario(res));
  }, []);

  /*API DE NOTICIAS*/
  useEffect(() => {
    const getNoticias = async() =>{
      const response = await axios.get("https://newsapi.org/v2/everything?q=tecnologia&language=es&apiKey=969f8ce46064456bacf30b9f5dbdd96e")
      setNoticias(response.data.articles)
    }
    getNoticias()
    
  }, []);

  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Cabecera flagUsuario={flagUsuario}/>}>
        <Route path="/" element={<Home />}> </Route>
        <Route path="News" element={<News noticias={noticias}/>}> </Route>
        <Route path="Login" element={<Login usuario={usuario} setFlagUsuario={setFlagUsuario}/>}> </Route>
        <Route path="WDev" element={<WDev/>}> </Route>
        <Route path="Programming" element={<Programming/>}></Route>
        <Route path="SData" element={<SData/>}> </Route>
        <Route path="IA" element={<IA/>}> </Route>
        <Route path="Perfil" element={<Perfil/>}> </Route>
        <Route path="SignUp" element={<SignUp usuario={usuario} setFlagUsuario={setFlagUsuario} />}> </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
