import { useState } from "react";
import { Header } from '../../components/Header';
import { CardContent } from '../../components/CardContent';
import { ButtonLang } from '../../components/ButtonLang'
import { HomeStyle } from "./styles";

const tecList = ['Javascript', 'React', 'Vue Js', 'Tailwind CSS', 'Styled Components', 'Saas', 'Node', 'Typescript', 'Angular', 'Java']
const tecList1 = [...tecList.slice(0, 4)]
const tecList2 = [...tecList.slice(4, 8)]
const tecList3 = [...tecList.slice(8, 10)]  



const messages = [
    {
        id: 0,
        description: 'Português',
        titleContent: 'Olá, o meu nome é Jonathan Richard Souza Santos e eu sou Desenvolvedor Front-end, Tecnologias que eu tenho experiência:',
        icon: './icons/brazil.png'
    },

    {
        id: 1,
        description: 'Inglês',
        titleContent: "Hello, my name is Jonathan Richard Souza Santos e I'm a Front-end Developer, here some Tech Skills that i have knowledge:",
        icon: './icons/united-states.png'
    },

    {
        id: 2,
        description: 'Espanhol',
        titleContent: "Hola, mi nombre es Jonathan Richard Souza Santos y soy Desarrollador Front-end, Tecnologías en las que tengo experiencia:",
        icon: './icons/spain 2.png'
    },
]


export function Home() {


    let h1DefaultContent = 'Olá, o meu nome é Jonathan Richard Souza Santos e eu sou Desenvolvedor Front-end, Tecnologias que eu tenho experiência:'

    const [title, setTitle] = useState(h1DefaultContent);


    function handleClick(description: string) {

            if (description === 'Português') {
                setTitle(messages[0].titleContent);
                return
            }
            if (description === 'Inglês') {
                setTitle(messages[1].titleContent);
            } else {   
                setTitle(messages[2].titleContent);
            }   
        }

        
    return (
        <>  
            <HomeStyle>
                    <Header />
                    <h1 id="mainTitle">{title}</h1>
                    <CardContent itens={tecList1} itens2={tecList2} itens3={tecList3} />    
                <footer>
                        {messages.map(e => <ButtonLang key={e.id} title={e.description} icon={e.icon} click={() => handleClick(e.description)} />)}
                </footer>
            </HomeStyle>
        </> 
 
    )

}
