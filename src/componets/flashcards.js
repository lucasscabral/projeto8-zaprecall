import Recal from "./recal"
import React from "react"

import Pergunta from "./pergunta"

function CardsPerguntas({pergunta,index,titulo,resposta,btnvermelho,btnamarelo,btnverde}){
    //console.log(clickCard)
    const[telaResposta, setTelaResposta] = React.useState(true);

    return(
        <>
        {
          telaResposta === true ?  
        <div className="flashcards">
            <span>{pergunta} {index}</span>
            <ion-icon name="play-outline" onClick={() => setTelaResposta(false)}></ion-icon>
        </div> : <Pergunta titulo = {titulo} resposta = {resposta} btnvermelho={btnvermelho} btnamarelo={btnamarelo} btnverde={btnverde}/>
        }
   
       
        </>
    )
}

let perguntas=[
    {pergunta : "Pergunta ", titulo:"O que é JSX?", resposta:"JSX é uma sintaxe paraescrever HTML dentro do JS", btnvermelho:"vermelho", btnamarelo:"amarelo", btnverde:"verde"},
    {pergunta : "Pergunta ", titulo:"O React é __", resposta:"uma biblioteca JavaScript para construção de interfaces", btnvermelho:"vermelho", btnamarelo:"amarelo", btnverde:"verde"},
    {pergunta : "Pergunta ", titulo:"Componentes devem iniciar com __ ", resposta:"letra maiúscula", btnvermelho:"vermelho", btnamarelo:"amarelo", btnverde:"verde"},
    {pergunta : "Pergunta ", titulo:"O que é JSX?", resposta:"JSX é uma sintaxe paraescrever HTML dentro do JS" , btnvermelho:"vermelho", btnamarelo:"amarelo", btnverde:"verde"},
    {pergunta : "Pergunta ", titulo:"O que é JSX?", resposta:"JSX é uma sintaxe paraescrever HTML dentro do JS" , btnvermelho:"vermelho", btnamarelo:"amarelo", btnverde:"verde"},
    {pergunta : "Pergunta ", titulo:"O que é JSX?", resposta:"JSX é uma sintaxe paraescrever HTML dentro do JS" , btnvermelho:"vermelho", btnamarelo:"amarelo", btnverde:"verde"},
    {pergunta : "Pergunta ", titulo:"O que é JSX?", resposta:"JSX é uma sintaxe paraescrever HTML dentro do JS", btnvermelho:"vermelho", btnamarelo:"amarelo", btnverde:"verde" },
    {pergunta : "Pergunta ", titulo:"O que é JSX?", resposta:"JSX é uma sintaxe paraescrever HTML dentro do JS" , btnvermelho:"vermelho", btnamarelo:"amarelo", btnverde:"verde"}
]
perguntas.sort(embaralhador);

// Esta função pode ficar separada do código acima, onde você preferir
function embaralhador() { 
    return Math.random() - 0.5; 
}


export default function Flashcards(){
    //let clicarPergunta = setTelaCard;
    //console.log(clicarPergunta)

    const[qtdPerguntas, setQtdPerguntas] = React.useState(perguntas);
    //console.log(qtdPerguntas)

    return(
        
        qtdPerguntas.map((perg, index) => <CardsPerguntas key={index} pergunta={perg.pergunta} index={index + 1} titulo ={perg.titulo} resposta={perg.resposta} btnvermelho={perg.btnvermelho} btnamarelo={perg.btnamarelo} btnverde={perg.btnverde}/>)  
        
    )
}