export function render() {
    return `
        <div class="fixed inset-0 bg-obsidian text-white p-6 md:p-12 blueprint-grid overflow-y-auto z-[100]">
            <div class="max-w-7xl mx-auto">
                <div class="w-full border-b border-electric/20 pb-4 mb-12 flex justify-between items-end font-mono">
                    <div class="text-[10px] text-electric animate-pulse uppercase">● Protocol: Event_Driven_Execution_v1</div>
                    <button onclick="window.closeModule()" class="border border-electric text-electric py-1 px-6 text-[10px] hover:bg-electric hover:text-black transition-all uppercase font-bold italic">Return_to_Dashboard</button>
                </div>

                <div class="mb-24">
                    <span class="text-xs font-black uppercase tracking-[0.5em] text-electric">Catalyst_Reaction_Series</span>
                    <h1 class="text-7xl font-black uppercase italic mt-4 tracking-tighter leading-none mb-6">NEWS<span class="text-electric">TRADING</span></h1>
                    <div class="h-1 w-32 bg-electric mb-8"></div>
                    <p class="max-w-2xl text-[11px] text-zinc-400 leading-relaxed uppercase">News trading is about speed and interpretation. Markets don't just react to news; they react to how the news differs from what was already "priced in." A "Good" earnings report can cause a price drop if the market expected "Great" results.</p>
                </div>

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div class="lg:col-span-5">
                            <span class="text-electric font-mono text-xs tracking-widest">01_EVENT_DYNAMICS</span>
                            <h2 class="text-5xl font-black italic uppercase mt-2 text-white">The Whipsaw</h2>
                            <div class="mt-8 space-y-6">
                                <p class="text-[11px] text-zinc-300 leading-relaxed uppercase">Immediately after a news release (like a Fed Rate decision), the price often spikes in both directions. This is the "Whipsaw"—where stop-losses on both sides are hunted before the true trend is established.</p>
                                
                                <div class="cyber-panel p-6 bg-zinc-900/40 border-l-2 border-electric">
                                    <h4 class="text-white font-bold text-[10px] uppercase mb-2 italic">Expectation vs. Reality</h4>
                                    <p class="text-[10px] text-zinc-500 uppercase leading-loose">Professional news traders look for the "Whisper Number"—the unofficial expectation of the street. If the official data matches the whisper but beats the public estimate, you often see a "Sell the News" event.</p>
                                </div>

                                <ul class="space-y-3 font-mono text-[10px]">
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> KEY_EVENTS: Non-Farm Payrolls (NFP), FOMC, CPI</li>
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> EXECUTION: High-speed squawk feeds and direct market access</li>
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> DANGER: Massive spread widening during the first 10 seconds</li>
                                </ul>
                            </div>
                        </div>
                        <div class="lg:col-span-7 aspect-video cyber-panel bg-black/40 border-t border-electric/30 flex items-center justify-center p-8">
                            <svg viewBox="0 0 400 200" class="w-full h-full">
                                <path d="M0 100 H150 L155 20 L165 180 L180 40 L200 120 L400 120" fill="none" stroke="#00d2ff" stroke-width="2" />
                                <circle cx="150" cy="100" r="5" fill="#ef4444" class="animate-ping" />
                                <text x="110" y="90" fill="white" font-family="monospace" font-size="8">NEWS_RELEASE_T0</text>
                                <text x="210" y="140" fill="#00d2ff" font-family="monospace" font-size="8">PRICE_SETTLEMENT</text>
                            </svg>
                        </div>
                    </div>
                </section>

                

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div class="lg:col-span-7 order-2 lg:order-1 aspect-video cyber-panel bg-black/40 border-t border-electric/30 p-8 flex flex-col justify-center">
                            <div class="space-y-2 font-mono">
                                <div class="grid grid-cols-4 text-[8px] text-zinc-500 border-b border-white/10 pb-2 uppercase">
                                    <span>Time</span><span>Event</span><span>Forecast</span><span>Actual</span>
                                </div>
                                <div class="grid grid-cols-4 text-[10px] py-2 border-b border-white/5">
                                    <span>08:30</span><span>CPI (MoM)</span><span>0.3%</span><span class="text-red-500 font-bold">0.5%</span>
                                </div>
                                <div class="grid grid-cols-4 text-[10px] py-2 border-b border-white/5 bg-electric/5">
                                    <span>10:00</span><span>Consumer Conf.</span><span>108.5</span><span class="text-electric font-bold">112.1</span>
                                </div>
                                <div class="grid grid-cols-4 text-[10px] py-2">
                                    <span>14:00</span><span>Fed Interest Rate</span><span>5.50%</span><span>5.50%</span>
                                </div>
                            </div>
                        </div>
                        <div class="lg:col-span-5 order-1 lg:order-2">
                            <span class="text-electric font-mono text-xs tracking-widest">02_THE_FADE</span>
                            <h2 class="text-5xl font-black italic uppercase mt-2 text-white">Trading the Fade</h2>
                            <div class="mt-8 space-y-6">
                                <p class="text-[11px] text-zinc-300 leading-relaxed uppercase">Experienced news traders often "Fade" the initial move. This involves waiting for the first emotional spike to exhaust itself and then trading in the opposite direction once the algorithms have finished their initial buy/sell programs.</p>
                                
                                <div class="cyber-panel p-6 bg-zinc-900/40 border-l-2 border-electric">
                                    <h4 class="text-white font-bold text-[10px] uppercase mb-2 italic">Institutional Re-balancing</h4>
                                    <p class="text-[10px] text-zinc-500 uppercase leading-loose">Large banks use news volatility to fill massive orders. Once that liquidity is absorbed, price often reverts to the "pre-news" level or drifts towards the true fundamental value.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                

                <div class="border-t border-white/10 pt-24 pb-32">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="cyber-panel p-6 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">The Squawk Box</h5>
                            <p class="text-[9px] text-zinc-400 leading-relaxed uppercase">An audio feed of professional analysts shouting out news headlines as they hit the wire, giving traders a 5-10 second edge over text-based news.</p>
                        </div>
                        <div class="cyber-panel p-6 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">Volatility Crush</h5>
                            <p class="text-[9px] text-zinc-400 leading-relaxed uppercase">In options trading, the "IV Crush" happens immediately after news is released, as the uncertainty that was pumping up premium prices disappears.</p>
                        </div>
                        <div class="cyber-panel p-6 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">Arbitrage Algos</h5>
                            <p class="text-[9px] text-zinc-400 leading-relaxed uppercase">Software that reads news headlines using Natural Language Processing (NLP) and executes trades in milliseconds.</p>
                        </div>
                        <div class="cyber-panel p-6 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">Black Swan</h5>
                            <p class="text-[9px] text-zinc-400 leading-relaxed uppercase">Unpredictable news events (like a sudden pandemic or war) that cause "limit-down" halts and extreme market dislocation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}