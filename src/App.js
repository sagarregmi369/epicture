import Header from './components/Header'
import Cart from './pages/Cart'
import Photos from './pages/Photos'

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Photos/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>  
    </div>
  );
}

export default App;
