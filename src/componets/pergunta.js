import Flashcards from "./flashcards"
import Setinha from "../imagens/setinha.png"
import React from "react"


export default function Pergunta({titulo,resposta,btnvermelho,btnamarelo,btnverde}){
   
    const[perguntas,setPerguntas]= React.useState("virada")
    const[btnVermelho,setBtnVermelho]= React.useState(btnvermelho)
    const[btnAmarelo,setBtnAmarelo]= React.useState(btnamarelo)
    const[btnVerde,setBtnVerde]= React.useState(btnverde)
    
   

    return(
    
            <div className="perguntas-respostas">
                {
                    perguntas === "virada"? <div className="titulo-pergunta face ">
                                                <span>{titulo}</span>
                                                <img src={Setinha} alt="setinha" onClick={() => setPerguntas("Desvirada")}/>
                                            </div> : <div className="resposta face rotacao-aparecer">
                                                        <span>{resposta}</span>
                                                        <div className="botoes-respostas">
                                                            <div className="botao-vermelho" >
                                                                <span>Não lembrei</span>
                                                            </div>
                                                            <div className="botao-amarelo">
                                                                <span>Quase não lembrei</span>
                                                            </div>
                                                            <div className="botao-verde">
                                                                <span>Zap!</span>
                                                            </div>
                                                        </div> 
                                                    </div>
                }
               
                
               
            </div>
            

    )
}