import Layout from './components/Layout';
import ClientesAssociados from './pages/ClientesAssociados';
import Dashboard from './pages/Dashboard';
import DetalhesFilial from './pages/DetalhesFilial';
import FAQ from './pages/FAQ';
import Perguntas from './pages/Perguntas';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
      <Pages />
  );
};

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >

        <Route path="" element={<Dashboard />} />
        <Route path="clientes-associados" element={<ClientesAssociados />} />
        <Route path="detalhes-da-filial" element={<DetalhesFilial />} />
        <Route path="FAQ" element={<FAQ />} />
        <Route path="Perguntas" element={<Perguntas />} />
  
        
      </Route>
    </Routes>
  );
};

export default App;