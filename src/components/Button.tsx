import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

const buttonVariants = cva(
  [
    "py-1.5 px-4 text-lg rounded relative min-h-12 w-fit inline-flex items-center gap-2 cursor-pointer justify-center",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-t from-primary to-amber-700   ring-1 transition-shadow hover:shadow-inner hover:shadow-amber-600  ring-amber-800 text-bg",
        ghost: "text-primary bg-transparent",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  arrow?: boolean;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, variant, ...props }, ref) => {
    return (
      <motion.button
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => props.onClick}
        className={twMerge(buttonVariants({ variant, className }))}
        ref={ref}
      >
        {props.children}
        {props.arrow && <ArrowRight weight="bold" />}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
