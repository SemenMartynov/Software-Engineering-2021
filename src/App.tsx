import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { NavLink } from './components/NavLink';
import { Main } from './screens/Main';

function App() {
  return (
    <div className='container'>
      <Router>
        <header className='header'>
          <h1>Watch temprerature in location service</h1>
          <div className='linkBlock'>
            <NavLink to='/main'>Main</NavLink>
            <NavLink to='/tracking'>Tracking</NavLink>
          </div>
        </header>
        <main>
          <Routes>
            <Route path='/main' element={<Main />} />
            <Route path='/tracking' element={<>Tracking</>} />
            <Route path='/*' element={<>error</>} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
