import { useState, useEffect } from 'react'
import './App.css'

const JokeAPI = window.JokeAPI || require('sv443-joke-api/dark');

function App() {
  const [count, setCount] = useState(0)
  const [joke, setJoke] = useState("")

  const getjoke = () => {
    JokeAPI.getJokes({
      jokeType: "single"
    })
      .then((r) => r.json())
      .then((data) => {
        setJoke(data.joke);
      });
  }
  

  return (
    <div id='main'>
      <div style={{display:'flex',justifyContent:'center',flexDirection:'row'}}>
        <div style={{display:'flex',flexDirection:'column',fontSize:'300%',alignItems:'center',margin:'5%',color:'white'}}>
          <div style={{display:'flex',color:'black',fontSize:'80%'}}>
            <h4 id='title'>JOKE GENERATOR</h4>
          </div>
          <button onClick={getjoke} id='get_joke'>Click Me !!!</button>
          {joke &&<div id = "joke_box">{joke}</div>}
        </div>
      </div>
    </div>
  )
}

export default App

