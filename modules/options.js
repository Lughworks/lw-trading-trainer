export function render() {
    return `
        <div class="fixed inset-0 bg-obsidian text-white p-6 md:p-12 blueprint-grid overflow-y-auto z-[100]">
            <div class="max-w-7xl mx-auto">
                <div class="w-full border-b border-electric/20 pb-4 mb-12 flex justify-between items-end font-mono">
                    <div class="text-[10px] text-electric animate-pulse uppercase">● Protocol: Derivative_Leverage_v1</div>
                    <button onclick="window.closeModule()" class="border border-electric text-electric py-1 px-6 text-[10px] hover:bg-electric hover:text-black transition-all uppercase font-bold italic">Return_to_Dashboard</button>
                </div>

                <div class="mb-24">
                    <span class="text-xs font-black uppercase tracking-[0.5em] text-electric">Derivatives_Series</span>
                    <h1 class="text-7xl font-black uppercase italic mt-4 tracking-tighter leading-none mb-6">OPTIONS<span class="text-electric">TRADING</span></h1>
                    <div class="h-1 w-32 bg-electric mb-8"></div>
                    <p class="max-w-2xl text-[11px] text-zinc-400 leading-relaxed uppercase">Options are contracts that give you the right, but not the obligation, to buy or sell an asset. They allow for asymmetrical risk—where your downside is limited to the premium paid, but your upside is theoretically infinite.</p>
                </div>

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div class="lg:col-span-5">
                            <span class="text-electric font-mono text-xs tracking-widest">01_THE_MATHEMATICS</span>
                            <h2 class="text-5xl font-black italic uppercase mt-2 text-white">The Greeks</h2>
                            <div class="mt-8 space-y-6">
                                <p class="text-[11px] text-zinc-300 leading-relaxed uppercase">Option pricing is governed by four variables. To trade options, you must manage these mathematical forces simultaneously.</p>
                                
                                <div class="grid grid-cols-2 gap-4 font-mono">
                                    <div class="border border-white/10 p-3"><span class="text-electric text-[10px]">DELTA</span><p class="text-[8px] opacity-50">Sensitivity to price move.</p></div>
                                    <div class="border border-white/10 p-3"><span class="text-electric text-[10px]">THETA</span><p class="text-[8px] opacity-50">Time decay (The silent killer).</p></div>
                                    <div class="border border-white/10 p-3"><span class="text-electric text-[10px]">VEGA</span><p class="text-[8px] opacity-50">Sensitivity to Volatility.</p></div>
                                    <div class="border border-white/10 p-3"><span class="text-electric text-[10px]">GAMMA</span><p class="text-[8px] opacity-50">Rate of change of Delta.</p></div>
                                </div>
                            </div>
                        </div>
                        <div class="lg:col-span-7 aspect-video cyber-panel bg-black/40 border-t border-electric/30 p-8 flex items-center justify-center">
                            
                            <svg viewBox="0 0 400 200" class="w-full h-full">
                                <line x1="50" y1="150" x2="350" y2="150" stroke="white" stroke-width="1" opacity="0.3" /> <path d="M50 180 L200 150 L350 50" fill="none" stroke="#00d2ff" stroke-width="2" /> <text x="210" y="165" fill="#00d2ff" font-family="monospace" font-size="8">BREAK_EVEN</text>
                                <text x="50" y="195" fill="red" font-family="monospace" font-size="8" opacity="0.6">MAX_LOSS (PREMIUM)</text>
                            </svg>
                        </div>
                    </div>
                </section>

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div class="lg:col-span-12 cyber-panel p-12 bg-zinc-900/20 border-l-4 border-electric">
                            <h3 class="text-2xl font-black italic uppercase">Risk-Defined Spreads</h3>
                            <p class="text-[10px] text-zinc-400 mt-4 uppercase max-w-xl">Buying naked options is gambling against Theta. Professional traders use **Vertical Spreads**—buying one option and selling another—to cancel out time decay and reduce the cost of the trade.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    `;
}