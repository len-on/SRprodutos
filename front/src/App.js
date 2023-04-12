import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {

  //useState
  const [btnCadastrar, setBtnCadastrar] = useState(false);
  const [produtos, setProdutos] = useState([]);

  //UseEffect
  useEffect(() =>{
    fetch("http://localhost:8080/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setProdutos(retorno_convertido));
  }, []);

  //Retorno
  return (
    <div>
      <Formulario botao={btnCadastrar}/>
      <Tabela vetor={produtos}/>
    </div>
  );
}

export default App;
