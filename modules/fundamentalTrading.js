export function render() {
    return `
        <div class="fixed inset-0 bg-obsidian text-white p-6 md:p-12 blueprint-grid overflow-y-auto z-[100]">
            <div class="max-w-7xl mx-auto">
                <div class="w-full border-b border-electric/20 pb-4 mb-12 flex justify-between items-end font-mono">
                    <div class="text-[10px] text-electric animate-pulse uppercase">● Protocol: Fundamental_Valuation_Series_v1</div>
                    <button onclick="window.closeModule()" class="border border-electric text-electric py-1 px-6 text-[10px] hover:bg-electric hover:text-black transition-all uppercase font-bold italic">Return_to_Dashboard</button>
                </div>

                <div class="mb-24">
                    <span class="text-xs font-black uppercase tracking-[0.5em] text-electric">Intrinsic_Value_Series</span>
                    <h1 class="text-7xl font-black uppercase italic mt-4 tracking-tighter leading-none mb-6">FUNDA<span class="text-electric">MENTAL</span></h1>
                    <div class="h-1 w-32 bg-electric mb-8"></div>
                    <p class="max-w-2xl text-[11px] text-zinc-400 leading-relaxed uppercase">In the short run, the market is a voting machine; in the long run, it is a weighing machine. Fundamental analysis provides the "Weight." We analyze the health of an economy and the profitability of a firm to project long-term capital appreciation.</p>
                </div>

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div class="lg:col-span-5">
                            <span class="text-electric font-mono text-xs tracking-widest">01_CORE_PILLARS</span>
                            <h2 class="text-5xl font-black italic uppercase mt-2 text-white">The Financial Trifecta</h2>
                            <div class="mt-8 space-y-6">
                                <p class="text-[11px] text-zinc-300 leading-relaxed uppercase">To value a company, you must master three documents: The **Income Statement** (Revenue/Profit), the **Balance Sheet** (Assets/Liabilities), and the **Cash Flow Statement** (The actual movement of money).</p>
                                
                                <div class="cyber-panel p-6 bg-zinc-900/40 border-l-2 border-electric">
                                    <h4 class="text-white font-bold text-[10px] uppercase mb-2 italic">Cash is King</h4>
                                    <p class="text-[10px] text-zinc-500 uppercase leading-loose">Earnings can be manipulated through accounting tricks, but Cash Flow is much harder to hide. A company with high "Net Income" but negative "Operating Cash Flow" is a major red flag for fundamentalists.</p>
                                </div>

                                <ul class="space-y-3 font-mono text-[10px]">
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> EPS: Earnings Per Share growth year-over-year</li>
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> ROE: Return on Equity (Efficiency of Management)</li>
                                    <li class="flex items-center gap-2"><span class="text-electric">[!]</span> DEBT/EQUITY: Financial leverage and risk profile</li>
                                </ul>
                            </div>
                        </div>
                        <div class="lg:col-span-7 aspect-video cyber-panel bg-black/40 border-t border-electric/30 p-8 flex items-center justify-center">
                            <svg viewBox="0 0 400 220" class="w-full h-full">
                                <rect x="50" y="20" width="300" height="40" fill="none" stroke="#00d2ff" stroke-width="1" />
                                <text x="200" y="45" text-anchor="middle" fill="#00d2ff" font-family="monospace" font-size="10">REVENUE (Top Line)</text>
                                <path d="M200 60 V90" stroke="white" stroke-width="1" stroke-dasharray="4" opacity="0.5" />
                                <rect x="80" y="90" width="240" height="40" fill="none" stroke="white" stroke-width="1" opacity="0.3" />
                                <text x="200" y="115" text-anchor="middle" fill="white" font-family="monospace" font-size="10" opacity="0.5">OPERATING EXPENSES</text>
                                <path d="M200 130 V160" stroke="white" stroke-width="1" stroke-dasharray="4" opacity="0.5" />
                                <rect x="110" y="160" width="180" height="40" fill="#00d2ff" fill-opacity="0.1" stroke="#00d2ff" stroke-width="2" />
                                <text x="200" y="185" text-anchor="middle" fill="#00d2ff" font-family="monospace" font-size="10">NET INCOME (Bottom Line)</text>
                            </svg>
                        </div>
                    </div>
                </section>
                

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div class="lg:col-span-7 order-2 lg:order-1 aspect-video cyber-panel bg-black/40 border-t border-electric/30 p-8 flex flex-col justify-center">
                             <div class="space-y-6">
                                <div class="flex justify-between items-end border-b border-white/10 pb-2">
                                    <span class="text-[10px] font-mono text-zinc-400">FED_FUNDS_RATE</span>
                                    <span class="text-lg font-black text-red-500">5.50% ↑</span>
                                </div>
                                <div class="flex justify-between items-end border-b border-white/10 pb-2">
                                    <span class="text-[10px] font-mono text-zinc-400">CPI_INFLATION</span>
                                    <span class="text-lg font-black text-white">3.1% ↓</span>
                                </div>
                                <div class="flex justify-between items-end border-b border-white/10 pb-2">
                                    <span class="text-[10px] font-mono text-zinc-400">GDP_GROWTH</span>
                                    <span class="text-lg font-black text-electric">2.4%</span>
                                </div>
                             </div>
                        </div>
                        <div class="lg:col-span-5 order-1 lg:order-2">
                            <span class="text-electric font-mono text-xs tracking-widest">02_MACRO_OVERLAY</span>
                            <h2 class="text-5xl font-black italic uppercase mt-2 text-white">Macro Analysis</h2>
                            <div class="mt-8 space-y-6">
                                <p class="text-[11px] text-zinc-300 leading-relaxed uppercase">A great company can still fail if the economy collapses. Fundamentalists watch the "Big Three": Interest Rates (Cost of Capital), Inflation (Purchasing Power), and GDP (Economic Output).</p>
                                
                                <div class="cyber-panel p-6 bg-zinc-900/40 border-l-2 border-electric">
                                    <h4 class="text-white font-bold text-[10px] uppercase mb-2 italic">The Yield Curve</h4>
                                    <p class="text-[10px] text-zinc-500 uppercase leading-loose">One of the most powerful fundamental tools. When short-term interest rates are higher than long-term rates (an Inverted Yield Curve), it has historically predicted every major recession.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                

                <div class="border-t border-white/10 pt-24 pb-32">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="cyber-panel p-6 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">P/E Ratio</h5>
                            <p class="text-[9px] text-zinc-400 leading-relaxed uppercase">Price-to-Earnings. Tells you how much the market is willing to pay for $1 of the company's profit.</p>
                        </div>
                        <div class="cyber-panel p-6 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">Economic Moat</h5>
                            <p class="text-[9px] text-zinc-400 leading-relaxed uppercase">A competitive advantage (like Brand, Patents, or Network Effects) that protects the business from rivals.</p>
                        </div>
                        <div class="cyber-panel p-6 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">DCF Valuation</h5>
                            <p class="text-[9px] text-zinc-400 leading-relaxed uppercase">Discounted Cash Flow. A mathematical model that calculates the present value of all future cash a company will generate.</p>
                        </div>
                        <div class="cyber-panel p-6 bg-zinc-900/20 border-t border-white/5">
                            <h5 class="text-electric font-bold text-[10px] uppercase mb-2 italic">Insider Trading</h5>
                            <p class="text-[9px] text-zinc-400 leading-relaxed uppercase">Monitoring Form 4 filings to see if CEOs and Directors are buying or selling their own company's stock.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}