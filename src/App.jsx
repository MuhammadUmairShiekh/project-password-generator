import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [password, setPassword] = useState([])
  const [lenth, setLength] = useState("Muhammad umair Shiekh")
  const [number, setNumber] = useState(false)
  const [character , setCharacter] = useState(false)



  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800    text-orange-600 '  >
        <h1 className='text-center text-4xl text-white text-transform: uppercase mb-6' >Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4' >
          <input type="text" placeholder='Password'value={password}  readOnly className='outline-none w-full py-3 px-3' />
          <button className=' outline-none bg-blue-400 text-white px-4 shrink-0 hover:bg-blue-300 transition-all  ' >Copy</button>
        </div>
        <div className=' flex text-sm gap-x-3 ' >
          <div className=' flex items-center gap-x-1' >
            <input type="range" min={6} max={100} value={lenth}  className=' cursor-pointer' />
            <label >Length: 8</label>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
