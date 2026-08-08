"use client";

import { useEffect, useState } from "react";
import { caseNav } from "../lib/site-data";

export function CaseNav({ items = caseNav }) {
  const [active, setActive] = useState(items[0]?.[0] || "brief");

  useEffect(() => {
    const sections = items
      .map(([id]) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-22% 0px -66% 0px", threshold: [0, 0.25, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="case-nav" aria-label="Case study sections">
      <div className="shell case-nav-inner">
        {items.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? "active" : ""}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
