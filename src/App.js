import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Modal from "./components/Modal";
import DailyInput from "./pages/DailyInput";
import HomePage from './pages/HomePage';
import Login from './pages/Login';


function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Modal />
}/>
      {/* <Route path="/home" element={<HomePage/>}/>
      <Route path="/dailyinput" element={<DailyInput/>}/> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
