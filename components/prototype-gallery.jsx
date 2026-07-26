"use client";

import { ExternalLink, Maximize2, Monitor, Smartphone, X } from "lucide-react";
import { useEffect, useState } from "react";
import {
  borrowerScreens,
  project,
  sellerScreens,
} from "../lib/site-data";

export function PrototypeGallery() {
  const [surface, setSurface] = useState("borrower");
  const screens = surface === "borrower" ? borrowerScreens : sellerScreens;
  const [activeId, setActiveId] = useState(screens[0].id);
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    const nextScreens =
      surface === "borrower" ? borrowerScreens : sellerScreens;
    setActiveId(nextScreens[0].id);
    setLightbox(false);
  }, [surface]);

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

  const active = screens.find((screen) => screen.id === activeId) || screens[0];
  const prototypeUrl =
    surface === "borrower" ? project.links.borrower : project.links.seller;

  return (
    <div className="prototype-gallery">
      <div className="surface-switch" aria-label="Prototype surface">
        <button
          type="button"
          className={surface === "borrower" ? "active" : ""}
          onClick={() => setSurface("borrower")}
        >
          <Smartphone size={17} aria-hidden="true" />
          Borrower mobile
        </button>
        <button
          type="button"
          className={surface === "seller" ? "active" : ""}
          onClick={() => setSurface("seller")}
        >
          <Monitor size={17} aria-hidden="true" />
          Seller web
        </button>
      </div>

      <div className="screen-switch" role="tablist" aria-label="Prototype screens">
        {screens.map((screen) => (
          <button
            key={screen.id}
            type="button"
            role="tab"
            aria-selected={screen.id === active.id}
            className={screen.id === active.id ? "active" : ""}
            onClick={() => setActiveId(screen.id)}
          >
            {screen.label}
          </button>
        ))}
      </div>

      <div className={`gallery-stage ${surface}`}>
        <div className="gallery-media">
          <button
            type="button"
            className="media-expand"
            aria-label={`Expand ${active.title} screenshot`}
            title="Expand screenshot"
            onClick={() => setLightbox(true)}
          >
            <Maximize2 size={17} aria-hidden="true" />
          </button>
          <img src={active.image} alt={`${active.title} prototype screen`} />
        </div>
        <div className="gallery-note">
          <span className="decision-label">Current decision</span>
          <h3>{active.title}</h3>
          <dl>
            <div>
              <dt>Problem</dt>
              <dd>{active.problem}</dd>
            </div>
            <div>
              <dt>Product decision</dt>
              <dd>{active.decision}</dd>
            </div>
            <div>
              <dt>Measure</dt>
              <dd>{active.metric}</dd>
            </div>
          </dl>
          <a
            className="text-link"
            href={prototypeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Open live {surface} prototype
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        </div>
      </div>

      {lightbox ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} screenshot`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setLightbox(false);
          }}
        >
          <button
            className="lightbox-close"
            type="button"
            aria-label="Close expanded screenshot"
            onClick={() => setLightbox(false)}
          >
            <X size={22} aria-hidden="true" />
          </button>
          <img src={active.image} alt={`${active.title} expanded prototype`} />
        </div>
      ) : null}
    </div>
  );
}
