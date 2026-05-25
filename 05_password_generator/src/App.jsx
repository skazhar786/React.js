import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  let [length, setLength] = useState(6)
  let [numAllowed, setNumAllowed] = useState(false)
  let [charAllowed, setCharAllowed] = useState(false)
  let [password, setPassword] = useState("")

  let passwordRef = useRef(null)
  let passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "123456789"
    if (charAllowed) str += "@#$%^&*(){}[]"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)

    }

    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])

  let copyClipBoard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }
    , [length, charAllowed, numAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full  max-w-md mx-auto shodow-md rounded-lg px-4 my-8 bg-gray-700 text-orange-500">
        <h1 className="py-4">Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white rounded-2xl"
            placeholder='password'
            readOnly
            ref={passwordRef}
          />

          <button onClick={copyClipBoard} className=' outline-none bg-blue-700 text-white  shrink-0 rounded-xl mx-2 px-4 py-1 hover:bg-sky-600'> copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={16}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label >Length:{length}</label>

          </div>
          <div>
            <input
              className='cursor-pointer'
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setNumAllowed((prev) => !prev)
              }}
            />
            <label className='cursor-pointer' htmlFor="numberInput">Number</label>
          </div>
          <div>
            <input
              className='cursor-pointer'
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onClick={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label className='cursor-pointer' htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
