// ─── Kaapi Playground ────────────────────────────────────────────────────────
// Keeps all playground logic separate from kaapi.js

(function () {
    const QUICK_CLASSES = [
        "kaapi-p-16", "kaapi-m-8", "kaapi-px-24", "kaapi-py-12",
        "kaapi-rounded-md", "kaapi-rounded-full", "kaapi-br-20",
        "kaapi-fs-20", "kaapi-font-bold", "kaapi-font-semibold",
        "kaapi-text-center", "kaapi-uppercase", "kaapi-tracking-wide",
        "kaapi-flex", "kaapi-flex-col", "kaapi-gap-12",
        "kaapi-justify-center", "kaapi-items-center",
        "kaapi-bg-purple", "kaapi-bg-purple-dark",
        "kaapi-text-white", "kaapi-text-purple", "kaapi-text-muted",
        "kaapi-shadow", "kaapi-shadow-purple", "kaapi-shadow-lg",
        "kaapi-transition", "kaapi-cursor-pointer",
        "kaapi-w-full", "kaapi-op-75",
    ];

    const DEFAULT_HTML = `<div class="kaapi-p-24 kaapi-rounded-md kaapi-bg-purple kaapi-text-white kaapi-text-center kaapi-shadow-purple">
  <p class="kaapi-font-bold kaapi-fs-18">Hello, Kaapi ✦</p>
  <p class="kaapi-fs-13 kaapi-op-75">Edit the classes to see changes</p>
</div>`;

    function renderPreview(html) {
        const preview = document.getElementById("pg-preview");
        if (!preview) return;
        preview.innerHTML = html;
        // apply kaapi styles to all new elements
        if (window.kaapi) {
            preview.querySelectorAll('[class*="kaapi"]').forEach(el => {
                window.kaapi.apply(el);
            });
        }
    }

    function buildChips() {
        const container = document.getElementById("pg-chips");
        if (!container) return;

        QUICK_CLASSES.forEach(cls => {
            const chip = document.createElement("span");
            chip.className = "pg-chip";
            chip.textContent = cls;
            chip.addEventListener("click", () => {
                const input = document.getElementById("pg-input");
                if (!input) return;

                // toggle the class in the first class="..." found in the textarea
                const current = input.value;
                if (current.includes(cls)) {
                    input.value = current.replace(new RegExp("\\s?" + cls.replace(/-/g, "\\-"), "g"), "");
                    chip.classList.remove("active");
                } else {
                    // insert into the first class attribute found
                    input.value = current.replace(/(class="[^"]*)"/, `$1 ${cls}"`);
                    chip.classList.add("active");
                }
                renderPreview(input.value);
            });
            container.appendChild(chip);
        });
    }

    function syncChipState(html) {
        document.querySelectorAll(".pg-chip").forEach(chip => {
            chip.classList.toggle("active", html.includes(chip.textContent));
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
        const input = document.getElementById("pg-input");
        if (!input) return;

        input.value = DEFAULT_HTML;
        buildChips();
        renderPreview(DEFAULT_HTML);
        syncChipState(DEFAULT_HTML);

        // live update as user types
        input.addEventListener("input", () => {
            renderPreview(input.value);
            syncChipState(input.value);
        });
    });
})();
