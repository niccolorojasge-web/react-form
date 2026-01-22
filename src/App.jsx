import { useState } from 'react'


function App() {
  const [write, setWrite] = useState("")
  const formSend = event => {
    event.preventDefault();
    
  }


  return (
    <>
      <form onSubmit={formSend} action="">
        <input type="text"
          id="titolo"
          value={write}
          placeholder='inserisci articoli del blog'
          onChange={e => { setWrite(e.target.value) }}
        />
        <p>{write}</p>
        <button>invia</button>
      </form>
    </>
  )
}

export default App
