import { useEffect, useState } from 'react'
import Brown from './Brown'
import White from './White'

function Board({size, queen, obstacleCoord}) {

  const [aux, setAux] = useState([])  

    useEffect(() => {
        setAux(chessboard(size))
    }, [size])


    useEffect(() => {
        if (queen.queenX!==0 &&queen.queenY!==0){
            updateQueen(Math.abs(queen.queenY-size),Math.abs(queen.queenX-1))
        }
    }, [queen])

    const updateQueen = (posX, posY) => {
        let drawqueen = aux
        drawqueen[posX][posY] = drawqueen[posX][posY] + " queen"
        console.log(drawqueen)
        setAux(drawqueen)
    }

  return (
    <>
        <div className="col-span-2 mt-4 mx-auto border-black">
            {
                Array.isArray(aux) 
                ?
                aux.map((element) => <div className='flex'>
                    {element.map((e,i)=>
                    <div>{
                        e ==="cafe" ? <Brown/> : e==="blanco" ? <White/> : e==="cafe queen" ? <Brown queen={queen}/> : e==="blanco queen" ? <White queen={queen}/> : null
                    }</div>
                    )}
                    </div>
                    )
                : <div>{aux}</div>
            }
        </div>
        
    </>
  )
}

export default Board

function chessboard(size) {
    if(!size) return 
    if (size > 10) return "The size of chessboard is very large and cannot be drawn"
    let aux = []
    let aux2 = []
    for (let i = 1; i <= size; i++) {
      for (let j = 1; j <= size; j++) {
          if(i%2==0){
              if(j%2==0){
                  aux2.push("cafe")
              }
              else{
                  aux2.push("blanco")
              }
          } else {
              if(j%2==0){
                  aux2.push("blanco")
              }
              else{
                  aux2.push("cafe")
              }
          }
      }
      aux.push(aux2)
      aux2= []
    } 
    return aux
}