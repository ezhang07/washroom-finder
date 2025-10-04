import { useState } from 'react'
import './App.css'
import Maplibre from './component/maplibre'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Vancouver Washroom Finder</h1>
      </header>
      <main>
        <div id="map" style={{ height: '100vh', width: '100%' }}>
          <Maplibre />
        </div>
      </main>
    </>
  )
}

export default App