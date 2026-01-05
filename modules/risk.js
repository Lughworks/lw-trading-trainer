export function render() {
    return `
        <div class="fixed inset-0 bg-obsidian text-white p-6 md:p-12 blueprint-grid overflow-y-auto z-[100]">
            <div class="max-w-7xl mx-auto">
                <div class="w-full border-b border-red-500/20 pb-4 mb-12 flex justify-between items-end font-mono">
                    <div class="text-[10px] text-red-500 animate-pulse uppercase">● Protocol: Capital_Preservation_v1</div>
                    <button onclick="window.closeModule()" class="border border-red-500 text-red-500 py-1 px-6 text-[10px] hover:bg-red-500 hover:text-black transition-all uppercase font-bold italic">Return_to_Dashboard</button>
                </div>

                <div class="mb-24">
                    <span class="text-xs font-black uppercase tracking-[0.5em] text-red-500">Survival_Series</span>
                    <h1 class="text-7xl font-black uppercase italic mt-4 tracking-tighter leading-none mb-6">RISK<span class="text-red-500">MANAGEMENT</span></h1>
                    <div class="h-1 w-32 bg-red-500 mb-8"></div>
                    <p class="max-w-2xl text-[11px] text-zinc-400 leading-relaxed uppercase">Amateurs focus on how much they can make. Professionals focus on how much they can lose. Risk management is the only reason traders survive long enough to become profitable.</p>
                </div>

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div class="lg:col-span-5">
                            <h2 class="text-4xl font-black italic uppercase text-white">The 1% Rule</h2>
                            <p class="mt-6 text-[11px] text-zinc-300 uppercase leading-relaxed">Never risk more than 1% of your total account equity on a single trade. If you have $10,000, your maximum loss per trade is $100. This allows you to survive a 10-trade losing streak and still have 90% of your capital.</p>
                        </div>
                        <div class="lg:col-span-7 cyber-panel bg-black/40 border-t border-red-500/30 p-8">
                            <div class="space-y-4 font-mono">
                                <div class="flex justify-between border-b border-white/5 pb-2">
                                    <span class="text-[10px] text-zinc-500">ACCOUNT_SIZE</span>
                                    <span class="text-white">$10,000</span>
                                </div>
                                <div class="flex justify-between border-b border-white/5 pb-2">
                                    <span class="text-[10px] text-zinc-500">RISK_PERCENT</span>
                                    <span class="text-red-500">1.00%</span>
                                </div>
                                <div class="flex justify-between border-b border-white/5 pb-2">
                                    <span class="text-[10px] text-zinc-500">MAX_LOSS_DOLLARS</span>
                                    <span class="text-red-500">$100.00</span>
                                </div>
                                <div class="bg-red-500/10 p-4 mt-4">
                                    <p class="text-[9px] text-red-500">POSITION_SIZE = (MAX_LOSS) / (ENTRY - STOP_LOSS)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div class="lg:col-span-12">
                            <h2 class="text-4xl font-black italic uppercase text-center mb-12">Risk to Reward (R:R)</h2>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div class="p-8 border border-white/10 bg-zinc-900/20">
                                    <span class="text-red-500 font-mono text-xs">1:1 Ratio</span>
                                    <p class="text-[9px] mt-2 opacity-50">You must be right 51% of the time to break even. High stress.</p>
                                </div>
                                <div class="p-8 border border-white/10 bg-zinc-900/20">
                                    <span class="text-yellow-500 font-mono text-xs">1:2 Ratio</span>
                                    <p class="text-[9px] mt-2 opacity-50">You only need a 33% win rate to be profitable. Sustainable.</p>
                                </div>
                                <div class="p-8 border border-electric/40 bg-electric/5">
                                    <span class="text-electric font-mono text-xs">1:3 Ratio</span>
                                    <p class="text-[9px] mt-2 opacity-50">You can be wrong 70% of the time and still make money. Professional Level.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
        </div>
    `;
}