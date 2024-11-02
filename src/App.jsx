import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const JokeAPI = window.JokeAPI || require('sv443-joke-api');

function App() {
  const [count, setCount] = useState(0)
  const [joke, setJoke] = useState("")

  const getjoke = () => {
    JokeAPI.getJokes({
      jokeType: "single",
    })
      .then((r) => r.json())
      .then((data) => {
        setJoke(data.joke);
      });
  }
  

  return (
    <div id='main'>
      <div style={{display:'flex',justifyContent:'center',flexDirection:'row'}}>
        <div style={{display:'flex',flexDirection:'column',fontSize:'300%',alignItems:'center',margin:'10%',color:'white'}}>
          <div style={{display:'flex',flexDirection:'row',color:'black',fontSize:'100%'}}>
            <span>Joke Generator</span>
            <button onClick={getjoke} style={{margin:'10%',borderRadius:'10px',width:'50%',height:'50%'}}>Get Joke</button>
          </div>
          <div >
            <span style={{fontSize:'50%'}}>{joke}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

