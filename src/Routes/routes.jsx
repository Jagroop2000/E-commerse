import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AboutUs from "../components/AboutUs/AboutUs";
import Dashboard from "../components/Dashboard/Dashboard";


const RouterScreen =()=>{
    return(
        <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="about-us" element={<AboutUs />} />
        </Routes>
    );
}

export default RouterScreen;