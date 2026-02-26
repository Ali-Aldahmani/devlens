export const seaborn = {
  name: "Seaborn",
  import: "import seaborn as sns",
  categories: [
    {
      title: "Distribution Plots",
      items: [
        { snippet: "sns.histplot(data=df, x='col')", desc: "Histogram" },
        { snippet: "sns.histplot(data=df, x='col', kde=True)", desc: "Histogram with KDE curve" },
        { snippet: "sns.kdeplot(data=df, x='col')", desc: "Kernel density estimate" },
        { snippet: "sns.kdeplot(data=df, x='col', y='col2')", desc: "2D KDE plot" },
        { snippet: "sns.ecdfplot(data=df, x='col')", desc: "Empirical CDF" },
        { snippet: "sns.rugplot(data=df, x='col')", desc: "Rug plot (tick marks)" },
      ],
    },
    {
      title: "Categorical Plots",
      items: [
        { snippet: "sns.barplot(data=df, x='cat', y='val')", desc: "Bar plot with CI" },
        { snippet: "sns.boxplot(data=df, x='cat', y='val')", desc: "Box plot" },
        { snippet: "sns.violinplot(data=df, x='cat', y='val')", desc: "Violin plot" },
        { snippet: "sns.stripplot(data=df, x='cat', y='val')", desc: "Strip/jitter plot" },
        { snippet: "sns.swarmplot(data=df, x='cat', y='val')", desc: "Swarm plot (no overlap)" },
        { snippet: "sns.pointplot(data=df, x='cat', y='val')", desc: "Point plot with CI" },
        { snippet: "sns.countplot(data=df, x='cat')", desc: "Count occurrences per category" },
      ],
    },
    {
      title: "Relational Plots",
      items: [
        { snippet: "sns.scatterplot(data=df, x='a', y='b')", desc: "Scatter plot" },
        { snippet: "sns.scatterplot(data=df, x='a', y='b', hue='cat')", desc: "Scatter colored by category" },
        { snippet: "sns.lineplot(data=df, x='a', y='b')", desc: "Line plot with CI band" },
        { snippet: "sns.lineplot(data=df, x='a', y='b', hue='group')", desc: "Multi-group line plot" },
        { snippet: "sns.relplot(data=df, x='a', y='b', col='group')", desc: "Faceted relational plot" },
      ],
    },
    {
      title: "Matrix & Regression Plots",
      items: [
        { snippet: "sns.heatmap(df.corr(), annot=True)", desc: "Correlation heatmap" },
        { snippet: "sns.heatmap(data, cmap='coolwarm', fmt='.2f')", desc: "Styled heatmap" },
        { snippet: "sns.clustermap(df)", desc: "Hierarchically clustered heatmap" },
        { snippet: "sns.pairplot(df)", desc: "Pairwise scatter matrix" },
        { snippet: "sns.pairplot(df, hue='species')", desc: "Pairplot colored by category" },
        { snippet: "sns.regplot(data=df, x='a', y='b')", desc: "Scatter with regression line" },
        { snippet: "sns.lmplot(data=df, x='a', y='b', hue='group')", desc: "Faceted regression plot" },
        { snippet: "sns.residplot(data=df, x='a', y='b')", desc: "Regression residuals plot" },
      ],
    },
    {
      title: "Figure-level & Faceting",
      items: [
        { snippet: "sns.FacetGrid(df, col='group')", desc: "Create facet grid" },
        { snippet: "g = sns.FacetGrid(df, col='c', row='r')\ng.map(sns.scatterplot, 'x', 'y')", desc: "Map plot to facet grid" },
        { snippet: "sns.catplot(data=df, x='x', y='y', kind='box')", desc: "Faceted categorical plot" },
        { snippet: "sns.displot(data=df, x='col', col='group')", desc: "Faceted distribution plot" },
      ],
    },
    {
      title: "Styling & Themes",
      items: [
        { snippet: "sns.set_theme(style='whitegrid')", desc: "Set whitegrid theme" },
        { snippet: "sns.set_theme(style='darkgrid')", desc: "Set darkgrid theme" },
        { snippet: "sns.set_palette('pastel')", desc: "Set color palette" },
        { snippet: "sns.color_palette('husl', 8)", desc: "Get 8-color HUSL palette" },
        { snippet: "sns.set_context('talk')", desc: "Scale for talk/presentation" },
        { snippet: "sns.set_context('paper', font_scale=1.2)", desc: "Scale for paper + font size" },
        { snippet: "sns.despine()", desc: "Remove top/right spines" },
      ],
    },
  ],
};