import React from "react";
import Inicil from "./inicial";
import Recal from "./recal";
import "../assets/reset.css";
import "../assets/estilos.css";


export default function App() {
    const[tela,setTela]= React.useState("init")

    return(
        <>
           {
            tela === "init" ? <Inicil setTela={setTela}/> : <Recal />
           }
        </>
    );
}