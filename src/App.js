import Home from './Components/Home/Home';
import CartContent from './Components/CartContent/CartContent';
import DataProvider from './Components/Context/DataContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<CartContent />} />
        </Routes>
      </BrowserRouter>
      </DataProvider>
  )
  
}

export default App;
