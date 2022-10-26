import React from "react";
import styled from 'styled-components'
interface Props{
    primary?:boolean
    secondary?:boolean
}

interface ButtonProps{
children:React.ReactNode
primary?:boolean
 secondary?:boolean
}
const Button = styled.button<Props>`
${ props =>props.primary &&`
color:white;
background-color:red;
border-style:none;
padding:7px 25px ;
margin:10px;
`
}

${ props =>props.secondary &&`
color:white;
background-color:blue;
border-style:none;
padding:10px 20px ;
margin:10px;
`
}
 `
export const CustomButon:React.FC<ButtonProps>=({ primary, secondary, children})=>{
    return(
    <Button primary={primary} secondary={secondary}>{children}</Button>
       
    )
}