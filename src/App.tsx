import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Maplibre from './component/maplibre'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<<<<<<< Updated upstream
      <header>
        <h1>Vancouver Washroom Finder</h1>
      </header>
      <main>
        <div id="map" style={{ height: '100h', width: '100%' }}>
          <Maplibre />
        </div>
      </main>
=======
      <div>
        <button type="button">Click Me!</button>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Washroom Finder</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>

      </div>

>>>>>>> Stashed changes
    </>
  )
}

export default App