import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header';
import Shop from './components/Shop';
import AboutUs from './components/AboutUs';
import Recepies from './components/Recepies';
import Reviews from './components/Reviews';
import ProteinCalculator from './components/ProteinCalculator';
import Blog from './components/Blog';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/shop' element={<Shop />} />
      <Route path='/aboutus' element={<AboutUs />} />
      <Route path='/recepies' element={<Recepies />} />
      <Route path='/reviews' element={<Reviews />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/proteinCalculator' element={<ProteinCalculator />} />
    </Routes>
    </>
  );
}

export default App;
