# Odyssey Codex

A fan-made reference for **Aeon Trespass: Odyssey**:

- **Keywords & terms**: every keyword from the Cycle I–V keyword books, plus the Rulebook's Master Index terms and symbols.
- **Kratos & Ability Windows**: the Kratos Table abilities, and every keyword that mentions an ability window.
- **Cycle Rules**: the special rules from each Cycle Storybook.
- **Rulebook**: the Core Rulebook itself. Every "Rulebook p. N" link opens the page and highlights the passage.

Switch on only the Cycles you've reached, so later Cycles stay hidden. Your selection is remembered.

**Open it:** https://shacaska.github.io/ATO/

## Install it as an app

- **iPhone / iPad:** open the site in Safari, tap **Share**, then **Add to Home Screen**.
- **Android:** tap **Install app** on the page, or use the Chrome menu and pick **Install app** / **Add to Home screen**.
- **Windows / Mac (Chrome or Edge):** click **Install app** on the page, or the install icon in the address bar.

Once installed, it opens in its own window. It works offline after your first visit. The Rulebook is saved on the device the first time you open the Rulebook tab, so do that once while you're online.

On phones, the bar along the bottom has **Back** (returns to exactly where you were before following a link), the four sections, and **Search**. Tap the section you're already in to jump back to the top.

## Updates

Pushing to `main` is all it takes. Each build stamps a version (shown at the bottom of the page) into `sw.js`, so a changed `sw.js` tells installed copies that a new version exists.

- Opening the app while online always loads the newest page. The saved copy is only used offline.
- If the app is already open when an update lands, it checks again when you return to it (and every 30 minutes). It shows **"A new version of the Codex is ready. Reload"**.
- **Check for updates** at the bottom of the page checks on demand.
- The saved Rulebook is kept by file name. A new Rulebook edition should go in under a new file name (e.g. `…_v1.2.pdf`) with the app updated to point at it, so devices download the new one.

## Credits

Aeon Trespass: Odyssey, its Rulebook, Cycle books and artwork are © Into the Unknown. The Core Rulebook v1.1 PDF is included unchanged. [Official copy](https://drive.google.com/file/d/1vPofVQlG_j_nA3v63YWnU9WsMovJ-uxb/view).

This is an unofficial fan project and isn't affiliated with Into the Unknown.

The PDF viewer uses [PDF.js](https://mozilla.github.io/pdf.js/) (Apache 2.0, see `vendor/pdfjs/LICENSE`).
