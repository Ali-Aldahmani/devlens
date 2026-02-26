"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matplotlib = void 0;
exports.matplotlib = {
    name: "Matplotlib",
    import: "import matplotlib.pyplot as plt",
    categories: [
        {
            title: "Basic Plots",
            items: [
                { snippet: "plt.plot(x, y)", desc: "Line plot" },
                { snippet: "plt.plot(x, y, 'r--o')", desc: "Red dashed line with markers" },
                { snippet: "plt.scatter(x, y)", desc: "Scatter plot" },
                { snippet: "plt.bar(x, height)", desc: "Bar chart" },
                { snippet: "plt.barh(y, width)", desc: "Horizontal bar chart" },
                { snippet: "plt.hist(data, bins=20)", desc: "Histogram with 20 bins" },
                { snippet: "plt.pie(values, labels=labels)", desc: "Pie chart" },
                { snippet: "plt.boxplot(data)", desc: "Box and whisker plot" },
                { snippet: "plt.errorbar(x, y, yerr=err)", desc: "Line plot with error bars" },
                { snippet: "plt.fill_between(x, y1, y2)", desc: "Fill area between two lines" },
            ],
        },
        {
            title: "Labels & Titles",
            items: [
                { snippet: "plt.title('My Chart')", desc: "Set chart title" },
                { snippet: "plt.xlabel('X Axis')", desc: "Set X-axis label" },
                { snippet: "plt.ylabel('Y Axis')", desc: "Set Y-axis label" },
                { snippet: "plt.legend(['series1', 'series2'])", desc: "Add legend" },
                { snippet: "plt.legend(loc='upper right')", desc: "Legend at specific location" },
                { snippet: "plt.annotate('note', xy=(x,y))", desc: "Annotate a point" },
                { snippet: "plt.text(x, y, 'text')", desc: "Add text at coordinates" },
            ],
        },
        {
            title: "Axes & Grid",
            items: [
                { snippet: "plt.xlim(0, 10)", desc: "Set X-axis limits" },
                { snippet: "plt.ylim(0, 100)", desc: "Set Y-axis limits" },
                { snippet: "plt.xticks(rotation=45)", desc: "Rotate X tick labels" },
                { snippet: "plt.grid(True)", desc: "Show grid lines" },
                { snippet: "plt.grid(True, linestyle='--', alpha=0.5)", desc: "Styled grid" },
                { snippet: "plt.xscale('log')", desc: "Logarithmic X scale" },
                { snippet: "plt.axis('equal')", desc: "Equal aspect ratio" },
            ],
        },
        {
            title: "Subplots & Figures",
            items: [
                { snippet: "fig, ax = plt.subplots()", desc: "Create figure and axes" },
                { snippet: "fig, axes = plt.subplots(2, 3)", desc: "2x3 grid of subplots" },
                { snippet: "fig, axes = plt.subplots(2, 2, figsize=(10, 8))", desc: "Subplots with size" },
                { snippet: "plt.figure(figsize=(10, 6))", desc: "Set figure size" },
                { snippet: "plt.tight_layout()", desc: "Auto-adjust subplot spacing" },
                { snippet: "plt.subplot(2, 2, 1)", desc: "Select subplot at position 1" },
                { snippet: "fig.suptitle('Main Title')", desc: "Overall figure title" },
            ],
        },
        {
            title: "Styling",
            items: [
                { snippet: "plt.style.use('seaborn')", desc: "Apply seaborn style" },
                { snippet: "plt.style.use('ggplot')", desc: "Apply ggplot style" },
                { snippet: "plt.plot(x, y, color='#FF5733', linewidth=2)", desc: "Custom color and width" },
                { snippet: "plt.scatter(x, y, c=colors, cmap='viridis', s=size)", desc: "Colored scatter with cmap" },
                { snippet: "plt.colorbar()", desc: "Add colorbar to plot" },
                { snippet: "plt.rcParams['font.size'] = 14", desc: "Set global font size" },
            ],
        },
        {
            title: "Saving & Showing",
            items: [
                { snippet: "plt.show()", desc: "Display the plot" },
                { snippet: "plt.savefig('plot.png', dpi=300)", desc: "Save as PNG at 300dpi" },
                { snippet: "plt.savefig('plot.pdf', bbox_inches='tight')", desc: "Save as PDF, no clipping" },
                { snippet: "plt.clf()", desc: "Clear current figure" },
                { snippet: "plt.close('all')", desc: "Close all figures" },
            ],
        },
    ],
};
//# sourceMappingURL=matplotlib.js.map