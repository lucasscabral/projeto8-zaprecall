import Flashcards from "./flashcards"
import Setinha from "../imagens/setinha.png"
import React from "react"
import TelaRespondidas from "./telarespondidas"
import Score from "./score"



function PerguntasRespostas({titulo,resposta,setTelaResposta,telaResposta,setStatusFinal}){
    const[entrarPergunta,setEntrarPergunta]= React.useState("virada")
    

    function esqueceu(){
        <>
        {
            setTelaResposta(true)
        }
        {
            setStatusFinal("resposta-vermelha")
        }
        <Score setStatusFinal={setStatusFinal} setTelaResposta={setTelaResposta}/>
    
        </>
        
    }
    function quaseEsqueceu(){
        setTelaResposta(true)
        setStatusFinal("resposta-amarelo")
    }
    function lembrou(){
        setTelaResposta(true)
        setStatusFinal("resposta-verde")
    }


    return(

        <div className="perguntas-respostas">
        {
            entrarPergunta === "virada"? <div className="titulo-pergunta face" >
                                            <span>{titulo}</span>
                                            <img src={Setinha} alt="setinha" onClick={() => setEntrarPergunta("Desvirada")}/>
                                        </div> : <div className="resposta face">
                                                    <span>{resposta}</span>
                                                    <div className="botoes-respostas">
                                                        <div className="botao-vermelho" onClick={() => esqueceu() }>
                                                            <span>Não lembrei</span>
                                                        </div>
                                                        <div className="botao-amarelo" onClick={() => quaseEsqueceu()}>
                                                            <span>Quase não lembrei</span>
                                                        </div>
                                                        <div className="botao-verde" onClick={() => lembrou()}>
                                                            <span>Zap!</span>
                                                        </div>
                                                    </div> 
                                                </div>
        }
       </div>
    )
}


export default function Pergunta({perguntas,pergunta,titulo,resposta,setqtdperguntas,qtdperguntas,key,index,setTelaResposta,telaResposta,setStatusFinal}){
    
    const[respondida,setRespondida]= React.useState("desvirar")

   

    return(
        
            respondida === "desvirar" ? <PerguntasRespostas setStatusFinal={setStatusFinal} setTelaResposta={setTelaResposta} telaResposta={telaResposta} setRespondida={setRespondida} setqtdperguntas={setqtdperguntas} qtdperguntas={qtdperguntas} key={key} perguntas={perguntas} pergunta={pergunta} titulo ={titulo} resposta={resposta} index={index} /> : <></>
    
          
       

    )
}
