import { useEffect, useState } from "react"

export const PawnCoord = ({obstacleCoord,setObstacleCoord,index}) => {
    const [coordObst, setCoordObst] = useState({
        pawnX:'',
        pawnY:''
      })
    const handleObst = (e) => {
        setCoordObst({
            ...coordObst,
            [e.target.name]: Number(e.target.value)
        }) 
    }
    useEffect(() => {
        if(coordObst.pawnX!==""&&coordObst.pawnY!==""){
            //setObstacleCoord([...obstacleCoord,coordObst])
            obstacleCoord[index]=coordObst
            setObstacleCoord([...obstacleCoord])
        }
    }, [coordObst])
    
    return (
        <div className="flex flex-row" >
            <div className="w-1/2 mr-2">
                <label className='block' htmlFor="pawnX">Obstacle in X</label>
                <input type="text" onChange={handleObst} name="pawnX" className='mt-1 mb-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:border-amber-700 focus:outline-none '  placeholder='Enter a number'/>
            </div>
            <div className="w-1/2">
                <label className='block' htmlFor="pawnY">Obstacle in Y</label>
                <input type="text" onChange={handleObst} name="pawnY" className='mt-1 mb-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:border-amber-700 focus:outline-none'  placeholder='Enter a number'/>
            </div>
        </div>
    )
}
