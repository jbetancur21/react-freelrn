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
  const [user, setUser] = useState('');//Estado que va a guardar el nombre del usuario

  const [data, setData] = useState([]);//Array que guarda el usuario logueado
  const [usuario, setUsuario] = useState([]);//Array que guarda el listado de los usuarios
  const [regCursos, setRegCursos] = useState([]);//Array que guarda el listado de los usuarios
  const [cursos, setCursos] = useState([]);//Array que guarda el listado de los Cursos
  const [noticias, setNoticias] = useState([]);
  const [flagUsuario, setFlagUsuario] = useState(false);//Bandera que determina si se ha iniciado sesion

  /*Hook que guarda el dato del usuario logueado */
  useEffect(() => {
    setData(usuario.filter(infoUsuario =>
      infoUsuario.USERNAME === user
    ))
  }, [user,usuario]);


  /*API DE USUARIOS*/
  useEffect(() => {
    const getUsuarios = async()=>{
      const url = "http://localhost:9000/api";
      const {data} = await axios.get(url)
      setUsuario(data)
    };
    getUsuarios()
      
  }, [usuario]);

  /*API DE NOTICIAS*/
  useEffect(() => {
    const getNoticias = async() =>{
      const response = await axios.get("https://newsapi.org/v2/everything?q=tecnologia&language=es&apiKey=969f8ce46064456bacf30b9f5dbdd96e")
      setNoticias(response.data.articles)
      console.log(response.data.articles)
    }
    getNoticias()
    
  }, []);

  /*API DE REGISTRO DE LOS CURSOS*/
  useEffect(() => {
    const getRegCursos = async()=>{
      const url = "http://localhost:9000/api_usuario_curso";
      const {data} = await axios.get(url)
      setRegCursos(data)
    };
    getRegCursos()
      
  }, [regCursos]);

  /*API DE LOS CURSOS*/
  useEffect(() => {
    const getCursos = async()=>{
      const url = "http://localhost:9000/api_curso";
      const {data} = await axios.get(url)
      setCursos(data)
    };
    getCursos()
      
  }, [cursos]);


  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Cabecera flagUsuario={flagUsuario}/>}>
        <Route path="/" element={<Home />}> </Route>
        <Route path="News" element={<News noticias={noticias}/>}> </Route>
        <Route path="Login" element={<Login usuario={usuario} setFlagUsuario={setFlagUsuario} user={user} setUser={setUser}/>}> </Route>
        <Route path="WDev" element={<WDev flagUsuario={flagUsuario} regCursos={regCursos} user={user} cursos={cursos}/>}> </Route>
        <Route path="Programming" element={<Programming flagUsuario={flagUsuario} regCursos={regCursos} user={user} cursos={cursos}/>}></Route>
        <Route path="SData" element={<SData flagUsuario={flagUsuario} regCursos={regCursos} user={user} cursos={cursos} />}> </Route>
        <Route path="IA" element={<IA flagUsuario={flagUsuario} regCursos={regCursos} user={user} cursos={cursos}/>}> </Route>
        <Route path="Perfil" element={<Perfil usuario={usuario} user={user} setData={setData} data={data} setFlagUsuario={setFlagUsuario}/>}> </Route>
        <Route path="SignUp" element={<SignUp usuario={usuario} setFlagUsuario={setFlagUsuario} setUser={setUser} />}> </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
