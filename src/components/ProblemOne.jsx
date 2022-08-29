import React, { useState } from 'react'
import Board from './Board'
import Form from './Form'

function ProblemOne() {
	const [size, setSize] = useState(0)
  const [queen, setQueen] = useState({
    queenX : 0,
    queenY : 0
  }) 
  const [obstacleCoord, setObstacleCoord] = useState([])
  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-4 p-4'>
			<Form size={size} setSize={setSize} queen={queen} setQueen={setQueen} obstacleCoord={obstacleCoord} setObstacleCoord={setObstacleCoord}/>
			<Board size={size} queen={queen} obstacleCoord={obstacleCoord}/>
    </div>
  )
}

export default ProblemOne