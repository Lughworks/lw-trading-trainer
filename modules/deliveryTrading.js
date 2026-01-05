export function render() {
    return `
        <div class="fixed inset-0 bg-obsidian text-white p-6 md:p-12 blueprint-grid overflow-y-auto z-[100]">
            <div class="max-w-7xl mx-auto">
                <div class="w-full border-b border-electric/20 pb-4 mb-12 flex justify-between items-end font-mono">
                    <div class="text-[10px] text-electric animate-pulse uppercase">● Protocol: Asset_Ownership_Series_v1</div>
                    <button onclick="window.closeModule()" class="border border-electric text-electric py-1 px-6 text-[10px] hover:bg-electric hover:text-black transition-all uppercase font-bold italic">Return_to_Dashboard</button>
                </div>

                <div class="mb-24">
                    <span class="text-xs font-black uppercase tracking-[0.5em] text-electric">Wealth_Accumulation_Series</span>
                    <h1 class="text-7xl font-black uppercase italic mt-4 tracking-tighter leading-none mb-6">DELIVERY<span class="text-electric">TRADING</span></h1>
                    <div class="h-1 w-32 bg-electric mb-8"></div>
                    <p class="max-w-2xl text-[11px] text-zinc-400 leading-relaxed uppercase">Delivery trading removes the pressure of "time." By holding assets beyond the intraday cycle, traders bypass short-term volatility to participate in the long-term growth of an enterprise. This is the domain of the 100x return.</p>
                </div>

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div class="lg:col-span-5">
                            <span class="text-electric font-mono text-xs tracking-widest">01_STRATEGIC_EDGE</span>
                            <h2 class="text-5xl font-black italic uppercase mt-2 text-white">Compounding</h2>
                            <div class="mt-8 space-y-6">
                                <p class="text-[11px] text-zinc-300 leading-relaxed uppercase">The "Eighth Wonder of the World." Delivery trading allows you to reinvest dividends and benefit from exponential growth. Small gains, when held for decades, transform into life-changing capital.</p>
                                
                                <div class="cyber-panel p-6 bg-zinc-900/40 border-l-2 border-electric">
                                    <h4 class="text-white font-bold text-[10px] uppercase mb-2 italic">Corporate Actions</h4>
                                    <p class="text-[10px] text-zinc-500 uppercase leading-loose">As a delivery trader, you are entitled to **Stock Splits**, **Bonus Issues**, and **Dividends**. These actions increase your share count over time without requiring additional out-of-pocket investment.</p>
                                </div>

                                <ul class="space-y-3 font-mono text-[10px]">
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> TIME_HORIZON: 1 Year to 30 Years</li>
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> MARGIN: 100% Cash (No leverage/interest)</li>
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> TAX: Long-Term Capital Gains (LTCG) advantages</li>
                                </ul>
                            </div>
                        </div>
                        <div class="lg:col-span-7 aspect-video cyber-panel bg-black/40 border-t border-electric/30 flex items-center justify-center p-8">
                            <svg viewBox="0 0 400 200" class="w-full h-full">
                                <path d="M50 180 Q 250 175, 380 20" fill="none" stroke="#00d2ff" stroke-width="3" class="animate-pulse" />
                                <line x1="50" y1="180" x2="380" y2="180" stroke="white" stroke-width="1" opacity="0.2" />
                                <text x="60" y="195" fill="white" font-family="monospace" font-size="8" opacity="0.5">TIME (YEARS)</text>
                                <text x="320" y="50" fill="#00d2ff" font-family="monospace" font-size="10" font-weight="bold">EXPONENTIAL_PHASE</text>
                            </svg>
                        </div>
                    </div>
                </section>
                

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div class="lg:col-span-7 order-2 lg:order-1 aspect-video cyber-panel bg-black/40 border-t border-electric/30 p-8 flex flex-col justify-center">
                            <div class="grid grid-cols-3 gap-4">
                                <div class="p-4 border border-white/10 text-center">
                                    <div class="text-[8px] text-zinc-500 mb-2">ENTRY_PHASE</div>
                                    <div class="text-lg font-black text-white">$1,000</div>
                                </div>
                                <div class="p-4 border border-electric/20 bg-electric/5 text-center">
                                    <div class="text-[8px] text-electric mb-2">10_YEARS_DRIP</div>
                                    <div class="text-lg font-black text-electric">$8,450</div>
                                </div>
                                <div class="p-4 border border-white/10 text-center">
                                    <div class="text-[8px] text-zinc-500 mb-2">25_YEARS_HOLD</div>
                                    <div class="text-lg font-black text-white">$124,000</div>
                                </div>
                            </div>
                        </div>
                        <div class="lg:col-span-5 order-1 lg:order-2">
                            <span class="text-electric font-mono text-xs tracking-widest">02_PORTFOLIO_CONSTRUCTION</span>
                            <h2 class="text-5xl font-black italic uppercase mt-2 text-white">Multibaggers</h2>
                            <div class="mt-8 space-y-6">
                                <p class="text-[11px] text-zinc-300 leading-relaxed uppercase">A "Multibagger" is a stock that returns multiple times its initial cost. Delivery trading is the only way to capture 1,000%+ moves in small-cap companies that grow into industry giants.</p>
                                
                                <div class="cyber-panel p-6 bg-zinc-900/40 border-l-2 border-electric">
                                    <h4 class="text-white font-bold text-[10px] uppercase mb-2 italic">Conviction > Analysis</h4>
                                    <p class="text-[10px] text-zinc-500 uppercase leading-loose">The hardest part of delivery trading is not finding the stock, but holding it through 30-40% drawdowns. True investors understand that price fluctuations are temporary, but business value is permanent.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="border-t border-white/10 pt-24 pb-32">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="cyber-panel p-6 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">Demat Account</h5>
                            <p class="text-[9px] text-zinc-400 leading-relaxed uppercase">The digital repository where your delivered shares are "parked" as legal proof of ownership.</p>
                        </div>
                        <div class="cyber-panel p-6 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">STT (Taxation)</h5>
                            <p class="text-[9px] text-zinc-400 leading-relaxed uppercase">Securities Transaction Tax. Usually higher for delivery trades than intraday, but offset by lower income tax rates on long-term gains.</p>
                        </div>
                        <div class="cyber-panel p-6 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">Dividend Yield</h5>
                            <p class="text-[9px] text-zinc-400 leading-relaxed uppercase">The annual percentage of the stock price paid back to you in cash. Essential for passive income portfolios.</p>
                        </div>
                        <div class="cyber-panel p-6 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">Blue Chip Stocks</h5>
                            <p class="text-[9px] text-zinc-400 leading-relaxed uppercase">Nationally recognized, well-established, and financially sound companies—the backbone of most delivery portfolios.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}