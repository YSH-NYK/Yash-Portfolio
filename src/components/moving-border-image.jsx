"use client";
import { MovingBorder } from "./ui/moving-border";
import { cn } from "../lib/utils";
// import Image from "next/image";

export default function MovingBorderImage({
  src,
  alt,
  width = 300,
  height = 300,
  borderRadius = "1.75rem",
  containerClassName,
  borderClassName,
  imageClassName,
  duration,
}) {
  return (
    <div
      className={cn("relative overflow-hidden bg-transparent p-[1px]", containerClassName)}
      style={{
        width,
        height,
        borderRadius,
      }}
    >
      <div className="absolute inset-0" style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}>
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-[0.8]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative h-full w-full overflow-hidden border border-slate-800 backdrop-blur-xl",
          imageClassName
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}
