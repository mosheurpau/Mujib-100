import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h2>Mujib 100</h2>
      <ToastContainer />
    </div>
  );
}

export default App;
