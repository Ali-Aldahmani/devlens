export const scipy = {
  name: "SciPy",
  import: "import scipy",
  categories: [
    {
      title: "Integration",
      items: [
        { snippet: "from scipy.integrate import quad\nresult, error = quad(lambda x: x**2, 0, 1)", desc: "Definite integral of a function" },
        { snippet: "from scipy.integrate import solve_ivp\ndef f(t, y): return -y\ny0 = [1]\nsol = solve_ivp(f, [0, 5], y0)", desc: "Solve ODE initial value problem" },
      ],
    },
    {
      title: "Optimization",
      items: [
        { snippet: "from scipy.optimize import minimize\nres = minimize(lambda x: x**2 + 2*x + 1, x0=0)", desc: "Minimize a scalar function" },
        { snippet: "from scipy.optimize import curve_fit\nimport numpy as np\ndef f(x, a, b): return a*x + b\npopt, pcov = curve_fit(f, xdata, ydata)", desc: "Fit a function to data" },
      ],
    },
    {
      title: "Linear Algebra",
      items: [
        { snippet: "from scipy.linalg import lu\nP, L, U = lu(A)", desc: "LU decomposition" },
        { snippet: "from scipy.linalg import svd\nU, s, Vh = svd(A)", desc: "Singular value decomposition" },
        { snippet: "from scipy.linalg import inv\ninv_A = inv(A)", desc: "Matrix inverse" },
      ],
    },
    {
      title: "Statistics",
      items: [
        { snippet: "from scipy import stats\nstats.ttest_ind(sample1, sample2)", desc: "Independent T-test" },
        { snippet: "stats.pearsonr(x, y)", desc: "Pearson correlation coefficient" },
        { snippet: "stats.norm.cdf(1.96)", desc: "CDF of normal distribution" },
        { snippet: "stats.poisson.pmf(k, mu)", desc: "Poisson probability mass function" },
      ],
    },
    {
      title: "Signal Processing",
      items: [
        { snippet: "from scipy.signal import convolve\nresult = convolve(signal1, signal2)", desc: "Convolve two signals" },
        { snippet: "from scipy.signal import butter, filtfilt\nb, a = butter(3, 0.05)\ny = filtfilt(b, a, data)", desc: "Butterworth filter" },
      ],
    },
    {
      title: "Spatial & Distance",
      items: [
        { snippet: "from scipy.spatial import distance\nd = distance.euclidean(p1, p2)", desc: "Euclidean distance between points" },
        { snippet: "from scipy.spatial import KDTree\ntree = KDTree(points)\ntree.query(point)", desc: "Nearest neighbor search" },
      ],
    },
  ],
};