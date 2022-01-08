import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import NewEntryForm from "./components/NewEntryForm";
import DailyInput from "./pages/DailyInput";
import HomePage from './pages/HomePage';
import InputOne from "./pages/InputOne";
import Login from './pages/Login';
import {PastryProvider} from './context/pastryContext'
import { OutletProvider } from "./context/OutletContext";
import InputTwo from "./pages/InputTwo";
import NewEntryFormTwo from "./components/NewEntryFormTwo";
import MyReports from "./pages/MyReports";


function App() {
  return (
    <OutletProvider>
    <PastryProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/dailyinput" element={<DailyInput/>}/>
      <Route path="/dailyinput/1" element={<InputOne/>}/>
      <Route path="/dailyinput/1/new" element={<NewEntryForm/>}/>
      <Route path="/dailyinput/2" element={<InputTwo />}/>
      <Route path="/dailyinput/2/new" element={<NewEntryFormTwo />}/>
      <Route path="/myreports" element={<MyReports />}/>
    </Routes>
    </BrowserRouter>
    </PastryProvider>
    </OutletProvider>
  );
}

export default App;
