<div align="center">

<img src="media/icon.png" width="96" height="96" alt="DevLens Logo" />

<h1>DevLens</h1>

<p><strong>Instant, searchable cheat sheets for every language — right inside VS Code.</strong></p>

[![Version](https://img.shields.io/badge/version-0.2.0-5dffb0?style=for-the-badge&labelColor=0d0f14)](#)
[![VS Code](https://img.shields.io/badge/VS%20Code-^1.80.0-4d8cff?style=for-the-badge&logo=visualstudiocode&logoColor=white&labelColor=0d0f14)](https://marketplace.visualstudio.com)
[![License](https://img.shields.io/badge/license-MIT-ff5d87?style=for-the-badge&labelColor=0d0f14)](#license)
[![Open Source](https://img.shields.io/badge/open%20source-❤-5dffb0?style=for-the-badge&labelColor=0d0f14)](#contributing)

<br/>

[![Install on Marketplace](https://img.shields.io/badge/⬇%20Install%20on%20Marketplace-4d8cff?style=for-the-badge&logo=visualstudiocode&logoColor=white)](https://marketplace.visualstudio.com)
[![GitHub Stars](https://img.shields.io/github/stars/Ali-Aldahmani/devlens?style=for-the-badge&logo=github&labelColor=0d0f14&color=5dffb0)](https://github.com/Ali-Aldahmani/devlens/stargazers)
[![Report Bug](https://img.shields.io/badge/🐛%20Report%20Bug-ff5d87?style=for-the-badge)](https://github.com/Ali-Aldahmani/devlens/issues)
[![Request Feature](https://img.shields.io/badge/✨%20Request%20Feature-ffb347?style=for-the-badge)](https://github.com/Ali-Aldahmani/devlens/issues)

</div>

---

## What is DevLens?

Stop alt-tabbing to docs. DevLens opens a **smart cheat sheet panel beside your code** with 300+ ready-to-use snippets across Python, HTML, CSS, Tailwind, and more.

It **auto-detects** which library you're using from your imports, switches instantly, and lets you insert any snippet directly at your cursor with one click — no copy-pasting, no context switching.

> Think of it as having a senior dev sitting next to you who just knows every API off the top of their head.

---

## Features

<table>
<tr>
<td width="50%">

### 🔍 Auto-Detection
DevLens reads your imports and **automatically switches** to the right cheat sheet the moment you open a file. Open a file with `import pandas` and it's already showing Pandas snippets.

</td>
<td width="50%">

### ⌨️ One-Click Insert
Every snippet has an **Insert** button. The code lands exactly at your cursor — formatted, ready to run. No switching windows, no clipboard juggling.

</td>
</tr>
<tr>
<td width="50%">

### 🌐 Multi-Language Support
Switch between **Python**, **Web Dev**, and more from a searchable language picker. Find any language or library in under a second — just start typing.

</td>
<td width="50%">

### ⊞ Markdown View
Toggle between **Cards** and **Markdown** mode. Markdown mode renders all snippets as a clean inline reference doc — great for browsing an entire library at a glance.

</td>
</tr>
<tr>
<td width="50%">

### 🔎 Instant Search
Filter snippets in real time. Search by function name, description, or keyword — across the entire library. Results update as you type.

</td>
<td width="50%">

### 🗂️ Category Tabs
Every library is organized into topics — Array Creation, Data Cleaning, Flexbox, Model Evaluation, and more — so you can browse without searching.

</td>
</tr>
</table>

---

## Libraries

### 🐍 Python

| Library | Categories | Snippets |
|---|---|:---:|
| **NumPy** | Array Creation · Info · Reshaping · Math · Sorting · Linear Algebra | ~50 |
| **Pandas** | Creating DataFrames · Exploring · Selecting · Cleaning · Transforming · Grouping · Exporting | ~55 |
| **Matplotlib** | Basic Plots · Labels · Axes · Subplots · Styling · Saving | ~45 |
| **Seaborn** | Distribution · Categorical · Relational · Matrix/Regression · Faceting · Themes | ~40 |
| **Scikit-learn** | Preprocessing · Train/Test · Classification · Regression · Clustering · Evaluation · CV/Tuning · Pipelines | ~45 |

### 🌐 Web Dev

| Library | Categories | Snippets |
|---|---|:---:|
| **HTML** | Structure · Semantic Layout · Text · Links & Media · Forms · ARIA | ~50 |
| **CSS** | Selectors · Box Model · Flexbox · Grid · Typography · Animations · Responsive | ~65 |
| **Tailwind CSS** | Layout · Spacing · Typography · Colors · Borders · States · Patterns | ~60 |

**Total: 410+ snippets across 8 libraries**

---

## Keyboard Shortcut

| OS | Shortcut |
|:---:|:---:|
| 🪟 Windows / Linux | `Ctrl + Ctrl + D` |
| 🍎 macOS | `Cmd + Ctrl + D` |

Or open via the **Command Palette** → `DevLens: Open DevLens`

Or **right-click** anywhere in a source file → **Open DevLens**

---

## Getting Started

```bash
# 1. Install from the VS Code Marketplace
#    Search "DevLens" or use the button at the top of this README

# 2. Open any Python or web file
# 3. Press Cmd+Ctrl+D (macOS) or Ctrl+Ctrl+D (Windows/Linux)
# 4. DevLens opens beside your code — already on the right library
```

---

## Development Setup

```bash
# Clone the repo
git clone https://github.com/Ali-Aldahmani/devlens.git
cd devlens

# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Launch Extension Development Host
# Open the project in VS Code, then press F5
code .
```

For live recompilation while developing:

```bash
npm run watch
# Then press F5 once — changes rebuild automatically
```

---

## Contributing

### Adding a New Library

**1.** Create `src/data/<group>/<library>.ts`:

```ts
export const mylib = {
  name: "MyLib",
  import: "import mylib",
  categories: [
    {
      title: "Category Name",
      items: [
        { snippet: "mylib.method()", desc: "What it does" },
      ],
    },
  ],
};
```

**2.** Register it in `src/data/index.ts`:

```ts
import { mylib } from "./<group>/mylib";

export const libraries = {
  // ...existing
  mylib,
};

export const languageGroups = [
  { label: "My Group", icon: "🔧", libraries: ["mylib"] },
];

export const importDetectionMap = {
  // ...existing
  "import mylib": "mylib",
};
```

**3.** Run `npm run compile` — it appears in the panel automatically.

### Adding a New Language Group

In `src/data/index.ts`, add an entry to `languageGroups`:

```ts
{ label: "Backend", icon: "⚙️", libraries: ["go", "rust"] }
```

It shows up in the language picker immediately — no other changes needed.

### Adding a New Command

**1.** Declare it in `package.json`:

```json
{
  "command": "devLens.myCommand",
  "title": "DevLens: My Command"
}
```

**2.** Handle it in `src/extension.ts`:

```ts
const myCommand = vscode.commands.registerCommand("devLens.myCommand", () => {
  CheatSheetPanel.createOrShow(context.extensionUri, "mylib");
});
context.subscriptions.push(myCommand);
```

---

## Packaging & Publishing

```bash
# Install the VS Code packaging tool
npm install -g @vscode/vsce

# Package locally as .vsix (for testing)
npm run package

# Publish to the Marketplace
npm run publish
```

---

## Roadmap

### Done
- [x] NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn
- [x] HTML, CSS, Tailwind CSS
- [x] Auto-detection from file imports
- [x] Insert at cursor + copy to clipboard
- [x] Snippet search and category tabs
- [x] Multi-language picker with search
- [x] Markdown reference view mode

### Upcoming
- [ ] JavaScript & TypeScript
- [ ] Git commands
- [ ] Python stdlib — `os`, `re`, `datetime`, `json`, `itertools`
- [ ] Favorites / pinned snippets
- [ ] Recently used snippets
- [ ] User-defined custom snippet packs
- [ ] Rust, Go

---

## Contributing Guidelines

Contributions are welcome — new libraries, bug fixes, or feature ideas.

1. Fork the repo
2. Create a branch: `git checkout -b feat/my-feature`
3. Commit your changes: `git commit -m "feat: add my feature"`
4. Push and open a Pull Request

[![Fork DevLens](https://img.shields.io/badge/🍴%20Fork%20this%20repo-0d0f14?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Ali-Aldahmani/devlens/fork)

---

## License

MIT © [Ali Aldahmani](https://github.com/Ali-Aldahmani)

---

<div align="center">

Built for developers who live in their editor.

⭐ **Star this repo if DevLens saves you time** ⭐

</div>