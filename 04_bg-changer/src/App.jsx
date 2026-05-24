import { useState } from 'react'


function App() {
  let [color, setColor] = useState('olive')

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
<div className='flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-2xl'>
   <button
    onClick={()=> setColor("red")}
     className='outline-none px-4 py-1 rounded-2xl text-white shadow-2xl'
     style={{backgroundColor: "red"}}
   >red</button>

   <button 
    onClick={()=> setColor("green")}
   className='outline-none px-4 py-1 rounded-2xl text-white shadow-2xl'
   style={{backgroundColor: "green"}}
   >green</button>

   <button 
    onClick={()=> setColor("brown")}
   className='outline-none px-4 py-1 rounded-2xl text-white shadow-2xl'
     style={{backgroundColor: "brown"}}
   >brown</button>

   <button
    onClick={()=> setColor("skyblue")}
   className='outline-none px-4 py-1 rounded-2xl text-white shadow-2xl'
     style={{backgroundColor: "skyblue"}}
   >skyblue</button>

   <button
    onClick={()=> setColor("purple")}
   className='outline-none px-4 py-1 rounded-2xl text-white shadow-2xl'
     style={{backgroundColor: "purple"}}
   >purple</button>

   <button 
    onClick={()=> setColor("black")}
   className='outline-none px-4 py-1 rounded-2xl text-white shadow-2xl'
     style={{backgroundColor: "black"}}
   >black</button>
  
</div>

        </div>
      </div>
    </>
  )
}

export default App
