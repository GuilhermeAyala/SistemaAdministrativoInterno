import { useMemo } from "react";
import { Colaborador } from "../types/colaborador";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

type Props = {
  colaboradores: Colaborador[];
};

const CORES = ["#1D9E75", "#7F77DD", "#EF9F27", "#D85A30", "#888780", "#378ADD", "#D4537E"];

function Dashboard({ colaboradores }: Props) {
  const total = colaboradores.length;

  const custoMensal = useMemo(
    () => colaboradores.reduce((acc, c) => acc + c.salario, 0),
    [colaboradores]
  );

  const salarioMedio = useMemo(
    () => (total > 0 ? custoMensal / total : 0),
    [custoMensal, total]
  );

  const distribuicaoPorCargo = useMemo(() => {
    const mapa: Record<string, number> = {};
    colaboradores.forEach((c) => {
      mapa[c.cargo] = (mapa[c.cargo] ?? 0) + 1;
    });
    return mapa;
  }, [colaboradores]);

  const cargos = Object.keys(distribuicaoPorCargo);
  const quantidades = cargos.map((c) => distribuicaoPorCargo[c]);

  const formatarReais = (valor: number) =>
    valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  if (total === 0) {
    return <p>Nenhum colaborador cadastrado para exibir o dashboard.</p>;
  }

  return (
    <div>
      <h2>Dashboard</h2>

      {/* Cards de métricas */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "12px", marginBottom: "2rem" }}>
        <div style={{ background: "#f5f5f5", borderRadius: "8px", padding: "1rem" }}>
          <p style={{ fontSize: "12px", color: "#666", margin: "0 0 4px" }}>Total de colaboradores</p>
          <p style={{ fontSize: "24px", fontWeight: 500, margin: 0 }}>{total}</p>
        </div>
        <div style={{ background: "#f5f5f5", borderRadius: "8px", padding: "1rem" }}>
          <p style={{ fontSize: "12px", color: "#666", margin: "0 0 4px" }}>Custo mensal</p>
          <p style={{ fontSize: "24px", fontWeight: 500, margin: 0 }}>{formatarReais(custoMensal)}</p>
        </div>
        <div style={{ background: "#f5f5f5", borderRadius: "8px", padding: "1rem" }}>
          <p style={{ fontSize: "12px", color: "#666", margin: "0 0 4px" }}>Salário médio</p>
          <p style={{ fontSize: "24px", fontWeight: 500, margin: 0 }}>{formatarReais(salarioMedio)}</p>
        </div>
        <div style={{ background: "#f5f5f5", borderRadius: "8px", padding: "1rem" }}>
          <p style={{ fontSize: "12px", color: "#666", margin: "0 0 4px" }}>Cargos distintos</p>
          <p style={{ fontSize: "24px", fontWeight: 500, margin: 0 }}>{cargos.length}</p>
        </div>
      </div>

      <div>
        <h3>Distribuição por cargo</h3>
        <Bar
          data={{
            labels: cargos,
            datasets: [{
              label: "Colaboradores",
              data: quantidades,
              backgroundColor: cargos.map((_, i) => CORES[i % CORES.length]),
              borderRadius: 4,
              borderWidth: 0,
            }],
          }}
          options={{
            responsive: true,
            plugins: { legend: { display: false } },
            scales: {
              x: { grid: { display: false } },
              y: { beginAtZero: true, ticks: { stepSize: 1 } },
            },
          }}
        />
      </div>
    </div>
  );
}

export default Dashboard;