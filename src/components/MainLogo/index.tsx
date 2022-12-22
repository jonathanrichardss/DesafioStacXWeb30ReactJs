import React from "react"
import { MainLogoSt } from "./styles";

export interface MainLogoProps {
    image: string,
    bgImage: string
}

export function MainLogo(props:MainLogoProps) {
    return (
      <MainLogoSt>

        <img src={props.bgImage} alt="Logo background" className="bgLogo"/>

        <img src={props.image} alt="Logo da escola" style={{

          width: '150px',
          height: '27.82px',
          position: 'relative'

        }}/>

      </MainLogoSt>
    )
}