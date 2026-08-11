"use client";

import { BellRing, Check, Mic, PhoneOff, Video } from "lucide-react";
import { useEffect, useState } from "react";

const START_SECONDS = 60;

export function HandshakePrototype() {
  const [scenario, setScenario] = useState("pending");
  const [open, setOpen] = useState(true);
  const [remaining, setRemaining] = useState(START_SECONDS);

  useEffect(() => {
    if (!open || scenario !== "submitted" || remaining <= 0) return undefined;
    const timer = window.setInterval(
      () => setRemaining((value) => Math.max(0, value - 1)),
      1000,
    );
    return () => window.clearInterval(timer);
  }, [open, scenario, remaining]);

  function showPending() {
    setScenario("pending");
    setRemaining(START_SECONDS);
    setOpen(true);
  }

  function submitRx() {
    setScenario("submitted");
    setRemaining(START_SECONDS);
    setOpen(true);
  }

  function showJoined() {
    setScenario("joined");
    setOpen(true);
  }

  const submitted = scenario === "submitted";
  const joined = scenario === "joined";
  const timedOut = submitted && remaining === 0;

  return (
    <div className="handshake-prototype">
      <div className="handshake-scenario-switch" aria-label="Prototype scenario">
        <button
          className={scenario === "pending" ? "active" : ""}
          type="button"
          onClick={showPending}
        >
          1 · Rx not submitted
        </button>
        <button
          className={submitted ? "active" : ""}
          type="button"
          onClick={submitRx}
        >
          2 · Agent pending
        </button>
        <button
          className={joined ? "active" : ""}
          type="button"
          onClick={showJoined}
        >
          3 · Handshake complete
        </button>
      </div>

      <div className="handshake-call-shell">
        <div className="handshake-call-topbar">
          <div className="handshake-patient-chip">
            <span>P</span>
            <div>
              <strong>Patient video follow-up</strong>
              <small>Offline onboarded · first online repeat consultation</small>
            </div>
          </div>
          <span className="handshake-live-pill">Live call · 18:42</span>
        </div>

        <div className="handshake-video-grid">
          <div className="handshake-video patient-view">
            <span className="handshake-person">AS</span>
            <small>Patient</small>
          </div>
          <div className="handshake-video doctor-view">
            <span className="handshake-person">DR</span>
            <small>Doctor</small>
          </div>
          {joined ? (
            <div className="handshake-agent-joined">
              <Check size={16} aria-hidden="true" />
              Care agent joined · doctor can introduce and leave
            </div>
          ) : null}
        </div>

        <div className="handshake-call-actions">
          <button type="button" aria-label="Mute microphone">
            <Mic size={18} aria-hidden="true" />
          </button>
          <button type="button" aria-label="Turn off camera">
            <Video size={18} aria-hidden="true" />
          </button>
          <button
            className="end"
            type="button"
            aria-label="End call"
            onClick={() => setOpen(true)}
          >
            <PhoneOff size={18} aria-hidden="true" />
          </button>
        </div>

        {open && !joined ? (
          <div className="handshake-overlay">
            <section
              className="handshake-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="handshake-modal-title"
            >
              <button
                className="handshake-close"
                type="button"
                aria-label="Close popup"
                onClick={() => setOpen(false)}
              >
                ×
              </button>

              <div className="handshake-modal-title-row">
                <span><BellRing size={19} aria-hidden="true" /></span>
                <div>
                  <small>Complete the Rx handshake</small>
                  <h3 id="handshake-modal-title">
                    {scenario === "pending"
                      ? "Submit the prescription before leaving"
                      : timedOut
                        ? "The care agent is taking longer than usual"
                        : "Stay while the care agent joins"}
                  </h3>
                </div>
              </div>

              <div className="handshake-conversion-row">
                <article>
                  <strong>~65%</strong>
                  <span>same-day conversion</span>
                  <small>Successful handshake</small>
                </article>
                <article>
                  <strong>~35%</strong>
                  <span>same-day conversion</span>
                  <small>Without handshake</small>
                </article>
              </div>

              {submitted ? (
                <div className="handshake-countdown">
                  <div>
                    <span>{timedOut ? "Wait window complete" : "Agent alerted · joining window"}</span>
                    <strong>{remaining}s</strong>
                  </div>
                  <div className="handshake-countdown-track">
                    <i style={{ width: `${(remaining / START_SECONDS) * 100}%` }} />
                  </div>
                  <small>
                    {timedOut
                      ? "You can leave now without this being counted as a doctor-side miss."
                      : "Please stay on the call so you can introduce the agent to the patient."}
                  </small>
                </div>
              ) : (
                <p className="handshake-modal-copy">
                  Prescription submission alerts the care agent. Keep the patient
                  on this call so the agent can explain fulfilment and next steps.
                </p>
              )}

              <div className="handshake-modal-actions">
                {scenario === "pending" ? (
                  <button className="button primary" type="button" onClick={submitRx}>
                    Submit Rx &amp; alert agent
                  </button>
                ) : (
                  <button className="button primary" type="button" onClick={showJoined}>
                    Simulate agent joining
                  </button>
                )}
                <button
                  className="button secondary"
                  type="button"
                  onClick={() => setOpen(false)}
                >
                  {timedOut ? "Leave call" : "Leave anyway"}
                </button>
              </div>
            </section>
          </div>
        ) : null}
      </div>

      <p className="handshake-prototype-note">
        Interactive reconstruction of the shipped doctor-side flow. Use the
        scenario controls or the red end-call button to replay the intervention.
      </p>
    </div>
  );
}
