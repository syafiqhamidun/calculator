import { useState } from 'react';
import './App.css';
import { clear } from '@testing-library/user-event/dist/clear';
// import { useState } from 'react';

function App() {

  const [result , setResult] = useState('');

  let handleClick = (e) => {
    setResult(result.concat(e.target.value))
  }

  const clearAnswer = () => {
    setResult("")
  }

  const totalAnswer = () => {
    setResult(eval(result).toString())
  }
  
  return (
    <div className='flex justify-center mt-60'>
          <div className='bg-teal-800 w-1/4 h-96'>

            <div className='flex justify-center mt-3'>
              <input type="text" className='w-1/2 h-10 rounded-lg' placeholder='hello' value={result} />
            </div>

            <div className='bg-teal-200 w-1/2 mt-4 mx-auto h-72'>
              <div className='flex justify-evenly'>
              <button className='bg-red-300 rounded w-12 h-12 mt-3' value='7' onClick={handleClick} >8</button>
              <button className='bg-red-300 rounded w-12 h-12' value='8' onClick={handleClick} >8</button>
              <button className='bg-red-300 rounded w-28 h-12' onClick={clearAnswer} >clear</button>
              </div>

              <div className='flex justify-evenly '>
              <button className='bg-red-300 rounded w-12 h-12 mt-3' value='+' onClick={handleClick} >+</button>
              <button className='bg-red-300 rounded w-12 h-12' value='' onClick={handleClick} >8</button>
              <button className='bg-red-300 rounded w-12 h-12' value='' onClick={handleClick} >8</button>
              <button className='bg-red-300 rounded w-12 h-12' value='' onClick={handleClick} >8</button>
              </div>

              <div className='flex justify-evenly '>
              <button className='bg-red-300 rounded w-12 h-12 mt-3' onClick={totalAnswer} >=</button>
              <button className='bg-red-300 rounded w-12 h-12' value='' onClick={handleClick} >8</button>
              <button className='bg-red-300 rounded w-12 h-12' value='' onClick={handleClick} >8</button>
              <button className='bg-red-300 rounded w-12 h-12' value='' onClick={handleClick} >8</button>
              </div>

            </div>
    </div>
    </div>

  );
}

export default App;
