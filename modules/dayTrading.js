export function render() {
    return `
        <div class="fixed inset-0 bg-obsidian text-white p-6 md:p-12 blueprint-grid overflow-y-auto z-[100]">
            <div class="max-w-7xl mx-auto">
                <div class="w-full border-b border-electric/20 pb-4 mb-12 flex justify-between items-end font-mono">
                    <div class="text-[10px] text-electric animate-pulse uppercase">● Protocol: Day_Trading_Manual_v2</div>
                    <button onclick="window.closeModule()" class="border border-electric text-electric py-1 px-6 text-[10px] hover:bg-electric hover:text-black transition-all uppercase font-bold italic">Return_to_Dashboard</button>
                </div>

                <div class="mb-24">
                    <span class="text-xs font-black uppercase tracking-[0.5em] text-electric">Technical_Analysis_Series</span>
                    <h1 class="text-7xl font-black uppercase italic mt-4 tracking-tighter leading-none mb-6">DAY<span class="text-electric">TRADING</span></h1>
                    <div class="h-1 w-32 bg-electric mb-8"></div>
                    <p class="max-w-2xl text-[11px] text-zinc-400 leading-relaxed uppercase">The following documentation covers the extraction of capital from intraday price fluctuations. Mastery requires strict adherence to risk parameters and the identification of high-probability institutional footprints.</p>
                </div>

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div class="lg:col-span-5">
                            <span class="text-electric font-mono text-xs tracking-widest">01_STRATEGY</span>
                            <h2 class="text-5xl font-black italic uppercase mt-2 text-white">Opening Range Breakout</h2>
                            <div class="mt-8 space-y-6">
                                <p class="text-[11px] text-zinc-300 leading-relaxed uppercase">The first 15-30 minutes represent the "Price Discovery" phase. The ORB strategy capitalizes on the resolution of this initial volatility.</p>
                                
                                <div class="cyber-panel p-6 bg-zinc-900/40 border-l-2 border-electric">
                                    <h4 class="text-white font-bold text-[10px] uppercase mb-2 italic">Institutional Context</h4>
                                    <p class="text-[10px] text-zinc-500 uppercase leading-loose">Algorithms often use the opening range to fill massive orders. A break above the high with a surge in RVOL (> 2.0) confirms institutional bias.</p>
                                </div>

                                <ul class="space-y-3 font-mono text-[10px]">
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> ENTRY: 1c Above 15m Range High</li>
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> STOP: Midpoint of the 15m Candle</li>
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> TARGET: 2:1 Reward to Risk Ratio</li>
                                </ul>
                            </div>
                        </div>
                        <div class="lg:col-span-7 aspect-video cyber-panel bg-black/40 border-t border-electric/30 flex items-center justify-center p-4">
                            <svg viewBox="0 0 400 200" class="w-full h-full">
                                <path d="M0 50 H400 M0 100 H400 M0 150 H400" stroke="white" stroke-width="0.5" stroke-dasharray="4" opacity="0.1"/>
                                <line x1="50" y1="60" x2="350" y2="60" stroke="#00d2ff" stroke-width="1" stroke-dasharray="4" />
                                <line x1="50" y1="140" x2="350" y2="140" stroke="#ef4444" stroke-width="1" stroke-dasharray="4" opacity="0.3" />
                                <rect x="60" y="60" width="30" height="80" fill="#00d2ff" fill-opacity="0.1" stroke="#00d2ff" stroke-width="1" />
                                <path d="M100 100 L140 110 L180 80 L220 60 L260 30 L320 10" fill="none" stroke="#00d2ff" stroke-width="2" class="animate-pulse" />
                                <text x="355" y="58" fill="#00d2ff" font-family="monospace" font-size="8">ENTRY_HIGH</text>
                                <text x="355" y="142" fill="#ef4444" font-family="monospace" font-size="8" opacity="0.5">STOP_LOW</text>
                            </svg>
                        </div>
                    </div>
                </section>

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div class="lg:col-span-7 order-2 lg:order-1 aspect-video cyber-panel bg-black/40 border-t border-electric/30 flex items-center justify-center p-4">
                            <svg viewBox="0 0 400 200" class="w-full h-full">
                                <polyline points="50,160 150,60 200,100 320,20" fill="none" stroke="#00d2ff" stroke-width="2" />
                                <circle cx="50" cy="160" r="3" fill="white" /> <text x="45" y="175" fill="white" font-size="10">A</text>
                                <circle cx="150" cy="60" r="3" fill="white" /> <text x="145" y="50" fill="white" font-size="10">B</text>
                                <circle cx="200" cy="100" r="3" fill="#ef4444" /> <text x="195" y="115" fill="#ef4444" font-size="10">C</text>
                                <circle cx="320" cy="20" r="3" fill="#00d2ff" /> <text x="325" y="25" fill="#00d2ff" font-size="10">D</text>
                                <line x1="150" y1="60" x2="350" y2="60" stroke="white" stroke-width="0.5" stroke-dasharray="4" opacity="0.3" />
                                <text x="250" y="55" fill="white" font-family="monospace" font-size="8" opacity="0.5">BREAKOUT_TRIGGER</text>
                            </svg>
                        </div>
                        <div class="lg:col-span-5 order-1 lg:order-2">
                            <span class="text-electric font-mono text-xs tracking-widest">02_STRATEGY</span>
                            <h2 class="text-5xl font-black italic uppercase mt-2 text-white">The ABCD Pattern</h2>
                            <div class="mt-8 space-y-6">
                                <p class="text-[11px] text-zinc-300 leading-relaxed uppercase">A rhythmic trend-continuation move. It identifies when a stock has finished its "breather" and is ready for secondary expansion.</p>
                                
                                <div class="cyber-panel p-6 bg-zinc-900/40 border-l-2 border-electric">
                                    <h4 class="text-white font-bold text-[10px] uppercase mb-2 italic">The Fibonacci 'C' Point</h4>
                                    <p class="text-[10px] text-zinc-500 uppercase leading-loose">For highest probability, Point C (the higher low) should retrace to the 50% or 61.8% level of the A-B move.</p>
                                </div>

                                <ul class="space-y-3 font-mono text-[10px]">
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> A-B: The Initial Impulsive Leg</li>
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> C: Healthy Low-Volume Pullback</li>
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> D: Breakout confirmation point</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div class="lg:col-span-5">
                            <span class="text-electric font-mono text-xs tracking-widest">03_STRATEGY</span>
                            <h2 class="text-5xl font-black italic uppercase mt-2 text-white">Bull Flag Continuation</h2>
                            <div class="mt-8 space-y-6">
                                <p class="text-[11px] text-zinc-300 leading-relaxed uppercase">A vertical "Pole" followed by tight, diagonal consolidation. The hallmark of a high-demand momentum stock.</p>
                                
                                <div class="cyber-panel p-6 bg-zinc-900/40 border-l-2 border-electric">
                                    <h4 class="text-white font-bold text-[10px] uppercase mb-2 italic">Volume Profile</h4>
                                    <p class="text-[10px] text-zinc-500 uppercase leading-loose">The "Flag" portion must occur on declining volume. High volume during a flag suggests distribution rather than consolidation.</p>
                                </div>

                                <ul class="space-y-3 font-mono text-[10px]">
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> POLE: Parabolic price action (70-90° angle)</li>
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> FLAG: Horizontal or Descending channel</li>
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> TRIGGER: Break of top trendline</li>
                                </ul>
                            </div>
                        </div>
                        <div class="lg:col-span-7 aspect-video cyber-panel bg-black/40 border-t border-electric/30 flex items-center justify-center p-4">
                            <svg viewBox="0 0 400 240" class="w-full h-full">
                                <path d="M50 200 L150 60" fill="none" stroke="#00d2ff" stroke-width="3" />
                                <path d="M150 60 L250 100 L240 110 L140 70 Z" fill="#00d2ff" fill-opacity="0.1" stroke="#00d2ff" stroke-width="1" />
                                <path d="M220 88 L350 20" fill="none" stroke="#00d2ff" stroke-width="2" stroke-dasharray="4" />
                                <rect x="50" y="210" width="10" height="20" fill="#00d2ff" opacity="0.6" />
                                <rect x="70" y="215" width="10" height="15" fill="#00d2ff" opacity="0.6" />
                                <rect x="150" y="225" width="10" height="5" fill="#00d2ff" opacity="0.1" />
                                <rect x="170" y="227" width="10" height="3" fill="#00d2ff" opacity="0.1" />
                                <text x="50" y="240" fill="white" font-family="monospace" font-size="7" opacity="0.3">VOLUME_DRY_UP_REQUIRED</text>
                            </svg>
                        </div>
                    </div>
                </section>

                <div class="border-t border-white/10 pt-24 pb-32">
                    <div class="text-center mb-16">
                        <h3 class="text-3xl font-black italic uppercase">Secondary Setup Directory</h3>
                        <p class="text-[10px] text-zinc-500 mt-2 uppercase tracking-widest">Quick reference for all remaining intraday archetypes</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="cyber-panel p-8 bg-zinc-900/20 border-t border-white/5">
                            <span class="text-electric font-mono text-[9px] block mb-4">REVERSAL_MODEL</span>
                            <h5 class="text-lg font-black italic uppercase mb-4 text-white">V-Reversal</h5>
                            <p class="text-[10px] text-zinc-400 uppercase leading-relaxed">Aggressive bounce off a support floor after a vertical drop. Requires significant buying volume spikes.</p>
                        </div>
                        <div class="cyber-panel p-8 bg-zinc-900/20 border-t border-white/5">
                            <span class="text-electric font-mono text-[9px] block mb-4">ALGO_MODEL</span>
                            <h5 class="text-lg font-black italic uppercase mb-4 text-white">VWAP Bounce</h5>
                            <p class="text-[10px] text-zinc-400 uppercase leading-relaxed">Institutions use VWAP as a benchmark. Buying the first touch of VWAP in an uptrend is a high-win-rate play.</p>
                        </div>
                        <div class="cyber-panel p-8 bg-zinc-900/20 border-t border-white/5">
                            <span class="text-electric font-mono text-[9px] block mb-4">EXHAUSTION_MODEL</span>
                            <h5 class="text-lg font-black italic uppercase mb-4 text-white">Head & Shoulders</h5>
                            <p class="text-[10px] text-zinc-400 uppercase leading-relaxed">Structural shift pattern. Failure to make a new high on the "Right Shoulder" confirms the trend has died.</p>
                        </div>
                        <div class="cyber-panel p-8 bg-zinc-900/20 border-t border-white/5">
                            <span class="text-electric font-mono text-[9px] block mb-4">MOMENTUM_MODEL</span>
                            <h5 class="text-lg font-black italic uppercase mb-4 text-white">Gap and Go</h5>
                            <p class="text-[10px] text-zinc-400 uppercase leading-relaxed">Occurs when a stock opens significantly above yesterday's range and never returns to fill the gap.</p>
                        </div>
                        <div class="cyber-panel p-8 bg-zinc-900/20 border-t border-white/5">
                            <span class="text-electric font-mono text-[9px] block mb-4">RESISTANCE_MODEL</span>
                            <h5 class="text-lg font-black italic uppercase mb-4 text-white">Double Top</h5>
                            <p class="text-[10px] text-zinc-400 uppercase leading-relaxed">Price tests a specific high twice and fails to break out. Signals a supply wall the bulls cannot overcome.</p>
                        </div>
                        <div class="cyber-panel p-8 bg-zinc-900/20 border-t border-white/5">
                            <span class="text-electric font-mono text-[9px] block mb-4">SHORT_MODEL</span>
                            <h5 class="text-lg font-black italic uppercase mb-4 text-white">Bear Flag</h5>
                            <p class="text-[10px] text-zinc-400 uppercase leading-relaxed">The inverse of the Bull Flag. A sharp drop followed by a slow climbing channel before a secondary breakdown.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}