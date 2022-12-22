import {useEffect, useState} from "react";
import { Header } from '../../components/Header';
import { CardContent } from '../../components/CardContent';
import { ButtonLang } from '../../components/ButtonLang'
import { HomeStyle } from "./styles";
import { LangContext } from "../../components/contexts/langContext";

const tecList = ['Javascript', 'React', 'Vue Js', 'Tailwind CSS', 'Styled Components', 'Saas', 'Node', 'Typescript', 'Angular', 'Java']
const tecList1 = [...tecList.slice(0, 4)]
const tecList2 = [...tecList.slice(4, 8)]
const tecList3 = [...tecList.slice(8, 10)]  



const messages = [
    {
        pt: 0,
        description: 'Português',
        titleContent: 'Olá, o meu nome é Jonathan Richard Souza Santos e eu sou Desenvolvedor Front-end, Tecnologias que eu tenho experiência:'
    },

    {
        en: 1,
        description: 'Inglês',
        titleContent: "Hello, my name is Jonathan Richard Souza Santos e I'm a Front-end Developer, here some Tech Skills that i have knowledge:"
    },

    {
        es: 2,
        description: 'Espanhol',
        titleContent: "Hola, mi nombre es Jonathan Richard Souza Santos y soy Desarrollador Front-end, Tecnologías en las que tengo experiencia:"
    },
]

    const langs = {
        pt: 'Português',
        en: 'Inglês',
        es: 'Espanhol'
    }


export function Home() {


    let h1DefaultContent = 'Olá, o meu nome é Jonathan Richard Souza Santos e eu sou Desenvolvedor Front-end, Tecnologias que eu tenho experiência:'

    const [title, setTitle] = useState('h1DefaultContent');

    const { pt, en, es }  = langs

    function handleClick() {


            if (langs.pt === 'Português') {
                setTitle(messages[0].titleContent);
                console.log('ENTROU BR');
            } else {
                if (langs.en === 'Inglês') {
                    setTitle(messages[1].titleContent);
                    console.log('ENTROU EUA');
                } else {   
                setTitle(messages[2].titleContent);
                console.log('ENTROU MEX');
            }

    
            
             

            // console.log('teste');
            // console.log(messages[0].description)
            // console.log(messages[1].titleContent)

            //console.log(title)


        }
    }


    return (
        <>  
        <LangContext>
            <HomeStyle>
                    <Header />
                    <h1 id="mainTitle">{title}</h1>
                    <CardContent itens={tecList1} itens2={tecList2} itens3={tecList3} />    
                <footer>
                    <ButtonLang key={messages[0].pt} title={pt} icon="./icons/brazil.png" click={() => handleClick()} />
                    <ButtonLang key={messages[1].es} title={es} icon="./icons/spain 2.png" click={handleClick} />
                    <ButtonLang key={messages[2].en} title={en} icon="./icons/united-states.png" click={handleClick} />
                </footer>
            </HomeStyle>
        </LangContext>
        </> 
 
    )
}