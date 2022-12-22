import { EventHandler } from "react"
import { ButtonIdiom } from "./styles"
import { LangContext } from "../contexts/langContext"


interface ButtonProps {
    title: string,
    icon: string,
    click: EventHandler<any>
}


export function ButtonLang(props:ButtonProps) {
    return (
        <LangContext.Provider value={props.title}>
        <div onClick={() => props.click(props.title)}>
           <ButtonIdiom>
                <img src={props.icon} alt="" />
                <p>{props.title}</p>
            </ButtonIdiom> 
        </div>
        </LangContext.Provider>
    )
}
