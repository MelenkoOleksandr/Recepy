import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const MainLayout = () => (
  <>
    <Header />
    <main className="container">
      <Outlet />
    </main>
  </>
);

export default MainLayout;
