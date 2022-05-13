import Recal from "./recal"

function CardsPerguntas({pergunta,index},{setTelaCard}){
    //console.log(clickCard);
    return(
        <div className="flashcards">
            <span>{pergunta} {index}</span>
            <ion-icon name="play-outline" onClick={() => setTelaCard("perguntas")}></ion-icon>
        </div>
    )
}

let perguntas=[
    {pergunta : "Pergunta "},
    {pergunta : "Pergunta "},
    {pergunta : "Pergunta "},
    {pergunta : "Pergunta "},
    {pergunta : "Pergunta "},
    {pergunta : "Pergunta "},
    {pergunta : "Pergunta "},
    {pergunta : "Pergunta "}
]

export default function Flashcards(){


    return(
        
          perguntas.map((perg, index) => <CardsPerguntas pergunta={perg.pergunta} index={index + 1}/>)  
        
    )
}