export function render() {
    return `
        <div class="fixed inset-0 bg-obsidian text-white p-6 md:p-12 blueprint-grid overflow-y-auto z-[100]">
            <div class="max-w-7xl mx-auto">
                <div class="w-full border-b border-electric/20 pb-4 mb-12 flex justify-between items-end font-mono">
                    <div class="text-[10px] text-electric animate-pulse uppercase">● Protocol: Scalping_Technical_Manual_v1</div>
                    <button onclick="window.closeModule()" class="border border-electric text-electric py-1 px-6 text-[10px] hover:bg-electric hover:text-black transition-all uppercase font-bold italic">Return_to_Dashboard</button>
                </div>

                <div class="mb-24">
                    <span class="text-xs font-black uppercase tracking-[0.5em] text-electric">Precision_Execution_Series</span>
                    <h1 class="text-7xl font-black uppercase italic mt-4 tracking-tighter leading-none mb-6">SCALP<span class="text-electric">ING</span></h1>
                    <div class="h-1 w-32 bg-electric mb-8"></div>
                    <p class="max-w-2xl text-[11px] text-zinc-400 leading-relaxed uppercase">Scalping is the art of capturing high-frequency micro-moves. We ignore the 'Big Picture' to focus on millisecond imbalances in the Bid-Ask spread. In this domain, speed is the only indicator that matters.</p>
                </div>

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div class="lg:col-span-5">
                            <span class="text-electric font-mono text-xs tracking-widest">01_STRATEGY</span>
                            <h2 class="text-5xl font-black italic uppercase mt-2 text-white">The 9/20 EMA Cross</h2>
                            <div class="mt-8 space-y-6">
                                <p class="text-[11px] text-zinc-300 leading-relaxed uppercase">The most reliable momentum signal for scalpers. When the 9-period Exponential Moving Average (EMA) crosses the 20-period EMA on a 1-minute chart, it signals an immediate trend shift.</p>
                                
                                <div class="cyber-panel p-6 bg-zinc-900/40 border-l-2 border-electric">
                                    <h4 class="text-white font-bold text-[10px] uppercase mb-2 italic">The "Snap" Execution</h4>
                                    <p class="text-[10px] text-zinc-500 uppercase leading-loose">Scalpers do not wait for candle closes. We enter as the lines touch (the 'Snap') and exit the moment the price deviates 0.10% from the entry. Success depends on high-leverage and rapid profit-taking.</p>
                                </div>

                                <ul class="space-y-3 font-mono text-[10px]">
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> TIME_FRAME: 1-Minute or 2,000 Tick Chart</li>
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> STOP_LOSS: 2-3 Cents below the 20 EMA</li>
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> TARGET: First sign of volume exhaustion</li>
                                </ul>
                            </div>
                        </div>
                        <div class="lg:col-span-7 aspect-video cyber-panel bg-black/40 border-t border-electric/30 flex items-center justify-center p-8">
                            <svg viewBox="0 0 400 200" class="w-full h-full">
                                <path d="M50 160 Q 150 150, 250 80 T 350 40" fill="none" stroke="#00d2ff" stroke-width="2" /> <path d="M50 170 Q 150 165, 250 110 T 350 80" fill="none" stroke="white" stroke-width="1.5" opacity="0.3" /> <circle cx="210" cy="98" r="10" stroke="#00d2ff" stroke-width="1" fill="none" class="animate-pulse" />
                                <text x="225" y="110" fill="#00d2ff" font-family="monospace" font-size="8">MOMENTUM_SNAP</text>
                            </svg>
                        </div>
                    </div>
                </section>

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div class="lg:col-span-7 order-2 lg:order-1 aspect-video cyber-panel bg-black/40 border-t border-electric/30 p-8">
                            <div class="grid grid-cols-2 gap-8 h-full font-mono text-[10px]">
                                <div class="space-y-2">
                                    <div class="text-electric/50 text-[8px] mb-4">BID_SIDE (BUYERS)</div>
                                    <div class="flex justify-between text-green-400"><span>142.10</span><span class="bg-green-400/20 px-2">8,500</span></div>
                                    <div class="flex justify-between text-green-400"><span>142.09</span><span>2,100</span></div>
                                    <div class="flex justify-between text-green-400/50"><span>142.08</span><span>1,400</span></div>
                                    <div class="flex justify-between text-green-400/30"><span>142.05</span><span>900</span></div>
                                </div>
                                <div class="space-y-2">
                                    <div class="text-red-500/50 text-[8px] mb-4">ASK_SIDE (SELLERS)</div>
                                    <div class="flex justify-between text-red-400"><span>142.11</span><span>400</span></div>
                                    <div class="flex justify-between text-red-400"><span>142.12</span><span>650</span></div>
                                    <div class="flex justify-between text-red-400"><span>142.15</span><span>1,100</span></div>
                                    <div class="flex justify-between text-red-400 font-bold bg-red-400/10"><span>142.20</span><span class="bg-red-400/20 px-2">15,000</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="lg:col-span-5 order-1 lg:order-2">
                            <span class="text-electric font-mono text-xs tracking-widest">02_STRATEGY</span>
                            <h2 class="text-5xl font-black italic uppercase mt-2 text-white">Order Flow / Tape</h2>
                            <div class="mt-8 space-y-6">
                                <p class="text-[11px] text-zinc-300 leading-relaxed uppercase">Tape reading is the ultimate scalping skill. By watching 'Level 2' depth and 'Time & Sales', we identify where institutional "Walls" are hidden before they appear on any chart.</p>
                                
                                <div class="cyber-panel p-6 bg-zinc-900/40 border-l-2 border-electric">
                                    <h4 class="text-white font-bold text-[10px] uppercase mb-2 italic">Spotting the "Squeeze"</h4>
                                    <p class="text-[10px] text-zinc-500 uppercase leading-loose">If you see a massive 'Ask' (Seller) getting eaten by small, fast 'Bids', a squeeze is imminent. We buy the moment that wall breaks for a 3-5 second burst of profit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="border-t border-white/10 pt-24 pb-32">
                    <div class="text-center mb-16">
                        <h3 class="text-3xl font-black italic uppercase">The Scalper's Toolbox</h3>
                        <p class="text-[10px] text-zinc-500 mt-2 uppercase tracking-widest">Critical definitions for high-frequency environments</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="cyber-panel p-6 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">Bid-Ask Spread</h5>
                            <p class="text-[9px] text-zinc-400 leading-relaxed uppercase">The gap between the highest buyer and lowest seller. In low-float stocks, a wide spread is a scalper's greatest risk.</p>
                        </div>
                        <div class="cyber-panel p-6 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">Direct Routing</h5>
                            <p class="text-[9px] text-zinc-400 leading-relaxed uppercase">Bypassing retail brokers to send orders directly to exchanges like ARCA or NASDAQ to save milliseconds on fills.</p>
                        </div>
                        <div class="cyber-panel p-6 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">Slippage Management</h5>
                            <p class="text-[9px] text-zinc-400 leading-relaxed uppercase">The difference between expected price and executed price. Scalpers use 'Limit' orders to prevent toxic slippage.</p>
                        </div>
                        <div class="cyber-panel p-6 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">Hotkeys</h5>
                            <p class="text-[9px] text-zinc-400 leading-relaxed uppercase">Programming keyboard shortcuts to execute and cancel orders instantly. Mice are too slow for professional scalping.</p>
                        </div>
                    </div>
                </div>

                <div class="mb-40">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="p-8 border border-electric/10 bg-electric/5">
                            <h4 class="text-xl font-black italic uppercase text-electric">The Micro-Breakout</h4>
                            <p class="text-[10px] text-zinc-400 mt-2 uppercase leading-relaxed">Trading the break of a 1-minute high. Total trade duration: 30 seconds.</p>
                        </div>
                        <div class="p-8 border border-white/10 bg-zinc-900/20">
                            <h4 class="text-xl font-black italic uppercase text-white">The Fade</h4>
                            <p class="text-[10px] text-zinc-400 mt-2 uppercase leading-relaxed">Shorting a stock that has become "extended" from its moving averages. Profiting on the pull-back.</p>
                        </div>
                        <div class="p-8 border border-white/10 bg-zinc-900/20">
                            <h4 class="text-xl font-black italic uppercase text-white">The VWAP Scalp</h4>
                            <p class="text-[10px] text-zinc-400 mt-2 uppercase leading-relaxed">Buying the instant price touches the daily volume-average line. A high-probability algorithmic bounce point.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}