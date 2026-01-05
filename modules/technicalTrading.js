export function render() {
    return `
        <div class="fixed inset-0 bg-obsidian text-white p-6 md:p-12 blueprint-grid overflow-y-auto z-[100]">
            <div class="max-w-7xl mx-auto">
                <div class="w-full border-b border-electric/20 pb-4 mb-12 flex justify-between items-end font-mono">
                    <div class="text-[10px] text-electric animate-pulse uppercase">● Protocol: Technical_Analysis_Master_v1</div>
                    <button onclick="window.closeModule()" class="border border-electric text-electric py-1 px-6 text-[10px] hover:bg-electric hover:text-black transition-all uppercase font-bold italic">Return_to_Dashboard</button>
                </div>

                <div class="mb-24">
                    <span class="text-xs font-black uppercase tracking-[0.5em] text-electric">Price_Action_Series</span>
                    <h1 class="text-7xl font-black uppercase italic mt-4 tracking-tighter leading-none mb-6">TECH<span class="text-electric">NICAL</span></h1>
                    <div class="h-1 w-32 bg-electric mb-8"></div>
                    <p class="max-w-2xl text-[11px] text-zinc-400 leading-relaxed uppercase">Technical analysis is the study of collective human psychology. By identifying repeating patterns in supply and demand, we can calculate the probability of future price direction. We don't predict; we react to structural shifts.</p>
                </div>

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div class="lg:col-span-5">
                            <span class="text-electric font-mono text-xs tracking-widest">01_CORE_PRINCIPLE</span>
                            <h2 class="text-5xl font-black italic uppercase mt-2 text-white">Support & Resistance</h2>
                            <div class="mt-8 space-y-6">
                                <p class="text-[11px] text-zinc-300 leading-relaxed uppercase">The binary language of the market. Support is the "Floor" where buyers consistently outnumber sellers. Resistance is the "Ceiling" where supply overwhelms demand.</p>
                                
                                <div class="cyber-panel p-6 bg-zinc-900/40 border-l-2 border-electric">
                                    <h4 class="text-white font-bold text-[10px] uppercase mb-2 italic">Role Reversal (Polarity)</h4>
                                    <p class="text-[10px] text-zinc-500 uppercase leading-loose">Once a resistance level is broken, it often flips to become support. This happens because "trapped" sellers try to get out at break-even, creating a new wave of buying pressure at the old ceiling.</p>
                                </div>

                                <ul class="space-y-3 font-mono text-[10px]">
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> VALIDATION: Minimum of 2 touches to confirm a level</li>
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> TYPE: Horizontal, Diagonal (Trendlines), and Psychological</li>
                                </ul>
                            </div>
                        </div>
                        <div class="lg:col-span-7 aspect-video cyber-panel bg-black/40 border-t border-electric/30 flex items-center justify-center p-8">
                            <svg viewBox="0 0 400 200" class="w-full h-full">
                                <line x1="0" y1="50" x2="400" y2="50" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4" />
                                <line x1="0" y1="150" x2="400" y2="150" stroke="#00d2ff" stroke-width="1.5" stroke-dasharray="4" />
                                <path d="M20 150 L60 50 L100 150 L140 50 L180 150 L220 50 L260 150 L300 50" fill="none" stroke="white" stroke-width="1.5" opacity="0.4" />
                                <text x="10" y="40" fill="#ef4444" font-family="monospace" font-size="8">RESISTANCE_ZONE</text>
                                <text x="10" y="170" fill="#00d2ff" font-family="monospace" font-size="8">SUPPORT_FLOOR</text>
                            </svg>
                        </div>
                    </div>
                </section>
                

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div class="lg:col-span-7 order-2 lg:order-1 aspect-video cyber-panel bg-black/40 border-t border-electric/30 p-8 flex flex-col justify-center">
                            <div class="space-y-4">
                                <div class="flex items-center gap-4">
                                    <div class="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                                        <div class="h-full bg-electric w-[85%] animate-pulse"></div>
                                    </div>
                                    <span class="text-[9px] font-mono text-electric">RSI_DIVERGENCE</span>
                                </div>
                                <div class="flex items-center gap-4">
                                    <div class="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                                        <div class="h-full bg-electric w-[70%] animate-pulse"></div>
                                    </div>
                                    <span class="text-[9px] font-mono text-electric">MACD_CROSSOVER</span>
                                </div>
                                <div class="flex items-center gap-4">
                                    <div class="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                                        <div class="h-full bg-electric w-[95%] animate-pulse"></div>
                                    </div>
                                    <span class="text-[9px] font-mono text-electric">FIB_RETRACEMENT</span>
                                </div>
                            </div>
                        </div>
                        <div class="lg:col-span-5 order-1 lg:order-2">
                            <span class="text-electric font-mono text-xs tracking-widest">02_EXECUTION</span>
                            <h2 class="text-5xl font-black italic uppercase mt-2 text-white">Confluence</h2>
                            <div class="mt-8 space-y-6">
                                <p class="text-[11px] text-zinc-300 leading-relaxed uppercase">A single indicator is a guess; three indicators at the same price point is a strategy. Confluence is the overlapping of different technical tools to increase the win rate.</p>
                                
                                <div class="cyber-panel p-6 bg-zinc-900/40 border-l-2 border-electric">
                                    <h4 class="text-white font-bold text-[10px] uppercase mb-2 italic">The "Holy Trinity"</h4>
                                    <p class="text-[10px] text-zinc-500 uppercase leading-loose">A high-probability trade often occurs when a horizontal support level aligns with a Fibonacci 61.8% retracement and an oversold RSI reading simultaneously.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                

                <div class="border-t border-white/10 pt-24 pb-32">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="cyber-panel p-6 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">Japanese Candlesticks</h5>
                            <p class="text-[9px] text-zinc-400 uppercase leading-relaxed">Reading the "Open, High, Low, and Close" to see who won the battle for the period—bulls or bears.</p>
                        </div>
                        <div class="cyber-panel p-6 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">Fibonacci Tools</h5>
                            <p class="text-[9px] text-zinc-400 uppercase leading-relaxed">Mathematical ratios (0.382, 0.618) found in nature that traders use to predict where pullbacks will end.</p>
                        </div>
                        <div class="cyber-panel p-6 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">Volume Analysis</h5>
                            <p class="text-[9px] text-zinc-400 uppercase leading-relaxed">The "Gas" in the tank. Price moves without volume are traps; price moves with high volume are trends.</p>
                        </div>
                        <div class="cyber-panel p-6 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">Oscillators</h5>
                            <p class="text-[9px] text-zinc-400 uppercase leading-relaxed">Tools like RSI and Stochastics that measure momentum and identify "overbought" or "oversold" conditions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}