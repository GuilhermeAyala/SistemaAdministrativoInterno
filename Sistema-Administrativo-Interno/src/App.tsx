import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Colaborador } from './types/colaborador';
import LoginForm from './components/LoginForm';
import AdicionarColaborador from './components/AdicionarColaborador';
import TelaAdmin from './components/TelaAdmin';
import './App.css';

function App() {
  const [colaboradores, setColaboradores] = useState<Colaborador[]>([]);
  console.log("App renderizou");

  return (
    <Router>
      <Routes>
          <Route path="/" element={<LoginForm/>} />
          <Route path="/telaAdmin" element={<TelaAdmin colaboradores={colaboradores}/>} />
          <Route path="/adicionarColaborador" element={<AdicionarColaborador colaboradores={colaboradores} setColaboradores={setColaboradores} />} />
      </Routes>
    </Router>
  )
}

export default App
