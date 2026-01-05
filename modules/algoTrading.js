export function render() {
    return `
        <div class="fixed inset-0 bg-obsidian text-white p-6 md:p-12 blueprint-grid overflow-y-auto z-[100]">
            <div class="max-w-7xl mx-auto">
                <div class="w-full border-b border-electric/20 pb-4 mb-12 flex justify-between items-end font-mono">
                    <div class="text-[10px] text-electric animate-pulse uppercase">● Protocol: Algorithmic_Systems_v1</div>
                    <button onclick="window.closeModule()" class="border border-electric text-electric py-1 px-6 text-[10px] hover:bg-electric hover:text-black transition-all uppercase font-bold italic">Return_to_Dashboard</button>
                </div>

                <div class="mb-24">
                    <span class="text-xs font-black uppercase tracking-[0.5em] text-electric">Quantitative_Execution_Series</span>
                    <h1 class="text-7xl font-black uppercase italic mt-4 tracking-tighter leading-none mb-6">ALGO<span class="text-electric">TRADING</span></h1>
                    <div class="h-1 w-32 bg-electric mb-8"></div>
                    <p class="max-w-2xl text-[11px] text-zinc-400 leading-relaxed uppercase">Automated trading utilizes computer programs to execute orders at speeds and frequencies impossible for a human. We focus on mathematical models, statistical arbitrage, and the systematic elimination of behavioral bias.</p>
                </div>

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div class="lg:col-span-5">
                            <span class="text-electric font-mono text-xs tracking-widest">01_LOGIC_MODEL</span>
                            <h2 class="text-5xl font-black italic uppercase mt-2 text-white">Mean Reversion</h2>
                            <div class="mt-8 space-y-6">
                                <p class="text-[11px] text-zinc-300 leading-relaxed uppercase">Based on the statistical theory that prices eventually return to their historical average. Algos use Z-Scores and Bollinger Band width to identify "Overextended" states and bet on the snap-back.</p>
                                
                                <div class="cyber-panel p-6 bg-zinc-900/40 border-l-2 border-electric">
                                    <h4 class="text-white font-bold text-[10px] uppercase mb-2 italic">Statistical Arbitrage</h4>
                                    <p class="text-[10px] text-zinc-500 uppercase leading-loose">Algorithms often trade "Pairs." For example, if Coca-Cola rises while Pepsi falls without a fundamental reason, the algo will short KO and buy PEP, betting the historical correlation will restore.</p>
                                </div>

                                <ul class="space-y-3 font-mono text-[10px]">
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> DATA_INPUT: Historical Price Std. Deviation</li>
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> EXECUTION: Automated API Limit Orders</li>
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> ADVANTAGE: 24/7 Monitoring of 500+ Pairs</li>
                                </ul>
                            </div>
                        </div>
                        <div class="lg:col-span-7 aspect-video cyber-panel bg-black/40 border-t border-electric/30 flex items-center justify-center p-8">
                            <svg viewBox="0 0 400 200" class="w-full h-full">
                                <line x1="0" y1="100" x2="400" y2="100" stroke="white" stroke-width="1" opacity="0.2" /> <path d="M0 100 Q 50 20, 100 100 T 200 100 T 300 100 T 400 100" fill="none" stroke="#00d2ff" stroke-width="2" opacity="0.5" />
                                <circle cx="50" cy="25" r="8" fill="#ef4444" fill-opacity="0.3" stroke="#ef4444" />
                                <path d="M50 35 L50 95" stroke="#ef4444" stroke-width="1" stroke-dasharray="2" marker-end="url(#arrow)" />
                                <text x="65" y="40" fill="#ef4444" font-family="monospace" font-size="8">Z-SCORE_DEVIATION</text>
                            </svg>
                        </div>
                    </div>
                </section>
                

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div class="lg:col-span-7 order-2 lg:order-1 aspect-video cyber-panel bg-black/40 border-t border-electric/30 p-8 flex flex-col justify-center font-mono">
                            <div class="text-[10px] text-electric opacity-80 space-y-1">
                                <div>if (current_price > vwap && rvol > 2.0) {</div>
                                <div class="pl-4 text-white">execute_order("BUY", qty=1000, type="LIMIT");</div>
                                <div class="pl-4 text-zinc-500">log("Institutional_Momentum_Detected");</div>
                                <div>} else if (price < stop_loss) {</div>
                                <div class="pl-4 text-red-500">liquidate_position();</div>
                                <div>}</div>
                            </div>
                            <div class="mt-8 pt-8 border-t border-white/10">
                                <div class="flex justify-between text-[9px] text-zinc-500">
                                    <span>LATENCY: 1.2ms</span>
                                    <span>API_STATUS: CONNECTED</span>
                                </div>
                            </div>
                        </div>
                        <div class="lg:col-span-5 order-1 lg:order-2">
                            <span class="text-electric font-mono text-xs tracking-widest">02_EXECUTION</span>
                            <h2 class="text-5xl font-black italic uppercase mt-2 text-white">Execution Algos</h2>
                            <div class="mt-8 space-y-6">
                                <p class="text-[11px] text-zinc-300 leading-relaxed uppercase">Large institutions use "Iceberg" and "VWAP" algorithms to buy millions of shares without moving the market price. They break large orders into thousands of tiny pieces.</p>
                                
                                <div class="cyber-panel p-6 bg-zinc-900/40 border-l-2 border-electric">
                                    <h4 class="text-white font-bold text-[10px] uppercase mb-2 italic">Dark Pools</h4>
                                    <p class="text-[10px] text-zinc-500 uppercase leading-loose">Private exchanges where institutions trade large blocks of stock away from the public eye. Algorithmic "Scrapers" attempt to detect this hidden liquidity by monitoring tape speed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                

                <div class="border-t border-white/10 pt-24 pb-32">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="cyber-panel p-6 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">Backtesting</h5>
                            <p class="text-[9px] text-zinc-400 leading-relaxed uppercase">Running a strategy against 10 years of historical data to see if it actually has a statistical edge before risking capital.</p>
                        </div>
                        <div class="cyber-panel p-6 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">Curve Fitting</h5>
                            <p class="text-[9px] text-zinc-400 leading-relaxed uppercase">The danger of over-optimizing a strategy to fit past data so perfectly that it fails to perform in the real, unpredictable market.</p>
                        </div>
                        <div class="cyber-panel p-6 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">Machine Learning</h5>
                            <p class="text-[9px] text-zinc-400 leading-relaxed uppercase">Using Neural Networks to identify non-linear patterns in price and volume that standard indicators miss.</p>
                        </div>
                        <div class="cyber-panel p-6 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">Co-Location</h5>
                            <p class="text-[9px] text-zinc-400 leading-relaxed uppercase">Placing trading servers in the same building as the Exchange (e.g., NYSE) to reduce execution latency to microseconds.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}