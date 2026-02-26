# 🐍 Python Cheat Sheet — VS Code Extension

Instant cheat sheets for popular Python libraries, displayed in a panel **right next to your code**.

![Python Cheat Sheet Demo](media/demo.gif)

## Features

- 📚 **5 libraries** covered: NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn
- ⚡ **Auto-detection** — scans your imports and switches the cheat sheet automatically
- 🔍 **Search** snippets across the entire library
- ⌨️ **Insert** snippets directly at cursor with one click
- ⎘ **Copy** to clipboard instantly
- 🗂️ **Category tabs** to browse by topic

## Keyboard Shortcut

| OS | Shortcut |
|---|---|
| Windows / Linux | `Ctrl + Shift + H` |
| macOS | `Cmd + Shift + H` |

Or open via: **Command Palette → "Open Python Cheat Sheet"**

## Libraries Included

| Library | Categories |
|---|---|
| **NumPy** | Array Creation, Info, Reshaping, Math, Sorting, Linear Algebra |
| **Pandas** | Creating DataFrames, Exploring, Selecting, Cleaning, Transforming, Grouping, Exporting |
| **Matplotlib** | Basic Plots, Labels, Axes, Subplots, Styling, Saving |
| **Seaborn** | Distribution, Categorical, Relational, Matrix/Regression, Faceting, Themes |
| **Scikit-learn** | Preprocessing, Train/Test Split, Classification, Regression, Clustering, Evaluation, CV/Tuning, Pipelines |

## Getting Started (Development)

```bash
# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Open in VS Code and press F5 to launch Extension Development Host
code .
```

## Adding More Libraries

1. Create `src/data/yourlib.ts` following the same structure as existing files
2. Add it to `src/data/index.ts` — import it, add to `libraries`, and add entries to `importDetectionMap`
3. That's it!

## Packaging & Publishing

```bash
# Install vsce if needed
npm install -g @vscode/vsce

# Package as .vsix
npm run package

# Publish to marketplace (requires publisher account)
npm run publish
```

## Roadmap

- [ ] More Python libraries (os, re, datetime, json, itertools...)
- [ ] JavaScript / TypeScript support
- [ ] Rust, Go support
- [ ] Favorites / pinned snippets
- [ ] User-contributed custom snippets