import React from "react"
import Flashcards from "./flashcards"

import LogoPequena from "../imagens/logo-pequeno.png"



export default function Recal(){

    return(
        <>
        <div className="tela-recal">
            <div className="logo-name">
                <img src={LogoPequena} alt="logo-pequena"/>
                <h1>ZapRecall</h1>
            </div>
            <div className="todas-perguntas">
                <Flashcards/> 
            </div>
        </div>
           
        </>
    )
}