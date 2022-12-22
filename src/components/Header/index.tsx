import React from "react";
import { HeaderSt } from './styles'
import { MainLogo } from '../MainLogo'

export function Header() {
    return (
            <HeaderSt className="hdrStyle">
                <MainLogo bgImage="Logo.png" image="image 1.png"/>
            </HeaderSt>
    )
}