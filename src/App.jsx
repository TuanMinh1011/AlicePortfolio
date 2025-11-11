import React from 'react'
import './App.css'
import HomePage from './components/HomePage'
import GameDetail from './components/GameDetail'
import TeamDetail from './components/TeamDetail'

function useHashRoute() {
  const [hash, setHash] = React.useState(window.location.hash || '#/')

  React.useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || '#/')
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return hash
}

function App() {
  const hash = useHashRoute()
  const isGameDetail = /^#\/games\/\d+/.test(hash)
  const isTeamDetail = /^#\/team\/\d+/.test(hash)

  return (
    <div className="App">
      {isGameDetail ? <GameDetail /> : isTeamDetail ? <TeamDetail /> : <HomePage />}
    </div>
  )
}

export default App

