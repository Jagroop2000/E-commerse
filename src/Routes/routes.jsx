import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AboutUs from "../components/AboutUs/AboutUs";
import Dashboard from "../components/Dashboard/Dashboard";
import ProductDetail from "../components/SingleProduct/ProductDetail";
import Header from "../components/Navbar/Header";


const RouterScreen =()=>{
    return(
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="about-us" element={<AboutUs />} />
                <Route path="product/:productId" element={<ProductDetail />}  />
            </Routes>
        </>
    );
}

export default RouterScreen;