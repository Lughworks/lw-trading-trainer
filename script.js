// Lughworks Core Engine
const TRADING_MODULES = [
  "dayTrading",
  "swingTrading",
  "scalping",
  "positionTrading",
  "momentumTrading",
  "algoTrading",
  "technicalTrading",
  "fundamentalTrading",
  "deliveryTrading",
  "newsTrading",
  "options", // New Module Identifier
  "risk"    // New Module Identifier
];

async function initLughworks() {
  const bootOverlay = document.getElementById("boot-loader");
  const chartLine = document.getElementById("chart-line");
  const chartHead = document.getElementById("chart-head");
  const percText = document.getElementById("boot-perc");
  const statusText = document.getElementById("boot-status");

  let points = "0,100"; // Starting point
  let currentX = 0;

  const stages = [
    { progress: 25, text: "Fetching_Liquidity_Pools", y: 70 },
    { progress: 45, text: "Scanning_Order_Books", y: 85 },
    { progress: 70, text: "Validating_Signal_Node", y: 40 },
    { progress: 100, text: "System_Synchronized", y: 20 },
  ];

  for (const stage of stages) {
    await new Promise((r) => setTimeout(r, 600));

    // Advance the graph
    currentX += 50;
    points += ` ${currentX},${stage.y}`;

    // Update SVG Elements
    chartLine.setAttribute("points", points);
    chartHead.setAttribute("cx", currentX);
    chartHead.setAttribute("cy", stage.y);

    // Update Text
    percText.innerText = `${stage.progress}.00%`;
    statusText.innerText = stage.text;
  }

  // Smooth transition to main dashboard
  setTimeout(() => {
    if (bootOverlay) {
      bootOverlay.style.opacity = "0";
      setTimeout(() => {
        bootOverlay.classList.add("hidden");
        // Trigger clock or other UI animations here
      }, 1000);
    }
  }, 400);
}

function updateClock() {
  const clockEl = document.getElementById("player-count");
  if (clockEl) {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    clockEl.innerText = `${hours}:${minutes}`;
  }
}
window.openModule = async (pageName) => {
  const mainContent = document.getElementById("landing-ui");
  const pageOverlay = document.createElement("div");
  pageOverlay.id = "module-overlay";
  pageOverlay.className =
    "fixed inset-0 z-[100] bg-[#05080a] opacity-0 transition-all duration-700 translate-x-full overflow-y-auto";

  try {
    // Points to the /modules/ folder
    const pageModule = await import(`./modules/${pageName}.js`);
    const renderFunc = pageModule.render;

    pageOverlay.innerHTML = renderFunc();
    document.body.appendChild(pageOverlay);
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      pageOverlay.classList.remove("opacity-0", "translate-x-full");
      mainContent.style.transform = "scale(0.95)";
      mainContent.style.opacity = "0";
    }, 100);
  } catch (err) {
    console.error("Module Failed to Load:", err);
  }
};

window.closeModule = () => {
  const overlay = document.getElementById("module-overlay");
  const mainContent = document.getElementById("landing-ui");
  overlay.classList.add("opacity-0", "translate-x-full");
  mainContent.style.transform = "scale(1)";
  mainContent.style.opacity = "1";
  setTimeout(() => {
    overlay.remove();
    document.body.style.overflow = "auto";
  }, 700);
};
const EXCHANGES = [
  {
    name: "NYSE",
    city: "New York",
    open: 14,
    close: 21,
    tz: "America/New_York",
  },
  { name: "LSE", city: "London", open: 8, close: 16, tz: "Europe/London" },
  { name: "HKEX", city: "Hong Kong", open: 1, close: 8, tz: "Asia/Hong_Kong" },
  { name: "TSE", city: "Tokyo", open: 0, close: 6, tz: "Asia/Tokyo" },
];

function updateMarketStatus() {
  const container = document.getElementById("market-nodes");
  if (!container) return;

  const now = new Date();

  container.innerHTML = EXCHANGES.map((ex) => {
    // Convert current time to the specific exchange's timezone
    const exTime = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      hour12: false,
      timeZone: ex.tz,
    }).format(now);

    const hour = parseInt(exTime);
    const isOpen = hour >= ex.open && hour < ex.close;
    const statusColor = isOpen ? "text-electric" : "opacity-20";
    const pulse = isOpen ? "animate-pulse" : "";

    return `
            <div class="text-right">
                <span class="block text-[7px] opacity-30 uppercase">${
                  ex.name
                }</span>
                <span class="text-[9px] ${statusColor} font-bold ${pulse}">
                    ${isOpen ? "● OPEN" : "○ CLOSED"}
                </span>
            </div>
        `;
  }).join("");
}

function checkVolatility() {
    const alertBanner = document.getElementById('volatility-alert');
    const alertMsg = document.getElementById('alert-message');
    if (!alertBanner) return;

    const now = new Date();
    const openExchanges = EXCHANGES.filter(ex => {
        const hour = parseInt(new Intl.DateTimeFormat('en-US', {
            hour: 'numeric', hour12: false, timeZone: ex.tz
        }).format(now));
        return hour >= ex.open && hour < ex.close;
    });

    // Detect Overlaps (Volatility Events)
    if (openExchanges.length >= 2) {
        const names = openExchanges.map(ex => ex.name).join(' / ');
        alertMsg.innerText = `${names} OVERLAP: PEAK LIQUIDITY`;
        alertBanner.classList.remove('hidden');
        alertBanner.classList.add('animate-pulse');
    } else if (openExchanges.some(ex => {
        const hour = parseInt(new Intl.DateTimeFormat('en-US', {
            hour: 'numeric', hour12: false, timeZone: ex.tz
        }).format(now));
        // Check for "Power Hour" (First/Last hour of exchange)
        return hour === ex.open || hour === ex.close - 1;
    })) {
        alertMsg.innerText = `MARKET_OPEN/CLOSE: EXPECT HIGH VOLATILITY`;
        alertBanner.classList.remove('hidden');
    } else {
        alertBanner.classList.add('hidden');
    }
}

// Run this every minute alongside the clock
setInterval(checkVolatility, 60000);
checkVolatility(); // Initial check

// Add this to your window.onload or init function
setInterval(updateMarketStatus, 60000); // Update every minute
updateMarketStatus();
window.onload = initLughworks;
window.addEventListener("load", () => {
  updateClock(); // Initial call
  setInterval(updateClock, 60000); // Update every 60 second
});
