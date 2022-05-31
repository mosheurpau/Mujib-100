import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Pages/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Products from "./Pages/Products/Products";
import Services from "./Pages/Home/Services/Services";
import Client from "./Pages/Client/Client";
import About from "./Pages/About/About";
import NotFoun from "./Pages/Shared/NotFound/NotFound";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="Home" element={<Home></Home>} />
        <Route path="products" element={<Products></Products>} />
        <Route
          path="services"
          element={
            <RequireAuth>
              <Services></Services>
            </RequireAuth>
          }
        />
        <Route
          path="client"
          element={
            <RequireAuth>
              <Client></Client>
            </RequireAuth>
          }
        />
        <Route path="about" element={<About></About>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
