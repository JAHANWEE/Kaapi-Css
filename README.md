# kaapi.css

A lightweight, zero-dependency utility-first CSS engine powered by vanilla JavaScript.  
No build step. No npm. Just drop in a script tag and style with class names.

---

## What is this?

kaapi.css scans the DOM after page load, reads every class starting with `kaapi-`, parses the name, and applies the corresponding inline style — dynamically. It mimics the behavior of utility-first frameworks like Tailwind, but runs entirely in the browser with a single JS file.

---

## How it works

```
kaapi-p-16        →  padding: 16px
kaapi-mt-8        →  margin-top: 8px
kaapi-fs-20       →  font-size: 20px
kaapi-bg-purple   →  background-color: #6D4FC2
kaapi-flex        →  display: flex
kaapi-rounded-md  →  border-radius: 8px
```

On `DOMContentLoaded`, the engine:
1. Queries all elements with a `kaapi-` class
2. Splits the class list and checks each one
3. Looks up static classes in a map, or resolves dynamic ones via prefix matching
4. Applies the result as `element.style.cssText`
5. Exposes `window.kaapi.apply(el)` for dynamically added elements

---

## Setup

```html
<script src="kaapi.js"></script>
```

That's it. Use classes anywhere in your HTML.

```html
<div class="kaapi-flex kaapi-gap-16 kaapi-p-24 kaapi-rounded-md kaapi-bg-purple">
  <p class="kaapi-text-white kaapi-font-bold kaapi-fs-18">Hello, Kaapi</p>
</div>
```

For elements added after page load:

```js
const el = document.createElement('div');
el.className = 'kaapi-p-16 kaapi-rounded-md';
document.body.appendChild(el);
window.kaapi.apply(el);
```

---

## Dynamic Classes

These accept **any number** — no predefined values needed.  
They also accept CSS keywords: `auto`, `inherit`, `initial`, `none`, `fit-content`, `max-content`, `min-content`, and percentage shorthands like `50%`, `100%`.

```html
<!-- numeric -->
<div class="kaapi-p-24 kaapi-mt-16 kaapi-fs-18">...</div>

<!-- keyword -->
<div class="kaapi-mx-auto kaapi-w-50%">...</div>
```

| Pattern | CSS Property | Example | Output |
|---|---|---|---|
| `kaapi-p-{n}` | padding | `kaapi-p-16` | `padding: 16px` |
| `kaapi-pt-{n}` | padding-top | `kaapi-pt-8` | `padding-top: 8px` |
| `kaapi-pb-{n}` | padding-bottom | `kaapi-pb-8` | `padding-bottom: 8px` |
| `kaapi-pl-{n}` | padding-left | `kaapi-pl-12` | `padding-left: 12px` |
| `kaapi-pr-{n}` | padding-right | `kaapi-pr-12` | `padding-right: 12px` |
| `kaapi-px-{n}` | padding left + right | `kaapi-px-20` | `padding-left: 20px; padding-right: 20px` |
| `kaapi-py-{n}` | padding top + bottom | `kaapi-py-12` | `padding-top: 12px; padding-bottom: 12px` |
| `kaapi-m-{n}` | margin | `kaapi-m-16` | `margin: 16px` |
| `kaapi-mt-{n}` | margin-top | `kaapi-mt-8` | `margin-top: 8px` |
| `kaapi-mb-{n}` | margin-bottom | `kaapi-mb-8` | `margin-bottom: 8px` |
| `kaapi-ml-{n}` | margin-left | `kaapi-ml-4` | `margin-left: 4px` |
| `kaapi-mr-{n}` | margin-right | `kaapi-mr-4` | `margin-right: 4px` |
| `kaapi-mx-{n}` | margin left + right | `kaapi-mx-32` | `margin-left: 32px; margin-right: 32px` |
| `kaapi-mx-auto` | margin left + right | `kaapi-mx-auto` | `margin-left: auto; margin-right: auto` |
| `kaapi-my-{n}` | margin top + bottom | `kaapi-my-24` | `margin-top: 24px; margin-bottom: 24px` |
| `kaapi-br-{n}` | border-radius | `kaapi-br-8` | `border-radius: 8px` |
| `kaapi-bw-{n}` | border-width | `kaapi-bw-2` | `border-width: 2px` |
| `kaapi-fs-{n}` | font-size | `kaapi-fs-18` | `font-size: 18px` |
| `kaapi-lh-{n}` | line-height | `kaapi-lh-2` | `line-height: 2` |
| `kaapi-gap-{n}` | gap | `kaapi-gap-12` | `gap: 12px` |
| `kaapi-w-{n}` | width | `kaapi-w-200` | `width: 200px` |
| `kaapi-w-full` | width | `kaapi-w-full` | `width: 100%` (static class) |
| `kaapi-h-{n}` | height | `kaapi-h-60` | `height: 60px` |
| `kaapi-z-{n}` | z-index | `kaapi-z-10` | `z-index: 10` |
| `kaapi-op-{n}` | opacity | `kaapi-op-75` | `opacity: 0.75` |
| `kaapi-top-{n}` | top | `kaapi-top-0` | `top: 0px` |
| `kaapi-left-{n}` | left | `kaapi-left-16` | `left: 16px` |
| `kaapi-right-{n}` | right | `kaapi-right-0` | `right: 0px` |
| `kaapi-bottom-{n}` | bottom | `kaapi-bottom-0` | `bottom: 0px` |

---

## Static Classes

### Layout
| Class | CSS |
|---|---|
| `kaapi-flex` | `display: flex` |
| `kaapi-flex-col` | `flex-direction: column` |
| `kaapi-flex-row` | `flex-direction: row` |
| `kaapi-flex-wrap` | `flex-wrap: wrap` |
| `kaapi-grid` | `display: grid` |
| `kaapi-block` | `display: block` |
| `kaapi-inline` | `display: inline` |
| `kaapi-inline-flex` | `display: inline-flex` |
| `kaapi-hidden` | `display: none` |
| `kaapi-justify-center` | `justify-content: center` |
| `kaapi-justify-between` | `justify-content: space-between` |
| `kaapi-justify-end` | `justify-content: flex-end` |
| `kaapi-justify-start` | `justify-content: flex-start` |
| `kaapi-items-center` | `align-items: center` |
| `kaapi-items-start` | `align-items: flex-start` |
| `kaapi-items-end` | `align-items: flex-end` |
| `kaapi-full-center` | full viewport flex center |
| `kaapi-container` | `max-width: 960px; margin: 0 auto` |
| `kaapi-container-sm` | `max-width: 600px; margin: 0 auto` |
| `kaapi-w-full` | `width: 100%` |
| `kaapi-h-full` | `height: 100%` |
| `kaapi-relative` | `position: relative` |
| `kaapi-absolute` | `position: absolute` |
| `kaapi-overflow-hidden` | `overflow: hidden` |

### Typography
| Class | CSS |
|---|---|
| `kaapi-text-xs` | `font-size: 12px` |
| `kaapi-text-sm` | `font-size: 14px` |
| `kaapi-text-md` | `font-size: 16px` |
| `kaapi-text-lg` | `font-size: 20px` |
| `kaapi-text-xl` | `font-size: 24px` |
| `kaapi-text-2xl` | `font-size: 32px` |
| `kaapi-text-3xl` | `font-size: 48px` |
| `kaapi-font-bold` | `font-weight: bold` |
| `kaapi-font-semibold` | `font-weight: 600` |
| `kaapi-font-normal` | `font-weight: 400` |
| `kaapi-italic` | `font-style: italic` |
| `kaapi-uppercase` | `text-transform: uppercase` |
| `kaapi-lowercase` | `text-transform: lowercase` |
| `kaapi-capitalize` | `text-transform: capitalize` |
| `kaapi-tracking-wide` | `letter-spacing: 0.05em` |
| `kaapi-leading-loose` | `line-height: 1.8` |
| `kaapi-text-center` | `text-align: center` |
| `kaapi-text-left` | `text-align: left` |
| `kaapi-text-right` | `text-align: right` |

### Colors
| Class | CSS |
|---|---|
| `kaapi-bg-blue` | `background-color: #3b82f6` |
| `kaapi-bg-purple` | `background-color: #6D4FC2` |
| `kaapi-bg-purple-light` | `background-color: #9B7FE0` |
| `kaapi-bg-purple-dark` | `background-color: #0C0724` |
| `kaapi-bg-purple-pale` | `background-color: #EDE9F8` |
| `kaapi-bg-soft` | `background-color: #f1f5f9` |
| `kaapi-text-white` | `color: white` |
| `kaapi-text-dark` | `color: #1e293b` |
| `kaapi-text-muted` | `color: #C4AEFF` |
| `kaapi-text-purple` | `color: #6D4FC2` |
| `kaapi-text-purple-light` | `color: #C4AEFF` |

### Borders & Radius
| Class | CSS |
|---|---|
| `kaapi-rounded-sm` | `border-radius: 4px` |
| `kaapi-rounded-md` | `border-radius: 8px` |
| `kaapi-rounded-lg` | `border-radius: 16px` |
| `kaapi-rounded-full` | `border-radius: 9999px` |
| `kaapi-border` | `border: 1px solid #e2e8f0` |
| `kaapi-border-purple` | `border: 1px solid #7A1CAC` |
| `kaapi-border-none` | `border: none` |

### Shadows
| Class | CSS |
|---|---|
| `kaapi-shadow-sm` | `box-shadow: 0 1px 4px rgba(0,0,0,0.08)` |
| `kaapi-shadow` | `box-shadow: 0 4px 12px rgba(0,0,0,0.1)` |
| `kaapi-shadow-lg` | `box-shadow: 0 8px 24px rgba(0,0,0,0.15)` |
| `kaapi-shadow-purple` | `box-shadow: 0 4px 16px rgba(109,79,194,0.4)` |

### Utilities
| Class | CSS |
|---|---|
| `kaapi-cursor-pointer` | `cursor: pointer` |
| `kaapi-transition` | `transition: all 0.2s ease` |
| `kaapi-transition-slow` | `transition: all 0.4s ease` |
| `kaapi-opacity-50` | `opacity: 0.5` |
| `kaapi-opacity-75` | `opacity: 0.75` |
| `kaapi-avatar` | 90×90 circular image |
| `kaapi-avatar-lg` | 120×120 circular image |
| `kaapi-tag` | pill badge (light) |
| `kaapi-tag-dark` | pill badge (dark) |
| `kaapi-card` | white card with shadow |
| `kaapi-dark-bg` | `background-color: #0C0724` |
| `kaapi-dark-card` | dark card surface + light text |
| `kaapi-dark-btn` | dark mode button |
| `kaapi-dark-text` | `color: #EDE9F8` |
| `kaapi-dark-muted` | `color: #C4AEFF` |

---

## Project Structure

```
kaapi.css/
├── kaapi.js        # core engine — DOM scanner + style resolver
├── playground.js   # live playground logic (separate from core)
├── style.css       # landing page base styles
├── landing.html    # docs + playground page
├── index.html      # demo profile card
└── README.md
```

---

## License

MIT
