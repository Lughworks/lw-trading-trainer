export function render() {
    return `
        <div class="fixed inset-0 bg-obsidian text-white p-6 md:p-12 blueprint-grid overflow-y-auto z-[100]">
            <div class="max-w-7xl mx-auto">
                <div class="w-full border-b border-electric/20 pb-4 mb-12 flex justify-between items-end font-mono">
                    <div class="text-[10px] text-electric animate-pulse uppercase">● Protocol: Swing_Tactical_Analysis_v1</div>
                    <button onclick="window.closeModule()" class="border border-electric text-electric py-1 px-6 text-[10px] hover:bg-electric hover:text-black transition-all uppercase font-bold italic">Return_to_Dashboard</button>
                </div>

                <div class="mb-24">
                    <span class="text-xs font-black uppercase tracking-[0.5em] text-electric">Multi_Day_Strategy_Series</span>
                    <h1 class="text-7xl font-black uppercase italic mt-4 tracking-tighter leading-none mb-6">SWING<span class="text-electric">TRADING</span></h1>
                    <div class="h-1 w-32 bg-electric mb-8"></div>
                    <p class="max-w-2xl text-[11px] text-zinc-400 leading-relaxed uppercase">Swing trading exploits market "swings" on the 4-hour and Daily timeframes. We trade less, but for larger percentages. Risk is managed through position sizing rather than stop-loss tightness, accounting for overnight "Gap" risk.</p>
                </div>

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div class="lg:col-span-5">
                            <span class="text-electric font-mono text-xs tracking-widest">01_STRATEGY</span>
                            <h2 class="text-5xl font-black italic uppercase mt-2 text-white">The Daily Pullback</h2>
                            <div class="mt-8 space-y-6">
                                <p class="text-[11px] text-zinc-300 leading-relaxed uppercase">We identify stocks in a strong Daily uptrend and wait for a "mean reversion" to the 50-day Moving Average. This represents a period of cooling off before the next major institutional buy cycle.</p>
                                
                                <div class="cyber-panel p-6 bg-zinc-900/40 border-l-2 border-electric">
                                    <h4 class="text-white font-bold text-[10px] uppercase mb-2 italic">Institutional Loading</h4>
                                    <p class="text-[10px] text-zinc-500 uppercase leading-loose">Large mutual funds use the 50-day and 200-day MAs as their "Accumulation Zones." Buying here aligns our retail capital with long-term institutional support.</p>
                                </div>

                                <ul class="space-y-3 font-mono text-[10px]">
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> TIME_FRAME: Daily (1D)</li>
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> INDICATOR: 50-period Simple Moving Average (SMA)</li>
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> HOLD_TIME: 3 to 15 Market Days</li>
                                </ul>
                            </div>
                        </div>
                        <div class="lg:col-span-7 aspect-video cyber-panel bg-black/40 border-t border-electric/30 flex items-center justify-center p-8">
                            <svg viewBox="0 0 400 200" class="w-full h-full">
                                <path d="M50 180 L80 140 L110 160 L140 100 L170 120 L220 50 L270 90 L350 20" fill="none" stroke="white" stroke-width="1.5" opacity="0.3" />
                                <path d="M40 190 Q 200 160, 360 80" fill="none" stroke="#00d2ff" stroke-width="2" /> <circle cx="270" cy="90" r="12" stroke="#00d2ff" stroke-width="1" fill="#00d2ff" fill-opacity="0.1" class="animate-pulse" />
                                <text x="250" y="120" fill="#00d2ff" font-family="monospace" font-size="8">ACCUMULATION_ZONE</text>
                            </svg>
                        </div>
                    </div>
                </section>
                

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div class="lg:col-span-7 order-2 lg:order-1 aspect-video cyber-panel bg-black/40 border-t border-electric/30 p-8 flex items-center justify-center">
                            <svg viewBox="0 0 400 200" class="w-full h-full">
                                <path d="M50 60 Q 50 160, 150 160 Q 250 160, 250 60" fill="none" stroke="white" stroke-width="2" opacity="0.4" /> <path d="M250 60 L300 90 L290 100 L240 70 Z" fill="#00d2ff" fill-opacity="0.1" stroke="#00d2ff" stroke-width="1" /> <path d="M280 85 L350 30" fill="none" stroke="#00d2ff" stroke-width="2" stroke-dasharray="4" />
                                <text x="130" y="180" fill="white" font-family="monospace" font-size="8" opacity="0.5">THE_CUP_ACCUMULATION</text>
                            </svg>
                        </div>
                        <div class="lg:col-span-5 order-1 lg:order-2">
                            <span class="text-electric font-mono text-xs tracking-widest">02_STRATEGY</span>
                            <h2 class="text-5xl font-black italic uppercase mt-2 text-white">Cup and Handle</h2>
                            <div class="mt-8 space-y-6">
                                <p class="text-[11px] text-zinc-300 leading-relaxed uppercase">A classic "Consolidation-to-Expansion" pattern. The cup shows a slow recovery of price, and the handle represents a final shake-out of weak hands before the breakout.</p>
                                
                                <div class="cyber-panel p-6 bg-zinc-900/40 border-l-2 border-electric">
                                    <h4 class="text-white font-bold text-[10px] uppercase mb-2 italic">Volume Confirmation</h4>
                                    <p class="text-[10px] text-zinc-500 uppercase leading-loose">The bottom of the cup should have low volume (lack of sellers), while the breakout from the handle must have explosive volume (return of buyers).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                

                <div class="border-t border-white/10 pt-24 pb-32">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="cyber-panel p-8 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">Earnings Gap-ups</h5>
                            <p class="text-[10px] text-zinc-400 uppercase leading-relaxed">Buying stocks that gap up on earnings beat. We hold for the 'Post-Earnings Drift' which can last 4-6 weeks.</p>
                        </div>
                        <div class="cyber-panel p-8 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">Relative Strength</h5>
                            <p class="text-[10px] text-zinc-400 uppercase leading-relaxed">Trading stocks that stay green when the S&P 500 is red. This indicates strong accumulation by funds.</p>
                        </div>
                        <div class="cyber-panel p-8 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">Sector Rotation</h5>
                            <p class="text-[10px] text-zinc-400 uppercase leading-relaxed">Identifying which part of the economy (Tech, Energy, Health) money is flowing into on a monthly basis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}