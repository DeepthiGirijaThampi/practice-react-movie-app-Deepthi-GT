import { useState } from 'react'

import './App.css'
import MovieSelector from './components/MovieSelector'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MovieSelector></MovieSelector>
    </>
  )
}

export default App
