import './App.css';
import Request from './Request';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Ourmeal from './Ourmeal';
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Request" element={<Request/>} />
        <Route path="/Ourmeal" element={<Ourmeal/>} />
      </Routes> 
    </div>
  );
}

export default App;
