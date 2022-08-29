import { useState } from "react"
import { PawnCoord } from "./PawnCoord"

export default function FormObstacle({numberObs, obstacleCoord,setObstacleCoord}) {
    let auxiliar = []
  if(numberObs>0){
    for (let i = 0; i < numberObs; i++) {
        auxiliar.push("test")
        
    }
  }
  
  return (
    <>
        {
            auxiliar.map((elem, index) => (<PawnCoord key={index} obstacleCoord={obstacleCoord} setObstacleCoord={setObstacleCoord} index={index}/>)
            )
        }
        
    </>
  )
}
