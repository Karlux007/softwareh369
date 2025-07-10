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

    <button
      onClick={() => {
        console.log("Botão foi clicado");
        handleConsulta();
      }}
      style={{ margin: "5px" }}
    >
      Consultar
    </button>

    {reino && (
      <div style={{ marginTop: "2rem", fontSize: "1.2rem" }}>
        Resultado simulado para <strong>{nome}</strong>, nascido em <strong>{local}</strong>, sexo <strong>{sexo}</strong><br />
        <strong>Reino Homeopático:</strong> {reino}
      </div>
    )}
  </div>
);
