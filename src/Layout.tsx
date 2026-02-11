import { Outlet } from "react-router-dom";
import Header from "./components/organisms/Header";

const Layout = () => {
  return (
    <>
      <Header/>

      <main>
        <Outlet />
      </main>

      <footer>© 2026</footer>
    </>
  );
};

export default Layout;
