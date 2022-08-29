import queenImage from '../assets/queen-chess.png'
import xImage from "../assets/x-image.png"

function Brown({queen}) {
  console.log(queen)
  return (
    <div className='w-9 md:w-14 bg-amber-800 h-9 md:h-14 flex justify-center'>
        {queen ? <img src={queenImage}  style={{width:"3rem"}}/> : null} 
    </div>
  )
}

export default Brown