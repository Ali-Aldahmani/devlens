import { numpy } from "./python/numpy";
import { pandas } from "./python/pandas";
import { matplotlib } from "./python/matplotlib";
import { seaborn } from "./python/seaborn";
import { sklearn } from "./python/sklearn";
import { html } from "./webdev/html";
import { css } from "./webdev/css";
import { tailwind } from "./webdev/tailwind";

export interface CheatSheetItem {
  snippet: string;
  desc: string;
}

export interface CheatSheetCategory {
  title: string;
  items: CheatSheetItem[];
}

export interface LibraryCheatSheet {
  name: string;
  import: string;
  categories: CheatSheetCategory[];
}

export interface LanguageGroup {
  label: string;
  icon: string;
  libraries: string[];
}

// Registry of all available libraries
export const libraries: Record<string, LibraryCheatSheet> = {
  numpy,
  pandas,
  matplotlib,
  seaborn,
  sklearn,
  html,
  css,
  tailwind,
};

// Language groups — controls top-level tab UI
export const languageGroups: LanguageGroup[] = [
  {
    label: "Python",
    icon: "🐍",
    libraries: ["numpy", "pandas", "matplotlib", "seaborn", "sklearn"],
  },
  {
    label: "Web Dev",
    icon: "🌐",
    libraries: ["html", "css", "tailwind"],
  },
];

// Maps import strings found in source files → library keys
export const importDetectionMap: Record<string, string> = {
  // Python
  "import numpy":      "numpy",
  "from numpy":        "numpy",
  "import pandas":     "pandas",
  "from pandas":       "pandas",
  "import matplotlib": "matplotlib",
  "from matplotlib":   "matplotlib",
  "import seaborn":    "seaborn",
  "from seaborn":      "seaborn",
  "import sklearn":    "sklearn",
  "from sklearn":      "sklearn",
  "from scikit":       "sklearn",
  // Web Dev (HTML/CSS auto-detected by file extension in extension.ts)
};

export { numpy, pandas, matplotlib, seaborn, sklearn, html, css, tailwind };