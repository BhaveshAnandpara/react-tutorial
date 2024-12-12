import logo from './logo.svg';
import './App.css';
import Card from './component/Card';
import { useState } from 'react';

function App() {


  /* without useState
  
    let count = 0;
  
    function increment() {
  
      console.log(count + 1); //conosle to check if the function works
      count = count+1 //increment count value by 1
  
    }
  
    */

  /** With useState */

  const [count, setCount] = useState(0)

  function increment() {

    console.log(count + 1); //conosle to check if the function works
    setCount( count+1 )

  }

  return (
    <>

      <div className="container">

        <h2> {count} </h2>
        <button className="btn" onClick={increment} > Increment by 1 </button>

      </div>

    </>
  )
}

export default App;
