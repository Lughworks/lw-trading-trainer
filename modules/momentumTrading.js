export function render() {
    return `
        <div class="fixed inset-0 bg-obsidian text-white p-6 md:p-12 blueprint-grid overflow-y-auto z-[100]">
            <div class="max-w-7xl mx-auto">
                <div class="w-full border-b border-electric/20 pb-4 mb-12 flex justify-between items-end font-mono">
                    <div class="text-[10px] text-electric animate-pulse uppercase">● Protocol: Momentum_Velocity_Series_v1</div>
                    <button onclick="window.closeModule()" class="border border-electric text-electric py-1 px-6 text-[10px] hover:bg-electric hover:text-black transition-all uppercase font-bold italic">Return_to_Dashboard</button>
                </div>

                <div class="mb-24">
                    <span class="text-xs font-black uppercase tracking-[0.5em] text-electric">High_Velocity_Series</span>
                    <h1 class="text-7xl font-black uppercase italic mt-4 tracking-tighter leading-none mb-6">MOMEN<span class="text-electric">TUM</span></h1>
                    <div class="h-1 w-32 bg-electric mb-8"></div>
                    <p class="max-w-2xl text-[11px] text-zinc-400 leading-relaxed uppercase">Momentum trading targets stocks with high volatility and vertical price action. We look for "Surprise" catalysts—earnings beats, FDA approvals, or sudden sector hype—that force a massive repricing of an asset.</p>
                </div>

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div class="lg:col-span-5">
                            <span class="text-electric font-mono text-xs tracking-widest">01_STRATEGY</span>
                            <h2 class="text-5xl font-black italic uppercase mt-2 text-white">Blue Sky Breakout</h2>
                            <div class="mt-8 space-y-6">
                                <p class="text-[11px] text-zinc-300 leading-relaxed uppercase">The most powerful momentum setup. This occurs when a stock breaks above its "All-Time High" (ATH). Because there is no "overhead supply" (no one is holding at a loss waiting to sell), price can move parabolically.</p>
                                
                                <div class="cyber-panel p-6 bg-zinc-900/40 border-l-2 border-electric">
                                    <h4 class="text-white font-bold text-[10px] uppercase mb-2 italic">Psychological Void</h4>
                                    <p class="text-[10px] text-zinc-500 uppercase leading-loose">In a Blue Sky Breakout, the only resistance levels are psychological whole numbers (e.g., $100, $150, $200). Short sellers are forced to cover, adding fuel to the upward spike.</p>
                                </div>

                                <ul class="space-y-3 font-mono text-[10px]">
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> TRIGGER: Break of All-Time High on heavy volume</li>
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> INDICATOR: Relative Strength Index (RSI) > 70</li>
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> RISK: High "Climax Top" potential</li>
                                </ul>
                            </div>
                        </div>
                        <div class="lg:col-span-7 aspect-video cyber-panel bg-black/40 border-t border-electric/30 flex items-center justify-center p-8">
                            <svg viewBox="0 0 400 200" class="w-full h-full">
                                <path d="M0 150 L50 140 L100 155 L150 100 L200 110 L250 50" fill="none" stroke="white" stroke-width="1.5" opacity="0.2" />
                                <line x1="0" y1="50" x2="400" y2="50" stroke="#00d2ff" stroke-width="1" stroke-dasharray="4" />
                                <path d="M250 50 L280 20 L320 5 L380 -20" fill="none" stroke="#00d2ff" stroke-width="3" class="animate-pulse" />
                                <text x="10" y="45" fill="#00d2ff" font-family="monospace" font-size="8">PREVIOUS_ALL_TIME_HIGH</text>
                            </svg>
                        </div>
                    </div>
                </section>
                

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div class="lg:col-span-7 order-2 lg:order-1 aspect-video cyber-panel bg-black/40 border-t border-electric/30 p-8 flex items-center justify-center">
                            <svg viewBox="0 0 400 200" class="w-full h-full">
                                <rect x="50" y="80" width="150" height="40" fill="#00d2ff" fill-opacity="0.05" stroke="#00d2ff" stroke-width="0.5" stroke-dasharray="2" />
                                <path d="M50 100 H200 L230 40 L260 10 L300 -30" fill="none" stroke="#00d2ff" stroke-width="2" />
                                <text x="60" y="75" fill="white" font-family="monospace" font-size="8" opacity="0.5">COMPRESSION_ZONE</text>
                                <text x="235" y="60" fill="#00d2ff" font-family="monospace" font-size="8">VELOCITY_EXPANSION</text>
                            </svg>
                        </div>
                        <div class="lg:col-span-5 order-1 lg:order-2">
                            <span class="text-electric font-mono text-xs tracking-widest">02_STRATEGY</span>
                            <h2 class="text-5xl font-black italic uppercase mt-2 text-white">The TTM Squeeze</h2>
                            <div class="mt-8 space-y-6">
                                <p class="text-[11px] text-zinc-300 leading-relaxed uppercase">Based on Bollinger Bands and Keltner Channels. When price "compresses" into a narrow range, energy builds up. The "Squeeze" release is an explosive move that momentum traders ride for quick gains.</p>
                                
                                <div class="cyber-panel p-6 bg-zinc-900/40 border-l-2 border-electric">
                                    <h4 class="text-white font-bold text-[10px] uppercase mb-2 italic">Volatility Contraction</h4>
                                    <p class="text-[10px] text-zinc-500 uppercase leading-loose">The longer the stock stays in the squeeze (Stage 1), the more violent the eventual breakout (Stage 2) will be. We look for the "Dot" to turn from Red to Green on the TTM indicator.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                

                <div class="border-t border-white/10 pt-24 pb-32">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="cyber-panel p-8 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">Relative Strength (RS)</h5>
                            <p class="text-[10px] text-zinc-400 uppercase leading-relaxed">Focusing on stocks that are outperforming the S&P 500. If the market is down 1% and your stock is up 2%, it has high Relative Strength.</p>
                        </div>
                        <div class="cyber-panel p-8 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">Parabolic SAR</h5>
                            <p class="text-[10px] text-zinc-400 uppercase leading-relaxed">A trailing stop indicator that follows momentum. It helps traders stay in a winning trade as long as the vertical trend remains intact.</p>
                        </div>
                        <div class="cyber-panel p-8 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">Volume Spikes</h5>
                            <p class="text-[10px] text-zinc-400 uppercase leading-relaxed">Momentum is fueled by volume. A breakout on 5x the average daily volume is a "confirmed" momentum move.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}