import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Pages/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="Home" element={<Home></Home>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
