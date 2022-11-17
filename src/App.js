import { Route,Routes,Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

import './App.css';

function App() {
  return (
    <> 

     <Routes>
      <Route path='/' element={<Navigate to='/home'/>} replace/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
     </Routes>
    </>
  );
}

export default App;
