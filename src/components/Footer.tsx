export const Footer = () => {
  return (
    <footer className="h-24 flex flex-col items-center justify-center mb-12 relative">
      <img
        src="/ell2.png"
        alt="ell1"
        className=" absolute -bottom-16 origin-center opacity-50 animate-pulse hue-rotate-60 -scale-y-100"
      />

      <img className="h-24" src="/paton.png" alt="DataVision Insights Logo" />
      <p className="text-fg-muted">
        Copyright {new Date().getFullYear()} DataVision Insights
      </p>
    </footer>
  );
};
