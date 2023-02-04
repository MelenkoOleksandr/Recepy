import { Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home/Home";
import Recipy from "./pages/Recipy";
import Fridge from "./pages/Fridge/Fridge";
import Header from "./components/Header/Header";
import Profile from "./pages/Profile/Profile";

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
          <Route path="/recipy/:id" element={<Recipy />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
