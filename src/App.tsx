import { useState } from "react";
import { calcularReinoPessoal } from "./utils/reinoPessoal";

export default function App() {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [local, setLocal] = useState("");
  const [sexo, setSexo] = useState("");
  const [reino, setReino] = useState<string | null>(null);

  const handleConsulta = () => {
    if (!data) return;

    const partes = data.split("-");
    const ano = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10);
    const dia = parseInt(partes[2], 10);

    const resultado = calcularReinoPessoal(dia, mes);
    setReino(resultado);
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>H369 - Consulta Homeopática</h1>
      <p>Insere os teus dados para descobrir o teu Reino Homeopático</p>

      <input
        type="text"
        placeholder="Nome completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        style={{ margin: "5px" }}
      />

      <input
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
        style={{ margin: "5px" }}
      />

      <input
        type="text"
        placeholder="Local de nascimento"
        value={local}
        onChange={(e) => setLocal(e.target.value)}
        style={{ margin: "5px" }}
      />

      <select
        value={sexo}
        onChange={(e) => setSexo(e.target.value)}
        style={{ margin: "5px" }}
      >
        <option value="">Seleciona o sexo</option>
        <option value="Masculino">Masculino</option>
        <option value="Feminino">Feminino</option>
      </select>

      <button onClick={handleConsulta} style={{ margin: "5px" }}>
        Consultar
      </button>

      {reino && (
        <div style={{ marginTop: "2rem", fontSize: "1.2rem" }}>
          <strong>O teu Reino é:</strong> {reino}
        </div>
      )}
    </div>
  );
}
