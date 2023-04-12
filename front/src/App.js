import { useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {

  const [btnCadastrar, setBtnCadastrar] = useState(false);

  return (
    <div>
      <Formulario botao={btnCadastrar}/>
      <Tabela />
    </div>
  );
}

export default App;
