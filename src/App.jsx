import logo from './logo.svg';
import './App.css';
import { useCallback, useState, useRef } from 'react';
import { useEffect } from 'react';

function App() {
  const [password, setPassword] = useState('')
  const [lenth, setLength] = useState(6)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)



  const passwordGenetor = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (number) str += "09876544321"
    if (character) str += "^(){}$#!@!!"

    for (let i = 1; i <= lenth; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setPassword(pass)
  }, [lenth, number, character, setPassword])
  useEffect(() => {
    passwordGenetor()
  }, [lenth, number, character, passwordGenetor])

  const passwordRef = useRef(null)
  const copyClipInput = () => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800    text-orange-600 '  >
        <h1 className='text-center text-4xl text-white text-transform: uppercase mb-6' >Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4' >
          <input type="text" placeholder='Password' value={password} readOnly ref={passwordRef} className='outline-none w-full py-3 px-3' />
          <button onClick={copyClipInput} className=' outline-none bg-blue-400 text-white px-4 shrink-0 hover:bg-blue-300 transition-all  ' >Copy</button>
        </div>
        <div className=' flex text-sm gap-x-3 ' >
          <div className=' flex items-center gap-x-1' >
            <input type="range" min={6} max={50} value={lenth} onChange={(e) => { setLength(e.target.value) }} className=' cursor-pointer' />
            <label >Length:{lenth}</label>
          </div>
          <div className='  flex items-center gap-x-1' >
            <input type='checkbox' value={number} id='num' onChange={() => { setNumber((prev) => !prev) }} className=' cursor-pointer' />
            <label className=' cursor-pointer' htmlFor='num' >Numbers</label>
          </div>
          <div className=' flex items-center gap-x-1' >
            <input type='checkbox' value={character} id='check' onChange={() => { setCharacter((prev) => !prev) }} className=' cursor-pointer' />
            <label className=' cursor-pointer' htmlFor='check' >Characters</label>
          </div>
        </div>

      </div>

    </>
  );
}

export default App;
