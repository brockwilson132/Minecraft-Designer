# Blockwright

Build companions for Minecraft. Browse a library of designs, open one, and build it layer by layer, column by column and one part at a time.

It is a static site: plain HTML, CSS and JavaScript with no build step and no server. Open `index.html` in a browser, or host it on GitHub Pages.

## What it does

- **Library.** Every design gets a card with a rendered picture, its size, block count, number of build steps and your progress.
- **One cursor.** X, Z and Layer buttons (hold to repeat, or type a number) move a single cursor. Every view follows it:
  - **Top:** the layer under the cursor. Tap to move, drag to pan, pinch or − + to zoom.
  - **Side:** a vertical slice through the cursor, east–west or north–south, with a strip of the whole build for jumping up and down.
  - **3D:** orbit the model. Show only up to the cursor layer, or cut it open at the cursor.
  - **Picture:** a rendered view of the build, with rotate and dusk.
- **Column.** The stack under the cursor, bottom to top, grouped into runs: "y 2–10 · Stone Bricks ×9".
- **Blocks.** What to put in your hotbar for this layer or this step, with stack counts.
- **Build steps.** Each design is split into parts in the order you'd build them, such as buttresses first, then the walls between them. Pick a step and only that part shows in colour, with earlier steps faded or hidden. The layer arrows jump to the next layer that has something to place. Tick steps off as you finish them.
- **Frame only** (in About) hides glass, doors, lanterns, fences, pinnacles and furniture, so you can see the shell.

Progress and view settings are saved in your browser (`localStorage`). They are per device and are not synced.

### Keyboard (desktop)

| Key | Action |
| --- | --- |
| ← → | X − / + |
| ↑ ↓ | Z − / + (north is up) |
| Shift + ↑ ↓, Page Up / Page Down | Layer up / down |
| , . | Previous / next build step |
| Ctrl + scroll | Zoom |
| Esc | Close a panel |

## Design with Claude

In the Claude-hosted version of the app, the builder has a **✦ Claude** button and the library has a **New design** card.

- **Ask for changes in plain words**, such as "make the rose windows bigger" or "add a balcony on this layer". Claude edits only that design's build code and the app rebuilds it at once. Claude knows the cursor position and the current build step, so "here" and "these" work. If an edit doesn't build, Claude sees the error and fixes it, and a broken version is never saved.
- **New design:** describe a building and Claude drafts it from scratch, split into build steps.
- **Every change is saved with an undo point.** **Undo** steps back one change. **Revert to original** drops all edits to a built-in design.
- **Export** saves the design as `designs/<id>.js`, ready for this repository.

Designs made or edited in the app are stored with the Claude-hosted app. **Publish to GitHub** in the Claude panel puts one on this site: it starts a saved Claude task (through the Claude Code Remote connector) that writes `designs/<id>.js`, adds its `<script>` line, runs the checker, commits and pushes. The Pages workflow then deploys it, usually within a few minutes. Publishing again replaces the copy here. You can also export the file and add it by hand. The GitHub Pages site has no Claude panel, because it can't reach a Claude account. Everything else works the same there.

## Run it

Open `index.html` directly. It uses plain `<script>` tags, so it also works from `file://`.

Or serve the folder:

```sh
python3 -m http.server 8000      # then open http://localhost:8000
```

## Put it on GitHub Pages

The workflow in `.github/workflows/pages.yml` publishes the site on every push to `main`, after checking that every design builds. The site is at https://brockwilson132.github.io/Minecraft-Designer/, and each design has its own link, for example `…/Minecraft-Designer/#cartographers-rotunda`.

If a deploy ever fails with "Pages not enabled", open the repository's **Settings → Pages** and set **Source** to **GitHub Actions** once.

## Project layout

```
index.html                  page shell: library + builder, and one <script> line per design
css/app.css                 all styles; colour tokens for light and dark at the top
js/blocks.js                block registry (name, colour, shape) and block shapes for 3D
js/world.js                 world + geometry helpers handed to each design, design registry, loader
js/render-iso.js            isometric picture renderer (Picture view and library thumbnails)
js/library.js               the library page
js/builder.js               the builder
js/app.js                   router: #design-id opens the builder
designs/*.js                one file per design
designs/_template.js        a small example to copy
tools/check.mjs             builds every design and reports problems
tools/bundle.mjs            makes dist/blockwright.html, a single self-contained file
```

## Add a design

1. Copy `designs/_template.js` to `designs/<id>.js` and change `id`, `name`, `blurb` and `tags`.
2. Write `build(w)`. Place blocks with `w.put(x, y, z, 'block_id', extra)`. Before each part, set `w.comp = '<step id>'` so its blocks belong to that build step.
3. List the steps in build order: `steps: [['Group', 'step-id', 'Step name'], …]`.
4. Add `<script src="designs/<id>.js"></script>` to `index.html` under "Designs".
5. Run `node tools/check.mjs` (Node 18 or newer). It builds every design and reports blocks without a step, unknown block ids and empty steps.

### The design file

```js
BK.register({
  id: 'my-tower', version: 1, name: 'My Tower',
  blurb: 'One or two sentences for the library card.',
  tags: ['Tower'], edition: 'Bedrock',
  extent: 24,                 // views cover x and z from -extent to +extent
  start: {x: 0, y: 1, z: 0},  // where the cursor starts
  ring: 18.5,                 // optional dashed guide circle on the top view
  figure: {x: 0, z: 22},      // optional 2-block person for scale in the picture
  steps: [['Base', 'walls', 'Walls'], …],
  tiers: [{a: 1, b: 30, name: 'Ground storey', p: 'Description…'}],   // shown in About
  notes: [['Title', 'Text…']],                                        // shown in About
  blocks: {my_block: {n: 'My Block', c: '#88aa55'}},                   // optional extra blocks
  build(w) { … }
});
```

### Helpers on `w`

| Helper | What it does |
| --- | --- |
| `put(x,y,z,id,extra)` | Place a block. `extra` can be `{f:[dx,dz]}` (stair tall side), `{up:true}` (upside-down stair or top slab), `{turn:90}` (glazed terracotta), `{hue:'#rrggbb'}` (colour override, used for map art). |
| `clr(x,y,z)`, `get(x,y,z)` | Remove or read a block. |
| `w.comp = 'id'` | Every following `put` belongs to that build step. |
| `w.role = 'furnish'` | Marks furniture, so Frame only hides it. Set it back to `null` afterwards. |
| `each((x,z)=>…)` | Visit every column in the extent. |
| `ins(x,z,R)`, `rim(x,z,R)` | Inside a circle of radius R, or on its outer edge. |
| `depthMap(R)` | Returns `(x,z)=>` blocks in from the circle's edge (0 at the edge, −1 outside). |
| `bay(x,z,N)` | Splits a ring into N bays: `{u, h, k}` = position along the bay, half bay width, bay index. |
| `pillarAng(N)`, `bayAng(N)`, `spotsAt(angles,r,test)` | Angles of bay edges and bay centres, and the nearest cell to each. |
| `S(x,y,z,id,up)`, `SO(…)` | Stairs with the tall side facing in (`S`) or out (`SO`). |
| `inward(x,z)`, `outward(x,z)` | Unit direction toward or away from the centre. |
| `RNG(x,y,z)`, `vn(x,z)` | Deterministic random number and smooth noise, for weathering and texture. |

A design without `steps` still works. It is split into bands of 12 layers instead.

## Single-file version

```sh
node tools/bundle.mjs
```

This writes `dist/blockwright.html` with everything inlined, so you can send it to someone or keep it offline. 3D needs an internet connection to load three.js. Everything else works offline.

## Credits

three.js r128 and OrbitControls are loaded from public CDNs. Fonts are Marcellus and IBM Plex from Google Fonts.
