import { numpy } from "./python/numpy";
import { pandas } from "./python/pandas";
import { matplotlib } from "./python/matplotlib";
import { seaborn } from "./python/seaborn";
import { sklearn } from "./python/sklearn";

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

// Registry of all available libraries
export const libraries: Record<string, LibraryCheatSheet> = {
  numpy,
  pandas,
  matplotlib,
  seaborn,
  sklearn,
};

// Maps import strings found in Python files → library keys
// Used for auto-detection
export const importDetectionMap: Record<string, string> = {
  "import numpy":         "numpy",
  "from numpy":           "numpy",
  "import pandas":        "pandas",
  "from pandas":          "pandas",
  "import matplotlib":    "matplotlib",
  "from matplotlib":      "matplotlib",
  "import seaborn":       "seaborn",
  "from seaborn":         "seaborn",
  "import sklearn":       "sklearn",
  "from sklearn":         "sklearn",
  "from scikit":          "sklearn",
};

export { numpy, pandas, matplotlib, seaborn, sklearn };