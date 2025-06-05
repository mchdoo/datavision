import {
  Chats,
  DiceOne,
  Megaphone,
  Stack,
  Translate,
} from "@phosphor-icons/react/dist/ssr";
import { signal } from "@preact/signals-react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { Dock, DockIcon } from "./Dock";

export const currentLocale = signal("es");

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const nav: Variants = {
    initial: { y: -80 },
    visible: {
      y: 0,
      transition: {
        duration: 1,
        type: "spring",
      },
    },
  };

  const menu: Variants = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        delayChildren: 1,
      },
    },
    visible: {
      zIndex: 40,
      height: "auto",
      y: 16,
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const menuItem: Variants = {
    hidden: {
      y: -5,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const locales = [
    { value: "en", label: "English" },
    { value: "es", label: "Español" },
    { value: "it", label: "Italiano" },
    { value: "de", label: "Deutsch" },
    { value: "fr", label: "Français" },
  ];

  return (
    <motion.nav
      initial={{
        y: -80,
      }}
      transition={{ duration: 1, type: "spring", stiffness: 500, damping: 100 }}
      style={{
        left: "50%",
        x: "-50%",
      }}
      variants={nav}
      // initial="initial"s
      animate="visible"
      id={"navbar"}
      className="z-[100] hover:shadow-xl transition-colors fixed top-[calc(--nav-height / 2)]"
    >
      <Dock
        direction="middle"
        className="border-none  border mt-0 bg-white/70 backdrop-blur-md shadow"
      >
        <DockIcon tooltip="Intro">
          <a href="/#intro">
            <DiceOne />
          </a>
        </DockIcon>
        <DockIcon tooltip="Servicios">
          <a href="/#focus">
            <Stack />
          </a>
        </DockIcon>
        <DockIcon tooltip="Contacto">
          <a href="/#contact">
            <Chats />
          </a>
        </DockIcon>
        <DockIcon tooltip="Blog">
          <a href="/blog">
            <Megaphone />
          </a>
        </DockIcon>
      </Dock>
    </motion.nav>
  );
}

// <DropdownMenu.Root open={open} onOpenChange={setOpen}>
//   {/* <HouseSimple /> */}
//   <span className="select-none mr-8 opacity-50 inline-flex items-center gap-2">
//     <img src="/favicon.svg" alt="DataVision" className="size-[16px]" />
//     DataVision{" "}
//   </span>
//   <DropdownMenu.Trigger className="p-2 box-content rounded inline-flex outline-none">
//     <Translate className="cursor-pointer pointer-events-auto" />
//     <p className="text-xs">({currentLocale.value})</p>
//   </DropdownMenu.Trigger>
//   <AnimatePresence>
//     {open && (
//       <DropdownMenu.Portal forceMount>
//         <DropdownMenu.Content asChild>
//           <motion.div
//             variants={menu}
//             initial="hidden"
//             animate="visible"
//             style={{ height: "auto", zIndex: 50 }}
//             exit="hidden"
//             className=" overflow-hidden rounded bg-white/70 backdrop-blur-md border border-white p-2 grid grid-cols-2 gap-2"
//           >
//             {locales.map((locale) => (
//               <DropdownMenu.Item asChild>
//                 <motion.div
//                   key={locale.value}
//                   className={`transition-colors cursor-pointer text-sm  outline-none p-1 px-2 rounded-[0.5rem] inline-flex items-center hover:bg-white ${
//                     currentLocale.value === locale.value
//                       ? "bg-white text-black"
//                       : "text-gray-400"
//                   }`}
//                   onClick={(e) => {
//                     currentLocale.value = locale.value;
//                   }}
//                   variants={menuItem}
//                 >
//                   <span className="mr-2">{locale.label}</span>
//                   <motion.span
//                     className={`size-1 ml-auto rounded-full ${
//                       currentLocale.value === locale.value
//                         ? "bg-emerald-500"
//                         : "bg-gray-300"
//                     }`}
//                   ></motion.span>
//                 </motion.div>
//               </DropdownMenu.Item>
//             ))}
//           </motion.div>
//         </DropdownMenu.Content>
//       </DropdownMenu.Portal>
//     )}
//   </AnimatePresence>
// </DropdownMenu.Root>
