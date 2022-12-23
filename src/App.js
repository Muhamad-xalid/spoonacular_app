import { Routes, Route } from "react-router-dom";
import Ourproducts from './Ourproducts';
import Ourmeal from './Ourmeal';
import Home from './Home';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ourproducts" element={<Ourproducts/>} />
          <Route path="/Ourmeal" element={<Ourmeal/>} />
        </Routes> 
    </div>
  );
}
export default App;