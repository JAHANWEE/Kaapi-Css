(() => {
    // ─── Static Classes ───────────────────────────────────────────────────────
    const staticClasses = {
        // 🌿 Base
        "kaapi-bg-soft": "background-color: #f1f5f9",
        "kaapi-card": "background: white; padding: 20px; border-radius: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.08)",

        // 🎨 Colors
        "kaapi-bg-blue": "background-color: #3b82f6",
        "kaapi-bg-purple": "background-color: #6D4FC2",
        "kaapi-bg-purple-light": "background-color: #9B7FE0",
        "kaapi-bg-purple-dark": "background-color: #0C0724",
        "kaapi-bg-purple-pale": "background-color: #EDE9F8",
        "kaapi-text-white": "color: white",
        "kaapi-text-dark": "color: #1e293b",
        "kaapi-text-muted": "color: #C4AEFF",
        "kaapi-text-purple": "color: #6D4FC2",
        "kaapi-text-purple-light": "color: #C4AEFF",

        // 🔠 Typography
        "kaapi-text-xs": "font-size: 12px",
        "kaapi-text-sm": "font-size: 14px",
        "kaapi-text-md": "font-size: 16px",
        "kaapi-text-lg": "font-size: 20px",
        "kaapi-text-xl": "font-size: 24px",
        "kaapi-text-2xl": "font-size: 32px",
        "kaapi-text-3xl": "font-size: 48px",
        "kaapi-font-bold": "font-weight: bold",
        "kaapi-font-semibold": "font-weight: 600",
        "kaapi-font-normal": "font-weight: 400",
        "kaapi-italic": "font-style: italic",
        "kaapi-uppercase": "text-transform: uppercase",
        "kaapi-lowercase": "text-transform: lowercase",
        "kaapi-capitalize": "text-transform: capitalize",
        "kaapi-tracking-wide": "letter-spacing: 0.05em",
        "kaapi-leading-loose": "line-height: 1.8",

        // 🔲 Border
        "kaapi-rounded-sm": "border-radius: 4px",
        "kaapi-rounded-md": "border-radius: 8px",
        "kaapi-rounded-lg": "border-radius: 16px",
        "kaapi-rounded-full": "border-radius: 9999px",
        "kaapi-border": "border: 1px solid #e2e8f0",
        "kaapi-border-purple": "border: 1px solid #7A1CAC",
        "kaapi-border-none": "border: none",

        // 🧱 Layout
        "kaapi-flex": "display: flex",
        "kaapi-inline-flex": "display: inline-flex",
        "kaapi-block": "display: block",
        "kaapi-inline": "display: inline",
        "kaapi-hidden": "display: none",
        "kaapi-grid": "display: grid",
        "kaapi-flex-col": "flex-direction: column",
        "kaapi-flex-row": "flex-direction: row",
        "kaapi-flex-wrap": "flex-wrap: wrap",
        "kaapi-justify-center": "justify-content: center",
        "kaapi-justify-between": "justify-content: space-between",
        "kaapi-justify-end": "justify-content: flex-end",
        "kaapi-justify-start": "justify-content: flex-start",
        "kaapi-items-center": "align-items: center",
        "kaapi-items-start": "align-items: flex-start",
        "kaapi-items-end": "align-items: flex-end",

        // 📐 Container
        "kaapi-container": "max-width: 960px; margin: 0 auto; padding: 0 16px",
        "kaapi-container-sm": "max-width: 600px; margin: 0 auto; padding: 0 16px",

        // 🎯 Utility
        "kaapi-text-center": "text-align: center",
        "kaapi-text-left": "text-align: left",
        "kaapi-text-right": "text-align: right",
        "kaapi-cursor-pointer": "cursor: pointer",
        "kaapi-overflow-hidden": "overflow: hidden",
        "kaapi-relative": "position: relative",
        "kaapi-absolute": "position: absolute",
        "kaapi-w-full": "width: 100%",
        "kaapi-h-full": "height: 100%",
        "kaapi-opacity-50": "opacity: 0.5",
        "kaapi-opacity-75": "opacity: 0.75",

        // 👤 Profile Image
        "kaapi-avatar": "width: 90px; height: 90px; border-radius: 50%; object-fit: cover",
        "kaapi-avatar-lg": "width: 120px; height: 120px; border-radius: 50%; object-fit: cover",

        // ✨ Transitions
        "kaapi-transition": "transition: all 0.2s ease",
        "kaapi-transition-slow": "transition: all 0.4s ease",

        // 🌙 Dark mode
        "kaapi-dark-bg": "background-color: #0C0724",
        "kaapi-dark-card": "background-color: #1C1050; color: #EDE9F8",
        "kaapi-dark-text": "color: #EDE9F8",
        "kaapi-dark-btn": "background-color: #6D4FC2; color: white",
        "kaapi-dark-muted": "color: #C4AEFF",

        // 🧠 Center full screen
        "kaapi-full-center": "min-height: 100vh; display: flex; justify-content: center; align-items: center; flex-direction: column",

        // 🏷️ Tags
        "kaapi-tag": "background: rgba(109,79,194,0.15); color: #EDE9F8; padding: 4px 10px; border-radius: 999px; font-size: 12px",
        "kaapi-tag-dark": "background: #0C0724; color: #C4AEFF; padding: 4px 10px; border-radius: 999px; font-size: 12px",

        // 📦 Shadows
        "kaapi-shadow-sm": "box-shadow: 0 1px 4px rgba(0,0,0,0.08)",
        "kaapi-shadow": "box-shadow: 0 4px 12px rgba(0,0,0,0.1)",
        "kaapi-shadow-lg": "box-shadow: 0 8px 24px rgba(0,0,0,0.15)",
        "kaapi-shadow-purple": "box-shadow: 0 4px 16px rgba(109,79,194,0.4)",
    };

    // ─── Dynamic Class Rules ──────────────────────────────────────────────────
    // Maps prefix → CSS property
    // Usage: kaapi-p-4 → padding: 4px
    //        kaapi-mt-8 → margin-top: 8px
    //        kaapi-br-4 → border-radius: 4px
    //        kaapi-fs-16 → font-size: 16px
    //        kaapi-lh-2 → line-height: 2
    //        kaapi-z-10 → z-index: 10
    //        kaapi-op-80 → opacity: 0.80
    //        kaapi-w-200 → width: 200px
    //        kaapi-h-200 → height: 200px
    //        kaapi-gap-4 → gap: 4px
    //        kaapi-border-2 → border-width: 2px

    const dynamicRules = [
        // Padding
        { prefix: "kaapi-p-",   prop: "padding",         unit: "px" },
        { prefix: "kaapi-pt-",  prop: "padding-top",     unit: "px" },
        { prefix: "kaapi-pb-",  prop: "padding-bottom",  unit: "px" },
        { prefix: "kaapi-pl-",  prop: "padding-left",    unit: "px" },
        { prefix: "kaapi-pr-",  prop: "padding-right",   unit: "px" },
        { prefix: "kaapi-px-",  prop: ["padding-left", "padding-right"], unit: "px" },
        { prefix: "kaapi-py-",  prop: ["padding-top", "padding-bottom"], unit: "px" },

        // Margin
        { prefix: "kaapi-m-",   prop: "margin",          unit: "px" },
        { prefix: "kaapi-mt-",  prop: "margin-top",      unit: "px" },
        { prefix: "kaapi-mb-",  prop: "margin-bottom",   unit: "px" },
        { prefix: "kaapi-ml-",  prop: "margin-left",     unit: "px" },
        { prefix: "kaapi-mr-",  prop: "margin-right",    unit: "px" },
        { prefix: "kaapi-mx-",  prop: ["margin-left", "margin-right"],   unit: "px" },
        { prefix: "kaapi-my-",  prop: ["margin-top", "margin-bottom"],   unit: "px" },

        // Border radius
        { prefix: "kaapi-br-",  prop: "border-radius",   unit: "px" },

        // Border width
        { prefix: "kaapi-bw-",  prop: "border-width",    unit: "px" },

        // Font size
        { prefix: "kaapi-fs-",  prop: "font-size",       unit: "px" },

        // Line height (unitless)
        { prefix: "kaapi-lh-",  prop: "line-height",     unit: "" },

        // Gap
        { prefix: "kaapi-gap-", prop: "gap",             unit: "px" },

        // Width / Height
        { prefix: "kaapi-w-",   prop: "width",           unit: "px" },
        { prefix: "kaapi-h-",   prop: "height",          unit: "px" },

        // Z-index (unitless)
        { prefix: "kaapi-z-",   prop: "z-index",         unit: "" },

        // Opacity (divided by 100)
        { prefix: "kaapi-op-",  prop: "opacity",         unit: "", transform: v => v / 100 },

        // Top / Right / Bottom / Left
        { prefix: "kaapi-top-",    prop: "top",    unit: "px" },
        { prefix: "kaapi-right-",  prop: "right",  unit: "px" },
        { prefix: "kaapi-bottom-", prop: "bottom", unit: "px" },
        { prefix: "kaapi-left-",   prop: "left",   unit: "px" },
    ];

    // ─── CSS keyword passthrough (no unit, no transform) ─────────────────────
    // These are valid non-numeric CSS values that dynamic rules should accept.
    const CSS_KEYWORDS = new Set([
        "auto", "inherit", "initial", "unset", "revert",
        "none", "normal", "fit-content", "max-content", "min-content",
        "100%", "50%", "25%", "75%", "33%", "66%",
    ]);

    // ─── Dynamic resolver ────────────────────────────────────────────────────
    function resolveDynamic(cls) {
        for (const rule of dynamicRules) {
            if (!cls.startsWith(rule.prefix)) continue;

            const raw = cls.slice(rule.prefix.length);
            const num = parseFloat(raw);

            let css;
            if (!isNaN(num)) {
                // numeric value — apply unit and optional transform
                const val = rule.transform ? rule.transform(num) : num;
                css = rule.unit ? `${val}${rule.unit}` : `${val}`;
            } else if (CSS_KEYWORDS.has(raw)) {
                // keyword value — pass through as-is, no unit, no transform
                css = raw;
            } else {
                continue; // unknown value, skip
            }

            if (Array.isArray(rule.prop)) {
                return rule.prop.map(p => `${p}: ${css}`).join("; ");
            }
            return `${rule.prop}: ${css}`;
        }
        return null;
    }

    // ─── Core apply function ─────────────────────────────────────────────────
    function applyKaapiStyles(ele) {
        const classes = ele.className.split(" ");
        let finalStr = "";

        classes.forEach(cls => {
            if (!cls.startsWith("kaapi")) return;

            if (staticClasses[cls]) {
                finalStr += staticClasses[cls] + "; ";
            } else {
                const dynamic = resolveDynamic(cls);
                if (dynamic) finalStr += dynamic + "; ";
            }
        });

        if (finalStr) ele.style.cssText += finalStr;
    }

    // ─── Init ─────────────────────────────────────────────────────────────────
    window.addEventListener("DOMContentLoaded", () => {
        document.body.style.fontFamily = "system-ui, sans-serif";

        const elements = Array.from(document.querySelectorAll('[class*="kaapi"]'));
        elements.forEach(applyKaapiStyles);

        // expose globally so pages can call it after dynamic DOM changes
        window.kaapi = { apply: applyKaapiStyles };

        // ── index.html specific buttons ──────────────────────────────────────
        const btn = document.getElementById("connectBtn");
        const darkBtn = document.getElementById("darkBtn");
        const card = document.getElementById("card");

        if (btn) btn.addEventListener("click", () => alert("Connected ✅. Thanks for reaching out!"));

        if (darkBtn && card) {
            darkBtn.addEventListener("click", () => {
                document.body.classList.toggle("kaapi-dark-bg");
                card.classList.toggle("kaapi-dark-card");
                applyKaapiStyles(document.body);
                applyKaapiStyles(card);
            });
        }
    });
})();
