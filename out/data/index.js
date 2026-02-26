"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tailwind = exports.css = exports.html = exports.sklearn = exports.seaborn = exports.matplotlib = exports.pandas = exports.numpy = exports.importDetectionMap = exports.languageGroups = exports.libraries = void 0;
const numpy_1 = require("./python/numpy");
Object.defineProperty(exports, "numpy", { enumerable: true, get: function () { return numpy_1.numpy; } });
const pandas_1 = require("./python/pandas");
Object.defineProperty(exports, "pandas", { enumerable: true, get: function () { return pandas_1.pandas; } });
const matplotlib_1 = require("./python/matplotlib");
Object.defineProperty(exports, "matplotlib", { enumerable: true, get: function () { return matplotlib_1.matplotlib; } });
const seaborn_1 = require("./python/seaborn");
Object.defineProperty(exports, "seaborn", { enumerable: true, get: function () { return seaborn_1.seaborn; } });
const sklearn_1 = require("./python/sklearn");
Object.defineProperty(exports, "sklearn", { enumerable: true, get: function () { return sklearn_1.sklearn; } });
const html_1 = require("./webdev/html");
Object.defineProperty(exports, "html", { enumerable: true, get: function () { return html_1.html; } });
const css_1 = require("./webdev/css");
Object.defineProperty(exports, "css", { enumerable: true, get: function () { return css_1.css; } });
const tailwind_1 = require("./webdev/tailwind");
Object.defineProperty(exports, "tailwind", { enumerable: true, get: function () { return tailwind_1.tailwind; } });
// Registry of all available libraries
exports.libraries = {
    numpy: numpy_1.numpy,
    pandas: pandas_1.pandas,
    matplotlib: matplotlib_1.matplotlib,
    seaborn: seaborn_1.seaborn,
    sklearn: sklearn_1.sklearn,
    html: html_1.html,
    css: css_1.css,
    tailwind: tailwind_1.tailwind,
};
// Language groups — controls top-level tab UI
exports.languageGroups = [
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
exports.importDetectionMap = {
    // Python
    "import numpy": "numpy",
    "from numpy": "numpy",
    "import pandas": "pandas",
    "from pandas": "pandas",
    "import matplotlib": "matplotlib",
    "from matplotlib": "matplotlib",
    "import seaborn": "seaborn",
    "from seaborn": "seaborn",
    "import sklearn": "sklearn",
    "from sklearn": "sklearn",
    "from scikit": "sklearn",
    // Web Dev (HTML/CSS auto-detected by file extension in extension.ts)
};
//# sourceMappingURL=index.js.map