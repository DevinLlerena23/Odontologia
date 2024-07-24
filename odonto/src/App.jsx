
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import Pacientes from './components/Pacientes';




function App() {


  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/Pacientes" element={<Pacientes/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;