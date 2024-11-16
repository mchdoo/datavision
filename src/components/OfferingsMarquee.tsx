import type { Service } from "@/data/services";
import Marquee from "react-fast-marquee";

export default function OfferingsMarquee() {
  const offerings: Service[] = [
    {
      name: "Análisis Predictivo",
    },
    {
      name: "Análisis Detectivo y Correctivo",
    },
    {
      name: "Evaluación y Detección de Riesgos",
    },
    {
      name: "Modelado Avanzado de Data Science",
    },
    {
      name: "Análisis Bivariado en Relación al Target",
    },
    {
      name: "Visualización de Variables Orientada al Target",
    },
    {
      name: "Capacitaciones en Management, Analítica y Data Science",
    },
  ];
  return (
    <>
      <Marquee
        gradient
        gradientColor="#faebdd"
        gradientWidth={50}
        className="text-sm md:text-lg text-center text-fg-muted pointer-events-none  md:mb-10 absolute mx-auto w-screen left-0  mt-12 md:mt-24 gap-4"
        autoFill
      >
        <p className="inline-flex gap-4">
          {offerings.map((offering) => (
            <span
              key={offering.name}
              className=" border border-white transition-colors hover:text-black bg-white/40 rounded-full p-1 px-4"
            >
              {offering.name}
            </span>
          ))}
        </p>
      </Marquee>
    </>
  );
}
