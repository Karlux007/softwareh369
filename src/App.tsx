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
      if (!nome || !data) return `${id |
