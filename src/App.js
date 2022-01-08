import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import NewEntryForm from "./components/NewEntryForm";
import DailyInput from "./pages/DailyInput";
import HomePage from './pages/HomePage';
import InputOne from "./pages/InputOne";
import Login from './pages/Login';
import {PastryProvider} from './context/pastryContext'


function App() {
  return (
    <PastryProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/dailyinput" element={<DailyInput/>}/>
      <Route path="/dailyinput/1" element={<InputOne/>}/>
      <Route path="//dailyinput/1/new" element={<NewEntryForm/>}/>
    </Routes>
    </BrowserRouter>
    </PastryProvider>
  );
}

export default App;
