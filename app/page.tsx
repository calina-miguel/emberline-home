import { FunnelLanding } from "./funnel-landing";

export const metadata = { title: "Emberline", description: "Find the right electrification path for a more resilient, lower-friction home." };

export default function Page(){ return <FunnelLanding config={{ name: "Emberline", monogram: "EL", eyebrow: "HOME, REWIRED", title: "Power your home better.", body: "Home electrification", accent: "#c4512e", soft: "#fff0e4", steps: ["Map your home energy profile","Compare the right upgrade","Build your proof-led plan"], cta: "Plan my upgrade", outcome: "Energy plan" }} />; }

