import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Home from './frontend/components/Home';
import Navbar from './frontend/components/Navbar';
import Cart from './frontend/components/Cart';
import NotFound from './frontend/components/NotFound';
import './App.css';


function App() {
  return (
    <div className="App">
        
      <BrowserRouter>
      <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
         <Route path='/cart' element={<Cart />} />
         <Route path='/NotFound' element={<NotFound />} />
         <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
