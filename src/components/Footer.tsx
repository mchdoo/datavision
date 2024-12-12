import { Envelope, PhoneCall as Phone } from "@phosphor-icons/react/dist/ssr";
export const Footer = () => {
  return (
    <footer className="h-24 flex flex-col items-center justify-center mb-12 relative text-sm">
      {/* <div className=" min-h-96 bg-white/50 border-y border-white w-full flex flex-col items-center justify-center ">
        <h2 className="text-4xl">Contact</h2>
        <p className="text-fg-muted text-sm mb-4 mt-2">
          Or contact us yourself at
        </p>
        <span className="inline-flex gap-1 items-center">
          <Envelope />
          <a>sebastianvonvergen@gmail.com</a>
        </span>
        <span className="inline-flex gap-1 items-center">
          <Phone />
          <a> +54 9 11 3192-8889</a>
        </span>
      </div> */}

      <img
        src="/ell2.png"
        alt="ell1"
        className=" absolute -bottom-16 origin-center opacity-50 animate-pulse  -scale-y-100"
      />

      <img className="h-24" src="/paton.png" alt="DataVision Insights Logo" />
      <p className="text-fg-muted text-center">
        Copyright {new Date().getFullYear()} DataVision Insights. <br />
        All rights reserved.
      </p>
    </footer>
  );
};
