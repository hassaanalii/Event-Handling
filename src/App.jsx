import React, { useState } from 'react'




export default function App() {
    const [col, setCol] = useState("#007C77")
    const [name, setName]  = useState("Hassaan")

    const changed = ()=>{
        setCol("#F0F600")
        setName("Ali")
    }
    const doubleChanged = ()=>{
        setName("Muhammad")
    }
     return (
    <div className='mainDiv' style={{backgroundColor: col}}>
        <input type="button" value={name} onClick={changed} onDoubleClick={doubleChanged} />
    </div>)
    
  
}
