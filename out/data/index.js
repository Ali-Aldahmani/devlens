"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sklearn = exports.seaborn = exports.matplotlib = exports.pandas = exports.numpy = exports.importDetectionMap = exports.libraries = void 0;
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
// Registry of all available libraries
exports.libraries = {
    numpy: numpy_1.numpy,
    pandas: pandas_1.pandas,
    matplotlib: matplotlib_1.matplotlib,
    seaborn: seaborn_1.seaborn,
    sklearn: sklearn_1.sklearn,
};
// Maps import strings found in Python files → library keys
// Used for auto-detection
exports.importDetectionMap = {
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
};
//# sourceMappingURL=index.js.map