import React from 'react'
import { BrowserRouter as Router , Routes  , Route} from 'react-router-dom'
import Authentication from './components/authentication'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authentication />} />
      </Routes>
    </Router>
  )
}

export default App