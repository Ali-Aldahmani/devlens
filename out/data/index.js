"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matrixStats = exports.r = exports.rust = exports.go = exports.java = exports.nestjs = exports.angular = exports.nextjs = exports.electronjs = exports.reactDom = exports.typescript = exports.react = exports.javascript = exports.linux = exports.macos = exports.cmdw = exports.docker = exports.git = exports.tailwind = exports.css = exports.html = exports.sklearn = exports.seaborn = exports.matplotlib = exports.pandas = exports.scipy = exports.numpy = exports.pythonFundamentals = exports.importDetectionMap = exports.languageGroups = exports.libraries = void 0;
const pythonFundamentals_1 = require("./python/pythonFundamentals");
Object.defineProperty(exports, "pythonFundamentals", { enumerable: true, get: function () { return pythonFundamentals_1.pythonFundamentals; } });
const numpy_1 = require("./python/numpy");
Object.defineProperty(exports, "numpy", { enumerable: true, get: function () { return numpy_1.numpy; } });
const scipy_1 = require("./python/scipy");
Object.defineProperty(exports, "scipy", { enumerable: true, get: function () { return scipy_1.scipy; } });
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
const git_1 = require("./tools/git");
Object.defineProperty(exports, "git", { enumerable: true, get: function () { return git_1.git; } });
const docker_1 = require("./tools/docker");
Object.defineProperty(exports, "docker", { enumerable: true, get: function () { return docker_1.docker; } });
const cmdw_1 = require("./tools/cmdw");
Object.defineProperty(exports, "cmdw", { enumerable: true, get: function () { return cmdw_1.cmdw; } });
const macos_1 = require("./tools/macos");
Object.defineProperty(exports, "macos", { enumerable: true, get: function () { return macos_1.macos; } });
const linux_1 = require("./tools/linux");
Object.defineProperty(exports, "linux", { enumerable: true, get: function () { return linux_1.linux; } });
const javascript_1 = require("./javascript/javascript");
Object.defineProperty(exports, "javascript", { enumerable: true, get: function () { return javascript_1.javascript; } });
const react_1 = require("./javascript/react");
Object.defineProperty(exports, "react", { enumerable: true, get: function () { return react_1.react; } });
const typescript_1 = require("./javascript/typescript");
Object.defineProperty(exports, "typescript", { enumerable: true, get: function () { return typescript_1.typescript; } });
const reactdom_1 = require("./javascript/reactdom");
Object.defineProperty(exports, "reactDom", { enumerable: true, get: function () { return reactdom_1.reactDom; } });
const electron_1 = require("./javascript/electron");
Object.defineProperty(exports, "electronjs", { enumerable: true, get: function () { return electron_1.electronjs; } });
const nextjs_1 = require("./javascript/nextjs");
Object.defineProperty(exports, "nextjs", { enumerable: true, get: function () { return nextjs_1.nextjs; } });
const angular_1 = require("./javascript/angular");
Object.defineProperty(exports, "angular", { enumerable: true, get: function () { return angular_1.angular; } });
const nestjs_1 = require("./javascript/nestjs");
Object.defineProperty(exports, "nestjs", { enumerable: true, get: function () { return nestjs_1.nestjs; } });
const java_1 = require("./java/java");
Object.defineProperty(exports, "java", { enumerable: true, get: function () { return java_1.java; } });
const go_1 = require("./golang/go");
Object.defineProperty(exports, "go", { enumerable: true, get: function () { return go_1.go; } });
const rust_1 = require("./rust/rust");
Object.defineProperty(exports, "rust", { enumerable: true, get: function () { return rust_1.rust; } });
const r_1 = require("./r/r");
Object.defineProperty(exports, "r", { enumerable: true, get: function () { return r_1.r; } });
const matrixstats_1 = require("./r/matrixstats");
Object.defineProperty(exports, "matrixStats", { enumerable: true, get: function () { return matrixstats_1.matrixStats; } });
// Registry of all available libraries
exports.libraries = {
    pythonFundamentals: pythonFundamentals_1.pythonFundamentals, javascript: javascript_1.javascript, react: react_1.react, typescript: typescript_1.typescript, reactDom: reactdom_1.reactDom, electronjs: electron_1.electronjs, nextjs: nextjs_1.nextjs,
    angular: angular_1.angular, nestjs: nestjs_1.nestjs, numpy: numpy_1.numpy,
    pandas: pandas_1.pandas, scipy: scipy_1.scipy,
    matplotlib: matplotlib_1.matplotlib,
    seaborn: seaborn_1.seaborn,
    sklearn: sklearn_1.sklearn,
    html: html_1.html,
    css: css_1.css,
    tailwind: tailwind_1.tailwind,
    git: git_1.git,
    docker: docker_1.docker,
    cmdw: cmdw_1.cmdw,
    macos: macos_1.macos,
    linux: linux_1.linux,
    java: java_1.java,
    go: go_1.go,
    rust: rust_1.rust,
    r: r_1.r, matrixStats: matrixstats_1.matrixStats,
};
// Language groups — controls top-level tab UI
exports.languageGroups = [
    {
        label: "Python",
        icon: "🐍",
        libraries: ["pythonFundamentals", "numpy", "scipy", "pandas", "matplotlib", "seaborn", "sklearn"],
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
exports.importDetectionMap = {
    // Python
    "import numpy": "numpy",
    "from numpy": "numpy",
    "import scipy": "scipy",
    "from scipy": "scipy",
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