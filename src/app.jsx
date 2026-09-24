import React from 'react';

function Saudacao(props) {
  return (
    <h1>Olá, {props.nome}!</h1>
  );
}

function App() {
  return (
    <div>
      <Saudacao nome="gfrg54" />
    </div>
  );
}

export default App;