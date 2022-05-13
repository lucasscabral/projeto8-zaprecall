import React from "react"
import Flashcards from "./flashcards"
import Pergunta from "./pergunta"

import LogoPequena from "../imagens/logo-pequeno.png"

export default function Recal(){
    const[telaCard, setTelaCard] = React.useState("perguntaCosta")

    return(
        <div className="tela-recal">
            <div className="logo-name">
                <img src={LogoPequena} alt="logo-pequena"/>
                <h1>ZapRecall</h1>
            </div>
                {
                    telaCard === "perguntaCosta" ? <Flashcards  perguntasViradas={setTelaCard}/> : <Pergunta />
                }
           
        </div>
    )
}