"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/AnimatedBeam";
import {
  Database,
  Money,
  MoneyWavy,
  Sparkle,
  User,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import { HyperText } from "./HyperText";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full  bg-white/60 backdrop-blur-md border border-white p-3 shadow-amber-600/20 shadow [&>svg]:size-16 [&>svg]:stroke-primary hover:scale-105 transition-transform",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function BeamDemo({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-[200px] w-full mx-auto items-center justify-center overflow-hidden px-4",
        className
      )}
      ref={containerRef}
    >
      <div className="flex size-full flex-row items-stretch justify-between gap-10 max-w-lg">
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <Icons.input1 />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.input2 />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.input3 />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle
            ref={div6Ref}
            className="size-16 w-fit rounded-xl shadow-xl shadow-orange-500/50"
          >
            <Icons.transform />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle
            ref={div7Ref}
            className="motion-scale-out-150 motion-delay-2000"
          >
            <Icons.output />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
      />
    </div>
  );
}

const Icons = {
  /*************  ✨ Codeium Command ⭐  *************/
  /**
   * Renders a pulsing "DataVision" text or a pulsing Paton logo.
   * @returns {JSX.Element}
   */
  /******  d7fa58fa-d5b6-4816-8ad9-c9d3880e1505  *******/
  transform: () => (
    // <img src="/paton.png" className="scale-[180%] motion-preset-pulse-sm" />
    <HyperText className="line-clamp-1" duration={15000} text="DataVision" />
  ),
  input1: () => <Database />,
  input2: () => <UsersThree />,
  input3: () => <Sparkle />,
  output: () => <MoneyWavy />,
};
