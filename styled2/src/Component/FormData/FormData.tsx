import { useState } from "react"
import { DisplayData } from "../DisplayData/DisplayData"
import { FormCssModule } from "../Forms/FormCSSModules"

import './formdata.css'
export const FormData:React.FC=()=>{
    const [names, setNames]= useState<string[]>([])
    const SaveData =(name:string)=>{
        setNames(prev=> ([...prev,name]))
    }

    return (
        <>
        <div className="container">
        <FormCssModule onsave={SaveData}/>
        <DisplayData  data={names}/>
        </div>
        </>
    )
}