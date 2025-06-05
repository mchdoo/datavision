import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/data/services";
import { useState } from "react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export default function ServiceCards() {
  let [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 relative">
      {services.map((service, i) => (
        <div key={service.name}>
          <motion.div
            layoutId={`service-${i}`}
            onClick={() => setSelectedService(i)}
            className="z-0 bg-white relative aspect-video md:aspect-square p-6  break-inside-avoid-column rounded-xl prose group"
          >
            <img
              src="/ell2.png"
              alt="ell1"
              className="pointer-events-none absolute top-0 hue-rotate-180 scale-150 origin-top opacity-0 group-hover:opacity-30 transition-opacity"
            />

            <p className="m-0 font-mono text-xs">({i + 1}).</p>
            <h5 className="text-2xl opacity-80 group-hover:opacity-100">
              {service.name}
            </h5>
            <div className="absolute inset-0 overflow-hidden ">
              <img
                src={`/graphics/0${i + 1}.png`}
                width={200}
                height={200}
                className="opacity-50 -z-10 absolute -bottom-12 right-2 grayscale group-hover:-translate-y-5 group-hover:grayscale-0 transition-all"
                alt="graphic"
              />
            </div>
          </motion.div>

          <AnimatePresence mode="sync">
            {selectedService == i && (
              <motion.div
                layoutRoot
                onClick={() => setSelectedService(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className=" bg-black/40 fixed inset-0 z-[100] grid place-items-center"
              >
                <motion.div
                  layoutId={`service-${selectedService}`}
                  exit={{ opacity: 0 }}
                  className="shadow-xl relative m-4 bg-white aspect-square p-6  break-inside-avoid-column rounded-xl prose font-rubik flex flex-col justify-between"
                >
                  <h5 className="text-4xl font-rubik ">
                    {services[selectedService].name}
                  </h5>
                  <div className="absolute inset-0 overflow-hidden ">
                    <img
                      src={`/graphics/0${i + 1}.png`}
                      width={350}
                      className="aspect-auto absolute right-4 top-14 motion-preset-slide-up-md motion-delay-300"
                      alt="graphic"
                    />
                  </div>
                  <p className="text-2xl text-fg-muted z-10 mb-0">
                    <ArrowRight size={32} className="mb-4" />
                    {services[selectedService].description}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/80 rounded-xl"></div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
