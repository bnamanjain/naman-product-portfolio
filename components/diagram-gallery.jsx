"use client";

import { ExternalLink, Maximize2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { diagrams, project } from "../lib/site-data";

export function DiagramGallery() {
  const [activeId, setActiveId] = useState(diagrams[0].id);
  const [lightbox, setLightbox] = useState(false);
  const active =
    diagrams.find((diagram) => diagram.id === activeId) || diagrams[0];

  useEffect(() => {
    if (!lightbox) return undefined;
    const close = (event) => {
      if (event.key === "Escape") setLightbox(false);
    };
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", close);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", close);
    };
  }, [lightbox]);

  return (
    <div className="diagram-gallery">
      <div className="diagram-tabs" role="tablist" aria-label="System diagrams">
        {diagrams.map((diagram) => (
          <button
            key={diagram.id}
            type="button"
            role="tab"
            aria-selected={diagram.id === active.id}
            className={diagram.id === active.id ? "active" : ""}
            onClick={() => setActiveId(diagram.id)}
          >
            {diagram.label}
          </button>
        ))}
      </div>
      <div className="diagram-stage">
        <button
          type="button"
          className="media-expand"
          aria-label={`Expand ${active.title} diagram`}
          title="Expand diagram"
          onClick={() => setLightbox(true)}
        >
          <Maximize2 size={17} aria-hidden="true" />
        </button>
        <img src={active.image} alt={`${active.title} system diagram`} />
      </div>
      <div className="diagram-caption">
        <div>
          <span className="decision-label">Architecture view</span>
          <h3>{active.title}</h3>
          <p>{active.summary}</p>
        </div>
        <a
          className="text-link"
          href={project.links.technical}
          target="_blank"
          rel="noreferrer"
        >
          Read full technical deep dive
          <ExternalLink size={16} aria-hidden="true" />
        </a>
      </div>

      {lightbox ? (
        <div
          className="lightbox diagram-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} diagram`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setLightbox(false);
          }}
        >
          <button
            className="lightbox-close"
            type="button"
            aria-label="Close expanded diagram"
            onClick={() => setLightbox(false)}
          >
            <X size={22} aria-hidden="true" />
          </button>
          <img src={active.image} alt={`${active.title} expanded diagram`} />
        </div>
      ) : null}
    </div>
  );
}
