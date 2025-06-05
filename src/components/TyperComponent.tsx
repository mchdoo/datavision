import { TypeAnimation } from "react-type-animation";

const TyperComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Soluciones personalizadas en análisis predictivo para optimizar y hacer crecer tu negocio.",
        1000,
      ]}
      wrapper="p"
      speed={50}
      style={{ fontSize: "1.25rem", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default TyperComponent;
