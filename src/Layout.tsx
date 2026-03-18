import { Outlet } from "react-router-dom";
import Header from "./components/organisms/Header";
import { CartProvider } from "./lib/context/CartContext";
import "./index.css"
import Footer from "./components/organisms/Footer";

const Layout = () => {
  return (
    <CartProvider>
      <Header/>

      <main>
        <Outlet />
      </main>

      <Footer/>
    </CartProvider>
  );
};

export default Layout;
