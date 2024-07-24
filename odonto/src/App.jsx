
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import Pacientes from './components/Pacientes';
import Navbar from "./components/Navbar";



function App() {


  return (
  
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/pacientes" element={<Pacientes/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;