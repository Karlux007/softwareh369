export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>✅ App carregada com sucesso!</h1>
    </div>
  );
}

import React from 'react';

function App() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">H369 - Consulta Homeopática</h1>
      <p className="mb-6">Insere os teus dados para descobrir o teu Reino Homeopático</p>
      
      <form className="space-y-4">
        <input type="text" placeholder="Nome completo" className="border p-2 w-full" />
        <input type="date" className="border p-2 w-full" />
        <input type="text" placeholder="Local de nascimento" className="border p-2 w-full" />
        <select className="border p-2 w-full">
          <option>Masculino</option>
          <option>Feminino</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Consultar</button>
      </form>
    </div>
  );
}

export default App; 

