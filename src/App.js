import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';


function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Login/>}/>
      <Route path="/home" element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
