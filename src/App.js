import { Routes, Route } from "react-router-dom";
import Ourproducts from './Ourproducts';
import Ourmeal from './Ourmeal';
import Home from './Home';
import Italian from './Italian'
import American from './American'
import Thai from './Thai'
import Japanese from './Japanese'

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ourproducts" element={<Ourproducts/>} />
          <Route path="/Ourmeal" element={<Ourmeal/>} />
          <Route path="/Ourmeal/Italian" element={<Italian/>} />
          <Route path="/Ourmeal/American" element={<American/>} />
          <Route path="/Ourmeal/Japanese" element={<Japanese/>} />
          <Route path="/Ourmeal/Thai" element={<Thai/>} />
        </Routes> 
    </div>
  );
}
export default App;