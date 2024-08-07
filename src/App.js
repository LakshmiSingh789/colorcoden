import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Shop from './components/Shop';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Recepies from './components/Recepies';
import Reviews from './components/Reviews';
import ProteinCalculator from './components/ProteinCalculator';
import Blog from './components/Blog';
import ProductDetail from './components/ProductDetail';

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <Header />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/recepies' element={<Recepies />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/proteinCalculator' element={<ProteinCalculator />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
