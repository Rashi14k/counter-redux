import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement,increment,reset,incrementby } from '../Redux/counterSlice'

function Counter() {
    const dispatch=useDispatch()
    const counter=useSelector((state)=>state.counterSlice.counter)
    const [amount,setAmount]=useState(0)
    const handleIncrement=()=>{
        dispatch(incrementby(+amount))
        setAmount("")
    }
  return (
    <div style={{width:'600px'}} className='container-lg mt-5 border rounded p-5 d-flex justify-content-center align-items-center flex-column'>
        <h1 style={{fontSize:'100px'}}>{counter}</h1>
        <div className='d-flex justify-content-between w-100'>
        <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>decrement</button>
        <button onClick={()=>dispatch(reset())} className='btn btn-danger'>reset</button>
        <button onClick={()=>dispatch(increment())} className='btn btn-success'>increment</button>
        </div>
        <div className='d-flex justify-content-between mt-5 w-100'>
            <input onChange={e=>setAmount(e.target.value)} type='text' className='form-control' placeholder='enter amount' value={amount||""}/>
            <button onClick={handleIncrement} className='btn btn-success'>increment by amount</button>

        </div>
        
        
    </div>
  )
}

export default Counter