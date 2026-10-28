import "./emberline.css";
import "./pathway.css";
import { Pathway } from "./pathway";

export const metadata = { title: "Emberline | Home, rewired", description: "A considered way to explore home electrification and choose a fitting next step." };

const steps = [
  ["01", "Read your home", "Start with the details that shape comfort, energy use, and everyday routines."],
  ["02", "Compare your options", "See which upgrades belong together, and which can wait."],
  ["03", "Plan with confidence", "Keep the next conversation focused on your home and your priorities."],
];

export default function Page() {
  return <main className="ember-page" id="home">
    <header className="ember-nav"><a className="ember-brand" href="#home"><span className="ember-symbol">E</span>EMBERLINE</a><span className="nav-caption">A HOME ENERGY FIELD GUIDE</span><a className="nav-action" href="#plan">Explore your options <b>↗</b></a></header>
    <section className="ember-hero">
      <div className="ember-copy">
        <p className="ember-kicker"><span /> HOME ELECTRIFICATION, MADE PERSONAL</p>
        <h1>Power your<br />home <i>better.</i></h1>
        <p className="ember-lede">A clearer way to explore the upgrades that fit your home, your routines, and the way you want to live.</p>
        <a className="ember-button" href="#plan">Map my home <span>↗</span></a>
        <div className="ember-proof"><span className="proof-mark">01</span><span>Start with the home you have.</span></div>
      </div>
      <div className="house-scene" aria-label="Illustrated home energy profile">
        <div className="sun-disc" />
        <svg className="house-drawing" viewBox="0 0 620 500" role="img" aria-label="A house with connected energy upgrades">
          <path className="house-line roof-line" d="M73 235 298 66l245 169" />
          <path className="house-line house-shell" d="M122 219v214h352V219M252 433V300h96v133M160 269h62v61h-62zM376 269h62v61h-62z" />
          <path className="house-line detail-line" d="M160 299h62M191 269v61M376 299h62M407 269v61M122 433h352" />
          <path className="energy-path" d="M65 400c74 62 132 76 207 53s127-61 218-18 91 10 112-14" />
          <circle className="energy-node node-a" cx="122" cy="219" r="8" /><circle className="energy-node node-b" cx="474" cy="219" r="8" /><circle className="energy-node node-c" cx="298" cy="433" r="8" />
          <path className="sun-ray" d="M491 95v30m-15-15h30m-26-11 22 22m0-22-22 22" />
        </svg>
        <div className="house-tag tag-heat"><span className="tag-icon">01</span><span>HEATING<br /><b>Comfort first</b></span></div>
        <div className="house-tag tag-power"><span className="tag-icon">02</span><span>POWER<br /><b>Ready when you are</b></span></div>
        <div className="house-stamp">YOUR HOME<br /><i>YOUR PACE</i></div>
        <div className="scene-caption"><span>THE EMBERLINE METHOD</span><span>01 / 03</span></div>
      </div>
    </section>
    <section className="ember-plan" id="plan">
      <div className="plan-heading"><p className="ember-kicker"><span /> A MORE USEFUL START</p><h2>Every home has<br />its own <i>sequence.</i></h2><p>Get clear on your first question before choosing a product or project.</p></div>
      <div className="plan-steps">{steps.map(([n,title,copy]) => <article className="plan-step" key={n}><span>{n}</span><div><h3>{title}</h3><p>{copy}</p></div><b>↗</b></article>)}</div>
    </section>
    <section className="ember-contact"><div><p className="ember-kicker"><span /> YOUR HOME, YOUR NEXT MOVE</p><h2>Make room<br />for <i>what's next.</i></h2><p>Answer three questions for a practical first step.</p></div><Pathway /></section>
    <footer className="ember-footer"><a className="ember-brand" href="#home"><span className="ember-symbol">E</span>EMBERLINE</a><span>Home energy, thoughtfully considered.</span><span>© 2026 EMBERLINE</span></footer>
  </main>;
}
