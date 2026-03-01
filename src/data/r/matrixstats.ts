export const matrixStats = {
  name: "matrixStats",
  import: "library(matrixStats)",
  categories: [
    {
      title: "Row & Column Operations",
      items: [
        { snippet: "rowSums(mat)", desc: "Sum of each row" },
        { snippet: "colSums(mat)", desc: "Sum of each column" },
        { snippet: "rowMeans(mat)", desc: "Mean of each row" },
        { snippet: "colMeans(mat)", desc: "Mean of each column" },
        { snippet: "rowMedians(mat)", desc: "Median of each row" },
        { snippet: "colMedians(mat)", desc: "Median of each column" },
        { snippet: "rowMaxs(mat)", desc: "Max of each row" },
        { snippet: "colMaxs(mat)", desc: "Max of each column" },
        { snippet: "rowMins(mat)", desc: "Min of each row" },
        { snippet: "colMins(mat)", desc: "Min of each column" },
      ],
    },
    {
      title: "Summary Statistics",
      items: [
        { snippet: "rowVars(mat)", desc: "Variance of each row" },
        { snippet: "colVars(mat)", desc: "Variance of each column" },
        { snippet: "rowSds(mat)", desc: "Standard deviation of each row" },
        { snippet: "colSds(mat)", desc: "Standard deviation of each column" },
        { snippet: "rowRanges(mat)", desc: "Range (min, max) of each row" },
        { snippet: "colRanges(mat)", desc: "Range (min, max) of each column" },
      ],
    },
    {
      title: "Element-wise & Other Utilities",
      items: [
        { snippet: "mat[mat > 5]", desc: "Get all elements greater than 5" },
        { snippet: "which(mat > 5, arr.ind = TRUE)", desc: "Get indices of elements > 5" },
        { snippet: "apply(mat, 1, sum)", desc: "Custom row-wise operation (like rowSums)" },
        { snippet: "apply(mat, 2, mean)", desc: "Custom column-wise operation (like colMeans)" },
      ],
    },
  ],
};