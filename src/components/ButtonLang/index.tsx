import { ButtonIdiom } from "./styles"



interface ButtonProps {
    title: string,
    icon: string,
    click: () => any
}

//Componente de botão para trocar o titulo da página passando 
//as características e eventos via props
export function ButtonLang(props:ButtonProps) {
    return (
        <div onClick={() => props.click()}>
           <ButtonIdiom>
                <img src={props.icon} alt={`Logo país com idioma ${props.title}`} />
                <p>{props.title}</p>
            </ButtonIdiom> 
        </div>
    )
}
