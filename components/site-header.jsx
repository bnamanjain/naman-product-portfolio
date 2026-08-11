"use client";

import { Download, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { site } from "../lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a href="/" className="brand" aria-label="Naman Jain home">
          <span className="brand-mark" aria-hidden="true">
            NJ
          </span>
          <span className="brand-copy">
            <strong>Naman Jain</strong>
            <span>Product Manager</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="/#about">About</a>
          <a href="/#experience">Experience</a>
          <a href="/#work">Projects</a>
          <a href="/blog">Blog</a>
          <a href={site.resume} download>
            <Download size={16} aria-hidden="true" />
            Resume
          </a>
          <a className="header-contact" href={`mailto:${site.email}`}>
            <Mail size={16} aria-hidden="true" />
            Contact
          </a>
        </nav>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open ? (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="/#about" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="/#experience" onClick={() => setOpen(false)}>
            Experience
          </a>
          <a href="/#work" onClick={() => setOpen(false)}>
            Projects
          </a>
          <a href="/blog" onClick={() => setOpen(false)}>
            Blog
          </a>
          <a href={site.resume} download>
            Resume
          </a>
          <a href={`mailto:${site.email}`}>Contact</a>
        </nav>
      ) : null}
    </header>
  );
}
