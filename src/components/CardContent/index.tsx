import { MyCard } from './styles'


interface props {
    itens: string[];
    itens2: string[];
    itens3: string[];
}

let counter = 0;

export function CardContent(props:props) {
    return (
        <MyCard className="cardContent">
            <ul>
                {props.itens.map(mapped => (
                    <li key={counter++}>{mapped}</li>
                ))}
            </ul>
            <ul>
                {props.itens2.map(mapped => (
                    <li key={counter++}>{mapped}</li>
                ))}
            </ul>
            <ul>
                {props.itens3.map(mapped => (
                    <li key={counter++}>{mapped}</li>
                ))}
            </ul>
        </MyCard>
    )
}