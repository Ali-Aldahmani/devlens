export const r = {
  name: "R",
  import: "",
  categories: [
    {
      title: "Basics & Variables",
      items: [
        { snippet: "x <- 5", desc: "Assign value using `<-` operator" },
        { snippet: "y = 10", desc: "Alternative assignment with `=`" },
        { snippet: "print(x)", desc: "Print variable value" },
        { snippet: "typeof(x)", desc: "Check variable type" },
        { snippet: "class(x)", desc: "Check object class" },
      ],
    },
    {
      title: "Data Types & Structures",
      items: [
        { snippet: "num <- 42          # Numeric", desc: "Numeric variable" },
        { snippet: "char <- \"Hello\"    # Character", desc: "Character variable" },
        { snippet: "logical <- TRUE     # Boolean", desc: "Logical variable" },
        { snippet: "vec <- c(1,2,3)     # Vector", desc: "Create a vector" },
        { snippet: "mat <- matrix(1:6, nrow=2, ncol=3)", desc: "Create a matrix" },
        { snippet: "df <- data.frame(a=1:3, b=c('x','y','z'))", desc: "Create a data frame" },
        { snippet: "lst <- list(num, char, vec)", desc: "Create a list" },
      ],
    },
    {
      title: "Indexing & Subsetting",
      items: [
        { snippet: "vec[2]", desc: "Access second element of vector" },
        { snippet: "mat[1,2]", desc: "Access element at row 1, col 2" },
        { snippet: "df$a", desc: "Access column `a` in data frame" },
        { snippet: "df[1:2, ]", desc: "Access first two rows" },
        { snippet: "df[df$a > 1, ]", desc: "Subset rows based on condition" },
      ],
    },
    {
      title: "Functions & Control Flow",
      items: [
        { snippet: "my_func <- function(x) {\n  return(x^2)\n}", desc: "Define a function" },
        { snippet: "if (x > 0) {\n  print('Positive')\n} else {\n  print('Non-positive')\n}", desc: "If-else statement" },
        { snippet: "for (i in 1:5) {\n  print(i)\n}", desc: "For loop" },
        { snippet: "while (x > 0) {\n  x <- x - 1\n}", desc: "While loop" },
        { snippet: "repeat {\n  print(x)\n  break\n}", desc: "Repeat loop with break" },
      ],
    },
    {
      title: "Data Manipulation",
      items: [
        { snippet: "sum(vec)", desc: "Sum of vector elements" },
        { snippet: "mean(vec)", desc: "Mean of vector elements" },
        { snippet: "median(vec)", desc: "Median" },
        { snippet: "sort(vec, decreasing=TRUE)", desc: "Sort descending" },
        { snippet: "unique(vec)", desc: "Unique elements" },
        { snippet: "length(vec)", desc: "Length of vector" },
        { snippet: "cbind(vec1, vec2)", desc: "Combine columns" },
        { snippet: "rbind(vec1, vec2)", desc: "Combine rows" },
      ],
    },
    {
      title: "Plotting & Visualization",
      items: [
        { snippet: "plot(x, y)", desc: "Basic scatter plot" },
        { snippet: "hist(vec, breaks=10)", desc: "Histogram" },
        { snippet: "boxplot(vec)", desc: "Boxplot" },
        { snippet: "barplot(table(df$a))", desc: "Bar plot of counts" },
      ],
    },
    {
      title: "Packages & Libraries",
      items: [
        { snippet: "install.packages(\"dplyr\")", desc: "Install package" },
        { snippet: "library(dplyr)", desc: "Load package" },
        { snippet: "library(ggplot2)", desc: "Load ggplot2 for plotting" },
      ],
    },
    {
      title: "dplyr Basics",
      items: [
        { snippet: "df %>% filter(a > 1)", desc: "Filter rows" },
        { snippet: "df %>% select(a, b)", desc: "Select columns" },
        { snippet: "df %>% mutate(c = a + b)", desc: "Add new column" },
        { snippet: "df %>% arrange(desc(a))", desc: "Sort descending" },
        { snippet: "df %>% summarise(mean_a = mean(a))", desc: "Summarise data" },
      ],
    },
  ],
};