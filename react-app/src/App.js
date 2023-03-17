import './App.css';
import Cart from './components/pages/Cart';
import HomeSection from './components/pages/Home/index'
import Login from './components/pages/Login/index'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Add from './components/pages/Add';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/' element={<HomeSection/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/add' element={<Add/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
