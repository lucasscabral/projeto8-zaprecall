import Recal from "./recal"
import React from "react"

import Footer from "./footer"

import Pergunta from "./pergunta"
import RodaPeQuestoes from "./rodaPeQuestoes"
import Score from "./score"

function CardsPerguntas({perguntas,pergunta,index,titulo,resposta,setqtdperguntas,qtdperguntas,key}){
  
    const[telaResposta, setTelaResposta] = React.useState(true);
    const[statusFinal,setStatusFinal]= React.useState("");

    return(
        <>
        {
          telaResposta === true ?  
        <div className={`flashcards ${statusFinal}`}>
            <span>{pergunta} {index}</span>
            <ion-icon name={statusFinal === "" ? "play-outline" : statusFinal === "resposta-verde"? "checkmark-circle": statusFinal === "resposta-vermelha"? "close-circle" : "help-circle"} onClick={() => setTelaResposta(false)}></ion-icon>
        </div> : <Pergunta  setStatusFinal={setStatusFinal} setTelaResposta={setTelaResposta} telaResposta={telaResposta} setqtdperguntas={setqtdperguntas} qtdperguntas={qtdperguntas} key={key} perguntas={perguntas} pergunta={pergunta} index={index} titulo = {titulo} resposta = {resposta}/>
        }
        
       
        </>
    )
}

let perguntas=[
    {pergunta : "Pergunta ", titulo:"O que é JSX?", resposta:"JSX é uma sintaxe paraescrever HTML dentro do JS"},
    {pergunta : "Pergunta ", titulo:"O React é __", resposta:"uma biblioteca JavaScript para construção de interfaces"},
    {pergunta : "Pergunta ", titulo:"Componentes devem iniciar com __ ", resposta:"letra maiúscula"},
    {pergunta : "Pergunta ", titulo:"O que é JSX?", resposta:"JSX é uma sintaxe paraescrever HTML dentro do JS" },
    {pergunta : "Pergunta ", titulo:"O que é JSX?", resposta:"JSX é uma sintaxe paraescrever HTML dentro do JS" },
    {pergunta : "Pergunta ", titulo:"O que é JSX?", resposta:"JSX é uma sintaxe paraescrever HTML dentro do JS" },
    {pergunta : "Pergunta ", titulo:"O que é JSX?", resposta:"JSX é uma sintaxe paraescrever HTML dentro do JS" },
    {pergunta : "Pergunta ", titulo:"O que é JSX?", resposta:"JSX é uma sintaxe paraescrever HTML dentro do JS" }
]
perguntas.sort(embaralhador);

function embaralhador() { 
    return Math.random() - 0.5; 
}


export default function Flashcards(){
    const[qtdPerguntas, setQtdPerguntas] = React.useState(perguntas);

    return(
        <>
        {
            qtdPerguntas.map((perg, index) => <CardsPerguntas setqtdperguntas={setQtdPerguntas} qtdperguntas={qtdPerguntas} perguntas ={perguntas} key={index} pergunta={perg.pergunta} index={index + 1} titulo ={perg.titulo} resposta={perg.resposta}/>)  
        }
              
            <Footer>
                <Score />
                <RodaPeQuestoes perguntas={perguntas}/>
            </Footer>
        </>
  
    )
}