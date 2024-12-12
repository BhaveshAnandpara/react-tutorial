import logo from './logo.svg';
import './App.css';
import Card from './component/Card';
import { useState } from 'react';
import NameCard from './component/NameCard';
import Agecard from './component/Agecard';

function App() {

  const [name, setName] = useState("Bhavesh")   //This is useState so whenever this value changes the component that is using this value as prop will also RERENDER
  const [age, setAge] = useState(22)   
  let city = "Wardha"   //This is not a useState so even if this value changes the component will not RENDER.

  return (
    <>
        <input type='text' placeholder='Enter Name here'   onChange={(e)=>setName(e.target.value)} />
        <input type='number' placeholder='Enter Age here'  onChange={(e)=>setAge(e.target.value)}  />
        <input type='text' placeholder='Enter city here'   onChange={(e)=>{ city=e.target.value } } />

        <NameCard name={name}/>
        <Agecard age={age} />
        <NameCard name={city}/>
    </>
  )
}

export default App;
