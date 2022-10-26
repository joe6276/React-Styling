import React, { ReactNode } from 'react'
import { Display } from '../Interfaces'

export const DisplayData: React.FC<Display> = ({ data }) => {
  let content:ReactNode=<p>No Names Found</p>
  

  if( data.length>0){
    content = data.map((dat,i) => <p key={i}>{dat}</p>)
  }
  return <div>{content}</div>
}
