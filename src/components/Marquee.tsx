export default function Marquee() {
  return (
    <div className="w-full bg-nw-black border-y border-nw-graphite/30 overflow-hidden py-3">
      <div className="marquee-container font-mono text-xs uppercase track-widest text-nw-bone">
        <div className="flex-shrink-0 flex items-center gap-12 px-6">
          <span>// PIPELINE: SECURE</span>
          <span>// LATENCY: <span className="text-nw-acid">12ms</span></span>
          <span>// UPTIME: 99.99%</span>
          <span>// SPRINT: 42</span>
          <span>// VELOCITY: 148</span>
          <span>// PIPELINE: SECURE</span>
          <span>// LATENCY: <span className="text-nw-acid">12ms</span></span>
          <span>// UPTIME: 99.99%</span>
          <span>// SPRINT: 42</span>
          <span>// VELOCITY: 148</span>
        </div>
      </div>
    </div>


  );
}
