import { useState } from "react";
import { tabelaReinosPessoais } from "./utils/tabelaReinosPessoais";

function calcularReinoPessoal(dia: number, mes: number): string {
  const chave = `${dia.toString().padStart(2, "0")}-${mes.toString().padStart(2, "0")}`;
  return tabelaReinosPessoais[chave] || "Desconhecido";
}

function calcularReinoImaterial(nome: string): string {
  const valor = nome.length % 3;
  return valor === 0 ? "Mineral" : valor === 1 ? "Animal" : "Vegetal";
}

function calcularReinoDoNome(nome: string): string {
  const total = nome
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const mod = total % 3;
  return mod === 0 ? "Vegetal" : mod === 1 ? "Mineral" : "Animal";
}

export default function App() {
  const [entradas, setEntradas] = useState(
    Array.from({ length: 11 }, () => ({ nome: "", data: "", id: "" }))
  );
  const [resultados, setResultados] = useState<string[]>([]);

  const handleChange = (index: number, campo: string, valor: string) => {
    const novas = [...entradas];
    novas[index][campo] = valor;
    setEntradas(novas);
  };

  const calcular = () => {
    const res = entradas.map((entrada, i) => {
      const nome = entrada.nome.trim();
      const data = entrada.data.trim();
      const id = entrada.id.trim();
      if (!nome || !data) return `${id || "(sem identificação)"}: Dados incompletos.`;

      const [ano, mes, dia] = data.split("-").map(Number); // yyyy-mm-dd
      const reinoDoNome = calcularReinoDoNome(nome);

      if (i === 10) {
        return `${id || "(Bloco 11)"}: Reino do Nome: ${reinoDoNome}`;
      } else {
        const reinoPessoal = calcularReinoPessoal(dia, mes);
        const reinoImaterial = calcularReinoImaterial(nome);
        return `${id || "(Bloco " + (i + 1) + ")"}: Reino Pessoal: ${reinoPessoal}, Reino Imaterial: ${reinoImaterial}, Reino do Nome: ${reinoDoNome}`;
      }
    });

    setResultados(res);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Consulta Reinos H369</h1>
      {entradas.map((entrada, i) => (
        <div key={i} className="mb-4 border-b pb-2">
          <input
            type="text"
            placeholder="Identificação (ex: eu, filho...)"
            value={entrada.id}
            onChange={(e) => handleChange(i, "id", e.target.value)}
            className="border p-2 m-1"
          />
          <input
            type="text"
            placeholder="Nome completo"
            value={entrada.nome}
            onChange={(e) => handleChange(i, "nome", e.target.value)}
            className="border p-2 m-1"
          />
          <input
            type="date"
            value={entrada.data}
            onChange={(e) => handleChange(i, "data", e.target.value)}
            className="border p-2 m-1"
          />
        </div>
      ))}

      <button
        onClick={calcular}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Consultar
      </button>

      <div className="mt-6 whitespace-pre-wrap">
        {resultados.map((res, i) => (
          <p key={i}>{res}</p>
        ))}
      </div>
    </div>
  );
}
