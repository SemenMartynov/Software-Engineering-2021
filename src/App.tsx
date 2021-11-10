import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { NavLink } from './components/NavLink';
import { Spinner } from './components/Spinner';
import Main from './screens/Main';
import Tracking from './screens/Tracking';
import store from './store';

function App() {
  useEffect(() => {
    store.initializeLocations();
  }, []);
  if (!store.initialized) {
    return (
      <div className='FullPageSpinner'>
        <Spinner size={10} />
      </div>
    );
  }
  return (
    <div className='container'>
      <Router>
        <header className='header'>
          <h1>Watch temperature in location service</h1>
          <div className='linkBlock'>
            <NavLink to='/main'>Main</NavLink>
            <NavLink to='/tracking'>
              Tracking{' '}
              <div className='trackingNumber'>{store.locations.length}</div>
            </NavLink>
          </div>
        </header>
        <main className='main'>
          <Routes>
            <Route path='/main' element={<Main />} />
            <Route path='/tracking' element={<Tracking />} />
            <Route path='/*' element={<>error</>} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default observer(App);
