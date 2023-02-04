import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from './pages/Register';
import Home from './pages/Home';
import Recepy from "./pages/Recepy";
import Fridge from './pages/Fridge';
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/fridge" element={<Fridge />} />
          <Route path="/recepy" element={<Recepy />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
