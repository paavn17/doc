import { useState } from 'react'
import Back from './components/Back'
import Fore from './components/Fore'

function App() {
 return (
  <>
  
  <div className='relative w-full h-screen bg-zinc-900/95'>
    <Back/>
    <Fore/>
   </div>
  </>
 )
}

export default App
