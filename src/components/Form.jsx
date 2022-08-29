import { useEffect, useState } from "react"
import queensAttack from "../utils/queen"
import FormObstacle  from "./FormObstacle"
function Form({size, setSize, queen, setQueen, obstacleCoord, setObstacleCoord}) {

  const [output, setOutput] = useState(0)
  const [numberObs, setNumberObs] = useState(0)
  const [err, setErr] = useState("")
  const [aux, setAux] = useState([])
  const handleSize = (e) => {
    setSize(Number(e.target.value))
  }
  const handleQueen = (e) => {
    //console.log(e.target.name, e.target.value)
    setQueen({
      ...queen,
      [e.target.name]: Number(e.target.value)
    })
  }

  const handleObstacle = (e) => {
    setNumberObs(Number(e.target.value))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(size)
    console.log(queen.queenX, queen.queenY)
    //console.log(numberObs)
    console.log(arrayOfObs);
    if(typeof size == "number" && typeof numberObs == "number" && typeof queen.queenX == "number" && typeof queen.queenY == "number" && size>0  && queen.queenX>0 && queen.queenY>0){
      setOutput(queensAttack(size, numberObs, queen.queenX, queen.queenY, arrayOfObs))
      setErr("")
    } else {
      setErr("All data must be numbers and must be greater than 0")
    }

  }
  let arrayOfObs = []
  useEffect(() => {
    arrayOfObs = obstacleCoord.map((elem,ind) => ([elem.pawnX,elem.pawnY]))
    //console.log(arrayOfObs)
  }, [obstacleCoord])
  
  const handleReset = () => {
    setSize(0)
    setNumberObs(0)
    setQueen({
      queenX : 0,
      queenY : 0
    })
    setObstacleCoord([])
    setOutput(0)
  }

  return (
    <div>
      
        <h2 className='text-center text-3xl text-semibold mb-5'>Problem 1: Chess</h2>
        <form onSubmit={handleSubmit}>
            <label className='block'>Number of rows and columns in the board</label>
            <input type="text" value={size} onChange={handleSize} className='mt-1 mb-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:border-amber-700 focus:outline-none'  placeholder='Enter a number'/>
            <label className='block'>Number of obstacles on the board</label>
            <input type="text" value={numberObs} onChange={handleObstacle} className='mt-1 mb-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:border-amber-700 focus:outline-none'  placeholder='Enter a number'/>
            <label className='block' htmlFor="queenX">Row number of the queen's position</label>
            <input type="text" value={queen.queenX} onChange={handleQueen} name="queenX" className='mt-1 mb-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:border-amber-700 focus:outline-none'  placeholder='Enter a number'/>
            <label className='block' htmlFor="queenY">Column number of the queen's position</label>
            <input type="text" value={queen.queenY} onChange={handleQueen} name="queenY" className='mt-1 mb-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:border-amber-700 focus:outline-none'  placeholder='Enter a number'/>
            <div className="flex flex-col">
              {
                numberObs>0 
                  ? 
                    <FormObstacle numberObs= {numberObs} obstacleCoord={obstacleCoord} setObstacleCoord={setObstacleCoord}/>
                  : null}
            </div>
            {!err=="" ? <div className="text-red-600">{err}</div> : null}
            <button type='submit' className=' mt-2 w-full p-2 text-white bg-amber-700 hover:bg-amber-900 rounded'>Send</button>
            <button type="reset" onClick={handleReset} className=' mt-2 w-full p-2 text-white bg-red-600 hover:bg-red-700 rounded'>Reset</button>
        </form>
        {output>0 ? <pre>Resultado: {output}</pre> : null}
    </div>
  )
}

export default Form