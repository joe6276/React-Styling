import { useState } from "react"
import { DisplayData } from "../DisplayData/DisplayData"
import { Formone } from "../Forms/Form1"
import './formdata.css'
export const FormData:React.FC=()=>{
    const [names, setNames]= useState<string[]>([])
    const SaveData =(name:string)=>{
        setNames(prev=> ([...prev,name]))
    }

    return (
        <>
        <div className="container">
            <Formone onsave={SaveData}/>
        <DisplayData  data={names}/>
        </div>
        </>
    )
}