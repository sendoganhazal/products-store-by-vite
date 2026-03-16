import { Outlet } from "react-router-dom";
import Header from "./components/organisms/Header";
import { CartProvider } from "./lib/context/CartContext";
import "./index.css"

const Layout = () => {
  return (
    <CartProvider>
      <Header/>

      <main>
        <Outlet />
      </main>

      <footer>© 2026</footer>
    </CartProvider>
  );
};

export default Layout;
