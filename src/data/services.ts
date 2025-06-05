export type Service = {
  name: string;
  description?: string;
};

export const services: Service[] = [
  {
    name: "Prevención de Pérdida de Clientes (Churn Prediction)",
    description:
      "Anticipamos la pérdida de clientes para ayudarte a tomar decisiones proactivas y aumentar la retención.",
  },
  {
    name: "Optimización de Campañas Publicitarias",
    description:
      "Maximiza el retorno de inversión (ROI) en tus campañas mediante modelos predictivos de segmentación y targeting, diseñados para llegar a tu audiencia ideal.",
  },
  {
    name: "Prevención de Fraude y Gestión de Riesgos",
    description:
      "Implementamos modelos de análisis para detectar transacciones fraudulentas y minimizar riesgos financieros.",
  },
  {
    name: "Optimización de Créditos",
    description: "Mejora de procesos de otorgamiento y gestión de crédito.",
  },
  {
    name: "Predicción de Demanda e Inventario",
    description:
      "Optimizamos la gestión de inventarios, ajustándonos a las demandas específicas de tu sector.",
  },
  {
    name: "Acompañamiento y Capacitación",
    description:
      "Ofrecemos capacitación especializada para equipos, ajustada a las necesidades de tu empresa y sector.",
  },
] as const;
