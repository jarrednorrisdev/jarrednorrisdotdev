"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "~/lib/utils";

const variants = {
  initial: {
    backgroundPosition: "0 50%",
  },
  animate: {
    backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
  },
};

const transition = {
  duration: 5,
  repeat: Infinity,
  repeatType: "reverse" as const,
};

const backgroundStyles = cn(
  "absolute inset-0 z-[1] rounded will-change-transform",
  "bg-[radial-gradient(circle_farthest-side_at_0_100%,#ffffff,transparent),radial-gradient(circle_farthest-side_at_100%_0,#e11d48,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#000000,transparent),radial-gradient(circle_farthest-side_at_0_0,#ffffff,#ffffff)]",
);

const animatedBackgroundStyles = cn(
  "absolute inset-0 z-[1] rounded opacity-60 transition duration-500 will-change-transform group-hover:opacity-100",
  "bg-[radial-gradient(circle_farthest-side_at_0_100%,#ffffff,transparent),radial-gradient(circle_farthest-side_at_100%_0,#e11d48,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#000000,transparent),radial-gradient(circle_farthest-side_at_0_0,#ffffff,#ffffff)]",
);

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  backgroundClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  backgroundClassName?: string;
  animate?: boolean;
}) => {
  const motionProps = animate
    ? { variants, initial: "initial", animate: "animate", transition }
    : {};

  return (
    <div className={cn("group relative p-1", containerClassName)}>
      <motion.div
        {...motionProps}
        style={animate ? { backgroundSize: "400% 400%" } : undefined}
        className={cn(animatedBackgroundStyles, backgroundClassName)}
      />
      <motion.div
        {...motionProps}
        style={animate ? { backgroundSize: "400% 400%" } : undefined}
        className={cn(backgroundStyles, backgroundClassName)}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
