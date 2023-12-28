import React from 'react'
import {useState} from 'react'
const App = () => {
  let [f,setF]=useState(true)
  if(f){
    return(
      <div>
        <h1>Cond rendering with flag true</h1>
        <button onClick={()=>setF(false)}>SetFalse</button>
      </div>
    )
  }
  else{
    return(<div>
      <h1>Cond rendering with flag false</h1>
      <button onClick={()=>setF(true)}>Settrue</button>
    </div>)
  }
}

export default App