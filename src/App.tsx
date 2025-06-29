import { useState } from 'react';
import { calcularReinoPessoal, corDoReino } from './utils/reinoPessoal';

export default function App() {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [local, setLocal] = useState('');
  const [sexo, setSexo] = useState('');
  const [reino, setReino] = useState(null);

  const handleConsulta = () => {
    if (!data || !data.includes('-')) {
      setReino(null);
      return;
    }

    const partes = data.split('-'); // yyyy-mm-dd
    if (partes.length !== 3) {
      setReino(null);
      return;
    }

    const ano = Number(partes[0]);
    const mes = Number(partes[1]);
    const dia = Number(partes[2]);

    const resultado = calcularReinoPessoal(dia, mes);
    console.log("🔎 Data:", data, "→ dia:", dia, "mes:", mes, "→ Reino:", resultado);
    setReino(resultado);
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>H369 – Consulta Homeopática</h1>
      <p>Insere os teus dados para descobrir o teu Reino Homeopático</p>

      <input
        type="text"
        placeholder="Nome completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        style={{ margin: '5px' }}
      />

      <input
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
        style={{ margin: '5px' }}
      />

      <input
        type="text"
        placeholder="Local de nascimento"
        value={local}
        onChange={(e) => setLocal(e.target.value)}
        style={{ margin: '5px' }}
      />

      <select
        value={sexo}
        onChange={(e) => setSexo(e.target.value)}
        style={{ margin: '5px' }}
      >
        <option value="">Seleciona o sexo</option>
        <option value="Masculino">Masculino</option>
        <option value="Feminino">Feminino</option>
      </select>

      <button onClick={handleConsulta} style={{ margin: '5px' }}>
        Consultar
      </button>

      {reino !== null ? (
        <p style={{ color: corDoReino(reino) }}>
          Resultado: Reino <strong>{reino}</strong> para {nome}, nascido em {local}, sexo {sexo}.
        </p>
      ) : (
        <p style={{ color: 'red' }}>⚠️ Nenhum Reino encontrado para esta data.</p>
      )}
    </div>
  );
}
