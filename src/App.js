import Layout from './components/Layout';
import ClientesAssociados from './pages/ClientesAssociados';
import Dashboard from './pages/Dashboard';
import DetalhesFilial from './pages/DetalhesFilial';
import PedidosCancelados from './pages/PedidosCancelados';
import FAQ from './pages/FAQ';
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
        <Route path="detalhes-filial" element={<DetalhesFilial />} />
        <Route path="pedidos-cancelados" element={<PedidosCancelados />} />
        <Route path="FAQ" element={<FAQ />} />
        
      </Route>
    </Routes>
  );
};

export default App;