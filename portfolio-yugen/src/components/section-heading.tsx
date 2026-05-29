import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : ""
      )}
    >
      {eyebrow ? (
        <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-white/46">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold leading-[0.92] tracking-[-0.045em] text-white md:text-5xl lg:text-[3.35rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 text-base leading-relaxed text-white/64 md:max-w-2xl md:text-[1.12rem]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
