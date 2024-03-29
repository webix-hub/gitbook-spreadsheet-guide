# Working with embedded Charts and Images

It is possible to add and fine-tune above-cell charts and images in Spreadsheet.

## Adding Views to Spreadsheet

To add a view to SpreadSheet click the **Image** button (or **Graphs** for charts) in the **Insert** section and choose the _Add above cells_ option:

![Add Image](.gitbook/assets/add\_image.png)

After that select an image to upload or provide a configuration for the new chart via the dialog for editing.

## Working with Charts

### Specifying Data for Charts

In order to display data in a chart you should specify the source of the cells for it. There are 2 ways to do it:

1\) Type the range of cells you want to get data from in the **Range** field:

![Range Field](.gitbook/assets/chart\_range.png)

You can also define the left column as the X-axis or/and the top row as the legend, by checking the corresponding checkboxes.

**Note** that the range values are case-sensitive and must be in the upper-case.

2\) Put the cursor in the **Range** field and then select the area of the cells you want to get data from. The range will be calculated automatically:

![Selecting Range of Cells](.gitbook/assets/select\_chart\_range.gif)

### Working with Series

Roughly speaking all default chart types can be divided into two groups:

1. Linear (_Line, Spline, Spline Area, Area, Bar, Scatter and Radar_)
2. Circular (_Pie and Donut_)

![Linear and Circular Charts](.gitbook/assets/chart\_types.png)

In the **Series** tab you can:

1. Specify the range for a series&#x20;
2. Choose an appropriate color from a color picker
3. Enable or disable tooltips for markers
4. Enable or disable labels for markers
5. Define the markers shape
6. Delete a series or add a new line

![](<.gitbook/assets/chart\_series (1).png>)

### Working with Legend and Axes

In the **Extras** tab you can tune the look of the legend and axes.

![](<.gitbook/assets/chart\_extras (1).png>)

#### Tuning Legend

To define the data source for the legend you should provide the range of the cells to get data from in the **Range** field.

It is also possible to specify the _horizontal_ and _vertical alignment_ of the legend via the corresponding controls.

![Legend is Located in Top Left Corner](.gitbook/assets/chart\_legend.png)

#### Tuning Axes

To define the data source for the X-axis type the range of the cells to get data from in the dedicated **Range** field.

You can also provide _titles_ for both X and Y-axes. You can also provide _titles_ for both axes.

![Background Lines are Colored Purple](.gitbook/assets/chart\_lines\_color.png)

Apart from the \*Title\* field mentioned above, the Y-axis has the several configurable options on its own:

1. Origin - the scale origin on the Y-axis
2. Start - the minimum value of the scale on the Y-Axis
3. End - the maximum value of the scale on the Y-Axis
4. Step - the scale step on the Y-Axis.

![Y-axis specific options in use](.gitbook/assets/yaxis-specific-settings.png)

## Downloading Views

To download an image or a chart click on the menu in the right top corner of a view, mouse over the _Download_ option and choose an appropriate variant:

![Download Chart](.gitbook/assets/chart\_download.png)

## Removing Views from Spreadsheet

In order to remove an image or a chart from SpreadSheet click on the menu in the right top corner of a view and choose the corresponding option:

![Remove Image](.gitbook/assets/chart\_remove.png)

You can also remove a view by selecting it and pressing the _Backspace_ key.
