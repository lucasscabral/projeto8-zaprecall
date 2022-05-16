import React from "react"
import Flashcards from "./flashcards"
import Score from "./score"



export default function RodaPeQuestoes({perguntas,setTelaResposta}){
    //console.log(perguntas.length)
    const[contarConcluidas,setContarConcluidas] = React.useState(0)


    return(
        
        <span>{contarConcluidas}/{perguntas.length} CONCLUÍDOS</span>
    )
}