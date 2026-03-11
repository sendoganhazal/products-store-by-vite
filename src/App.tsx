import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./Layout";
import { CategoryProvider } from "./lib/context/CategoryContext";
import CategoryProductsPage from "./pages/products/[slug]/page";
import ProductDetailPage from "./pages/product/[id]/page";

function App() {
  return (
    <CategoryProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products/:slug" element={<CategoryProductsPage/>}/>
          <Route path="/product/:id" element={<ProductDetailPage/>}/>
        </Route>
      </Routes>
    </CategoryProvider>
  ) 
}

export default App
