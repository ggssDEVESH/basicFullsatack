import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  const getJokes = async () => {
    try{
      const response  = await fetch('/api/jokes')
      const data = await response.json()
      setJokes(data)
    }
    catch{
      console.log("error")
    }
  }

  useEffect(() => {
    getJokes()
  },[])

  return (
    <>
      <h2>front end</h2>
      <h4>Number Of Jokes: {jokes.length}</h4>
      <div>
        {
          jokes.map((joke) => (
            <div key={joke.id}>
              <h4>{joke.type}</h4>
              <p>{joke.joke}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
