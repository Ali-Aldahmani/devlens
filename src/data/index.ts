import { pythonFundamentals } from "./python/pythonFundamentals";
import { numpy } from "./python/numpy";
import { pandas } from "./python/pandas";
import { matplotlib } from "./python/matplotlib";
import { seaborn } from "./python/seaborn";
import { sklearn } from "./python/sklearn";
import { html } from "./webdev/html";
import { css } from "./webdev/css";
import { tailwind } from "./webdev/tailwind";
import { git } from "./tools/git";
import { docker } from "./tools/docker";
import { cmdw } from "./tools/cmdw";
import { macos } from "./tools/macos";
import { linux } from "./tools/linux";
import { javascript } from "./javascript/javascript";
import { react } from "./javascript/react";
import { typescript } from "./javascript/typescript";
import { reactDom } from "./javascript/reactdom";
import { electronjs } from "./javascript/electron";


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
  install?: string;
  insertTarget?: "editor" | "terminal"; 
  categories: CheatSheetCategory[];
}

export interface LanguageGroup {
  label: string;
  icon: string;
  libraries: string[];
}

// Registry of all available libraries
export const libraries: Record<string, LibraryCheatSheet> = {
  pythonFundamentals, javascript, react, typescript, reactDom, electronjs,
  numpy,
  pandas,
  matplotlib,
  seaborn,
  sklearn,
  html,
  css,
  tailwind,
  git,
  docker,
  cmdw,
  macos,
  linux,
};

// Language groups — controls top-level tab UI
export const languageGroups: LanguageGroup[] = [
  {
    label: "Python",
    icon: "🐍",
    libraries: [ "pythonFundamentals", "numpy", "pandas", "matplotlib", "seaborn", "sklearn"],
  },
  {
    label: "Web Dev",
    icon: "🌐",
    libraries: ["html", "css", "tailwind"],
  },
  {
    label: "JavaScript",
    icon: "💻",
    libraries: ["javascript", "react", "typescript", "reactDom", "electronjs"],
  },
  {
    label: "Tools",
    icon: "🧰",
    libraries: ["git", "docker", "cmdw", "macos"],
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

export { pythonFundamentals, numpy, pandas, matplotlib, seaborn, sklearn, html, css, tailwind, git, docker, cmdw,
  macos, linux, javascript, react, typescript, reactDom, electronjs,
 };