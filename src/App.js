import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import {Login, Home} from './pages'
import {Register, Create,Edit} from './pages'
function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/edit" element={<Edit />}/>
      </Routes>
    </Router>
   );
}

export default App;