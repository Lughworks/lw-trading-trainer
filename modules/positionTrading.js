export function render() {
    return `
        <div class="fixed inset-0 bg-obsidian text-white p-6 md:p-12 blueprint-grid overflow-y-auto z-[100]">
            <div class="max-w-7xl mx-auto">
                <div class="w-full border-b border-electric/20 pb-4 mb-12 flex justify-between items-end font-mono">
                    <div class="text-[10px] text-electric animate-pulse uppercase">● Protocol: Position_Investment_Series_v1</div>
                    <button onclick="window.closeModule()" class="border border-electric text-electric py-1 px-6 text-[10px] hover:bg-electric hover:text-black transition-all uppercase font-bold italic">Return_to_Dashboard</button>
                </div>

                <div class="mb-24">
                    <span class="text-xs font-black uppercase tracking-[0.5em] text-electric">Long_Term_Equity_Series</span>
                    <h1 class="text-7xl font-black uppercase italic mt-4 tracking-tighter leading-none mb-6">POSITION<span class="text-electric">TRADING</span></h1>
                    <div class="h-1 w-32 bg-electric mb-8"></div>
                    <p class="max-w-2xl text-[11px] text-zinc-400 leading-relaxed uppercase">The ultimate test of patience. Position trading requires an understanding of the 200-day moving average and the 'Business Cycle'. We enter at the birth of a trend and exit only when the structural narrative changes.</p>
                </div>

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div class="lg:col-span-5">
                            <span class="text-electric font-mono text-xs tracking-widest">01_STRATEGY</span>
                            <h2 class="text-5xl font-black italic uppercase mt-2 text-white">The Golden Cross</h2>
                            <div class="mt-8 space-y-6">
                                <p class="text-[11px] text-zinc-300 leading-relaxed uppercase">The most famous long-term signal. It occurs when the 50-day SMA crosses above the 200-day SMA. This indicates a massive shift in momentum that often lasts for over a year.</p>
                                
                                <div class="cyber-panel p-6 bg-zinc-900/40 border-l-2 border-electric">
                                    <h4 class="text-white font-bold text-[10px] uppercase mb-2 italic">Structural Bull Market</h4>
                                    <p class="text-[10px] text-zinc-500 uppercase leading-loose">When the 'Golden Cross' happens, it usually signals the end of a bear market. Institutions use this as a green light to begin heavy accumulation in large-cap stocks.</p>
                                </div>

                                <ul class="space-y-3 font-mono text-[10px]">
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> TIME_FRAME: Weekly or Monthly</li>
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> INDICATOR: 200-period Simple Moving Average</li>
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> HOLD_TIME: 6 Months to 2 Years</li>
                                </ul>
                            </div>
                        </div>
                        <div class="lg:col-span-7 aspect-video cyber-panel bg-black/40 border-t border-electric/30 flex items-center justify-center p-8">
                            <svg viewBox="0 0 400 200" class="w-full h-full">
                                <path d="M40 160 Q 150 150, 360 40" fill="none" stroke="white" stroke-width="2" opacity="0.3" /> <path d="M40 180 Q 150 160, 280 60 T 380 20" fill="none" stroke="#00d2ff" stroke-width="3" /> <circle cx="215" cy="112" r="15" stroke="#00d2ff" stroke-width="1" fill="#00d2ff" fill-opacity="0.1" class="animate-pulse" />
                                <text x="180" y="145" fill="#00d2ff" font-family="monospace" font-size="8">GOLDEN_CROSS_SIGNAL</text>
                            </svg>
                        </div>
                    </div>
                </section>
                

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div class="lg:col-span-7 order-2 lg:order-1 aspect-video cyber-panel bg-black/40 border-t border-electric/30 p-8 flex items-center justify-center">
                            <svg viewBox="0 0 400 200" class="w-full h-full">
                                <path d="M20 150 H80 L150 40 H250 L320 150 H380" fill="none" stroke="#00d2ff" stroke-width="2" />
                                <text x="30" y="170" fill="white" font-family="monospace" font-size="7">STAGE 1: BASING</text>
                                <text x="140" y="30" fill="#00d2ff" font-family="monospace" font-size="7">STAGE 2: ADVANCING</text>
                                <text x="300" y="170" fill="white" font-family="monospace" font-size="7">STAGE 4: DECLINING</text>
                            </svg>
                        </div>
                        <div class="lg:col-span-5 order-1 lg:order-2">
                            <span class="text-electric font-mono text-xs tracking-widest">02_STRATEGY</span>
                            <h2 class="text-5xl font-black italic uppercase mt-2 text-white">Stage Analysis</h2>
                            <div class="mt-8 space-y-6">
                                <p class="text-[11px] text-zinc-300 leading-relaxed uppercase">Position traders use Stan Weinstein's Stage Analysis to categorize a stock into 4 cycles: Accumulation, Markup, Distribution, and Decline.</p>
                                
                                <div class="cyber-panel p-6 bg-zinc-900/40 border-l-2 border-electric">
                                    <h4 class="text-white font-bold text-[10px] uppercase mb-2 italic">Stage 2 Entrance</h4>
                                    <p class="text-[10px] text-zinc-500 uppercase leading-loose">We only buy in Stage 2. This is when the stock breaks out of its multi-year 'Base' and begins its primary uptrend. This stage can double or triple a portfolio's value.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                

                <div class="border-t border-white/10 pt-24 pb-32">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="cyber-panel p-8 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">Secular Trends</h5>
                            <p class="text-[10px] text-zinc-400 uppercase leading-relaxed">Identifying decade-long shifts, such as the transition from internal combustion to EVs or the rise of Artificial Intelligence.</p>
                        </div>
                        <div class="cyber-panel p-8 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">Dividends / Reinvestment</h5>
                            <p class="text-[10px] text-zinc-400 uppercase leading-relaxed">Position traders often collect yield while waiting for price appreciation, utilizing DRIP (Dividend Reinvestment Plans).</p>
                        </div>
                        <div class="cyber-panel p-8 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">Interest Rate Influence</h5>
                            <p class="text-[10px] text-zinc-400 uppercase leading-relaxed">Monitoring the Federal Reserve. Lower rates generally fuel Stage 2 expansions, while higher rates trigger Stage 4 declines.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}