import { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Colaborador } from './types/colaborador';
import LoginForm from './components/LoginForm';
import AdicionarColaborador from './components/AdicionarColaborador';
import EditarColaborador from './components/EditarColaborador';
import TelaAdmin from './components/TelaAdmin';
import Dashboard from './components/dashboard';
import './App.css';

function App() {
  const [colaboradores, setColaboradores] = useState<Colaborador[]>(() => {
    const salvo = localStorage.getItem("colaboradores");
    return salvo ? JSON.parse(salvo) : [];
  });

  useEffect(() => {
    localStorage.setItem("colaboradores", JSON.stringify(colaboradores))
  }, [colaboradores]);

  function excluirColaborador(id: number) {
    setColaboradores(prev => prev.filter(c => c.id !== id));
}

  return (
    <Router>
      <Routes>
          <Route path="/" element={<LoginForm/>} />
          <Route path="/telaAdmin" element={<TelaAdmin colaboradores={colaboradores} setColaboradores={setColaboradores} onExcluir={excluirColaborador}/>} />
          <Route path="/adicionarColaborador" element={<AdicionarColaborador colaboradores={colaboradores} setColaboradores={setColaboradores} />} />
          <Route path="/editarColaborador/:id" element={<EditarColaborador colaboradores={colaboradores} setColaboradores={setColaboradores}/>} />
          <Route path='/Dashboard' element={<Dashboard colaboradores={colaboradores} />}/>
      </Routes>
    </Router>
  )
}

export default App
