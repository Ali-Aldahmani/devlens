import { pythonFundamentals } from "./python/pythonFundamentals";
import { numpy } from "./python/numpy";
import { scipy } from "./python/scipy";
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
import { nextjs } from "./javascript/nextjs";
import { angular } from "./javascript/angular";
import { nestjs } from "./javascript/nestjs";
import { java } from "./java/java";
import { go } from "./golang/go";
import { rust } from "./rust/rust";
import { r } from "./r/r";
import { matrixStats } from "./r/matrixstats";


export interface CheatSheetItem {
  snippet: string;
  desc: string;
  insertTarget?: "editor" | "terminal";
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
  pythonFundamentals, javascript, react, typescript, reactDom, electronjs, nextjs,
  angular, nestjs, numpy,
  pandas, scipy,
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
  java,
  go,
  rust,
  r, matrixStats,
};

// Language groups — controls top-level tab UI
export const languageGroups: LanguageGroup[] = [
  {
    label: "Python",
    icon: "🐍",
    libraries: [ "pythonFundamentals", "numpy", "scipy", "pandas", "matplotlib", "seaborn", "sklearn"],
  },
  {
    label: "Web Dev",
    icon: "🌐",
    libraries: ["html", "css", "tailwind"],
  },
  {
    label: "JavaScript",
    icon: "💻",
    libraries: ["javascript", "react", "typescript", "reactDom", "electronjs", "nextjs", "angular", "nestjs"],
  },
  {
    label: "Java",
    icon: "꧖",
    libraries: ["java"],
  },
  {
    label: "Golang",
    icon: "⚜️",
    libraries: ["go"],
  },
  {
    label: "Rust",
    icon: "𐌿",
    libraries: ["rust"],
  },
  {
    label: "R",
    icon: "𝑹",
    libraries: ["r", "matrixStats"],
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
  "import scipy":      "scipy",
  "from scipy":        "scipy",
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

export { pythonFundamentals, numpy, scipy, pandas, matplotlib, seaborn, sklearn, html, css, tailwind, git, docker, cmdw,
  macos, linux, javascript, react, typescript, reactDom, electronjs, nextjs, angular, nestjs, java, go, rust, r, matrixStats,
 };