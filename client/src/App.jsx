import React from 'react'
import { BrowserRouter as Router , Routes  , Route} from 'react-router-dom'
import Authentication from './pages/authentication'
import About from './pages/about'
import Contact from './pages/contact'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login-signup" element={<Authentication />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App