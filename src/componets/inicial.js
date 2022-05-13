import App from "./app"
import Logo from "../imagens/logo.png"


export default function inicil({setTela}){
    return(
        <div className="tela-inicil">
            <div>
                <img src={Logo} alt="logo"/>
                <span>ZapRecall</span>
            </div>
            <button onClick={() => setTela("Tela")}>Iniciar Recal!</button>
        </div>
    )
}