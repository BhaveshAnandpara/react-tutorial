import React, { useEffect, useState } from 'react' //import useState Hook
import './App.css'

export default function App() {

  const [count, setCount] = useState(0) //equivalent to count = 0


  useEffect(() => {
    alert(count)
  }, [count])



  function increment() {
    console.log(count + 1); //conosle to check if the function works
    setCount(count + 1) // equivalent to count = count+1
    // alert(count)
  }

  return (
    <>

      <div className="container">

        <h2> {count} </h2>
        <button className="btn" onClick={increment} > Increment by 1      </button>

      </div>

    </>
  )
}

