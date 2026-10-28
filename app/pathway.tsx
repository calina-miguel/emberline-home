"use client";

import { useState } from "react";

const prompts = [
  { label: "YOUR HOME / 01", title: "What would you like to improve first?", options: ["Comfort through the seasons", "Lower energy use", "Backup and resilience"] },
  { label: "YOUR HOME / 02", title: "What best describes your home?", options: ["Detached home", "Townhouse or duplex", "Apartment or condo"] },
  { label: "YOUR HOME / 03", title: "How soon are you exploring?", options: ["Just gathering context", "Planning for this year", "Ready to compare options"] },
];
const routes = [
  ["Begin with comfort", "Look at insulation, air sealing, and heating controls before comparing equipment. A home assessment can help identify which change belongs first."],
  ["Map your electrical readiness", "Start with your panel capacity and current loads. That gives you a useful foundation for exploring heat pumps, induction, or charging."],
  ["Plan for continuity", "List the essentials you want powered, then compare backup options against those needs. Keep installation and local requirements in the conversation."],
];

export function Pathway() {
  const [step, setStep] = useState(0); const [answers, setAnswers] = useState<number[]>([]); const [done, setDone] = useState(false);
  const select = (index: number) => setAnswers((old) => { const next = old.slice(0, step); next[step] = index; return next; });
  return <div className="pathway pathway--ember" id="ember-pathway" aria-live="polite">
    <div className="pathway__meter"><span>{done ? "YOUR HOME BRIEF" : prompts[step].label}</span><b>{done ? "READY" : `0${step + 1} / 03`}</b></div>
    {done ? <div className="pathway__result"><p className="pathway__eyebrow">A CONSIDERED FIRST MOVE</p><h3>{routes[answers[0] ?? 0][0]}</h3><p>{routes[answers[0] ?? 0][1]}</p><div className="pathway__sequence"><span>ASSESS</span><i/><span>COMPARE</span><i/><span>PLAN</span></div><small>Email follow-up is paused until sender-domain setup is complete.</small><button onClick={() => { setDone(false); setStep(0); setAnswers([]); }}>Start another home brief ↺</button></div> : <>
      <h3>{prompts[step].title}</h3><div className="pathway__options">{prompts[step].options.map((item, i) => <button key={item} onClick={() => select(i)} className={answers[step] === i ? "is-picked" : ""} aria-pressed={answers[step] === i}><span>0{i + 1}</span>{item}<b>↗</b></button>)}</div>
      <div className="pathway__footer"><button onClick={() => setStep(Math.max(step - 1, 0))} disabled={!step}>Back</button><button onClick={() => step < 2 ? setStep(step + 1) : setDone(true)} disabled={answers[step] === undefined}>{step === 2 ? "Build my brief" : "Continue"}<span>→</span></button></div>
    </>}
  </div>;
}
