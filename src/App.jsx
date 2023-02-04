import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Recipy from "./pages/Recipy/Recipy";
import Fridge from "./pages/Fridge";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/fridge" element={<Fridge />} />
          <Route path="/recipy" element={<Recipy />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
