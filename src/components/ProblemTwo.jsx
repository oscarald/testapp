import {useState} from 'react'
import substring from "../utils/substring"

function ProblemTwo() {
  const [output, setOutput] = useState(0)
  const [input, setInput] = useState("")
  const [err, setErr] = useState("")
  const handleInput = (e) => {
    setInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!/([a-z])\D\S/.test(input)){
      setErr("The input must be a string")
      setOutput(0)
    } else{
      setOutput(substring(input))
      setErr("")
    }

  }
  return (
    <div className='container mx-auto '>
      <h2 className='text-center text-3xl text-semibold mb-5'>Problem 2: String value</h2>
      <div className='flex flex-col justify-center'>
        <form onSubmit={handleSubmit} >
            <label className='block'>A single line containing string</label>
            <input type="text" onChange={handleInput} className='mt-1 mb-1 block md:w-1/2 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:border-amber-700 focus:outline-none'  placeholder='Enter a string'/>
            {err!=="" ? <div className='text-red-600'>{err}</div> : null}
            <button type='submit' className=' mt-2 md:w-1/2 w-full p-2 text-white bg-amber-700 hover:bg-amber-900 rounded'>Send</button>
        </form>
        {output>0 ? <pre>Output: {output}</pre>: null}
      </div>
    </div>
  )
}

export default ProblemTwo