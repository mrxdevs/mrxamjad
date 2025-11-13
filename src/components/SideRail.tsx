type Props = {
  label: string;
  side: "left" | "right";
};

export default function SideRail({ label, side }: Props) {
  const align = side === "left" ? "left-3" : "right-3";
  return (
    <aside
      className={`pointer-events-none fixed top-24 ${align} z-30 hidden md:block`}
      aria-hidden
    >
      <div className="flex items-center gap-2">
        {side === "left" && <span className="rail-dot" />}
        <div className="rail">
          <span className="rail-text">{label}</span>
        </div>
        {side === "right" && <span className="rail-dot" />}
      </div>
    </aside>
  );
}

