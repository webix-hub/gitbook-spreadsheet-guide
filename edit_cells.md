# Working with Cells

## **Copying, Cutting and Pasting Cells**

### **Copying Cells**

To **copy** a cell, you should take the following steps:

1\) Select a cell or a range of cells you want to copy.

2\) Right-click on it and select the **Copy** option in the context menu.

![Copying, Cutting and Pasting Cells](.gitbook/assets/cut\_copy\_paste.png)

You can also copy the cell(s) via the **"**_Ctrl+C / Command+C_**"** shortcut.

### **Cutting Cells**

To **cut** a cell, you should take the following steps:

1\) Select a cell or a range of cells you want to cut.

2\) Right-click on it and select the **Cut** option in the context menu.

You can also cut a cell via the **"**_Ctrl+X / Command+X_**"** shortcut.

### **Pasting Cells**

To **paste** the copied/cut cell(s), you should take the following steps:

1\) Select the cell(s) you want to paste into.

2\) Right-click on it and select the **Paste** option in the context menu.

You can also paste a cell via the **"**_Ctrl+V / Command+V_**"** shortcut.

When you copy or move the cell(s), you also copy or move styles, applied formulas, and conditional formats with it.&#x20;

### Special Paste

The widget allows you to perform a special paste. In this case, you can paste the following elements into the cell:

* **values** - paste only the values from the copied cell(s)
* **formulas** - paste only formulas, without values
* **styles** - paste only cell styles
* **conditional formats** - paste only the conditional formats.

To perform the **special paste**, you should take the following steps:

1. Copy a cell or a range of cells.
2. Select the cell you want to paste into.
3. Right-click on it and select the **Special paste** option in the context menu.
4. Select the paste option you need**.**

## Sorting Data in a Range

You can sort data in a selected range of cells in both ascending and descending directions. There are two ways to do that:

1\) Select a range of cells that contain data to be sorted.

![Selecting Cells for Sorting](.gitbook/assets/select\_for\_sorting.png)

2\) Make use of the corresponding button in the **Edit** section to sort data in either ascending or descending order:

* Click the **Sort A to Z** button to sort data in the descending order:

![Sort in Descending Order](.gitbook/assets/sort\_desc.png)

* Click the **Sort Z to A** button to sort data in the ascending order:

![Sort in Ascending Order](.gitbook/assets/sort\_asc.png)

Or:

1\) Right-click the cell/cells with data to be sorted to call the context menu.

2\) Select _Sort_->_Sort A to Z_, or _Sort_->_Sort Z to A_ option, depending on the desired sorting direction.

![Sorting via Context Menu](.gitbook/assets/sort\_via\_menu.png)

In the image below the range is sorted in the ascending order. Pay attention that the values in the **Total** column are recalculated accordingly:

![Sorted Column](.gitbook/assets/sorted\_range\_of\_cells.png)

## Adding Filters and Dropdown Lists into Cells

### Adding a Filter

You can add filters for cells of a column. While selecting an option in the added filter, the whole grid data will be filtered according to the value of this option.

![Filtering Cells](.gitbook/assets/cell\_with\_filter.png)

To filter data:

1\) Select the necessary range of cells in a column.

![Selecting Cells for Filtering](.gitbook/assets/select\_for\_filtering.png)

2\) Choose one of the following options:

* Click the **Create filter** button in the **Edit** section to add a filter into the top cell of the selected range.

![Create Filter Button](.gitbook/assets/create\_filter\_button.png)

* Right-click the selected range and select the _Create filter_ option in the context menu.&#x20;

![Create Filter Option](.gitbook/assets/create\_filter\_option.png)

A filter with options (cells' values from the range) will appear in the top cell of the selected range.

3\) Click on any filter option to filter data in the grid.

The image below shows a table filtered by the _Europe_ option from the filter.

![Filtered Table](.gitbook/assets/filtered\_sheet.png)

### Adding a Dropdown List

You can add a dropdown list with arbitrary options into a cell of a sheet.

![Adding Dropdown List](.gitbook/assets/add\_cell\_editor.png)

It's really easy to do:

1\) Select a cell to add a dropdown menu into.

2\) Click the **Add dropdown** button in the **Edit** section.

![Add Dropdown](.gitbook/assets/add\_cell\_editor.png)

3\) In the appeared popup add the range of cells the values of which will be used as options of the dropdown menu. There are two ways for that:

* Type the reference to the range as a pair of the starting and ending cells as A2:A5
* Select a range of cells in a sheet and the reference will appear in the input automatically

4\) To add an empty option to your list, check the **Empty** **option** checkbox.

<figure><img src=".gitbook/assets/add_dropdown_spreadsheet.png" alt=""><figcaption><p>Add Dropdown Popup</p></figcaption></figure>

5\) Click the **Save** button to add a dropdown list into a cell.

### Removing Filters and Dropdown Lists

To remove a filter/filters:

1\) Select cells with filters/dropdown lists.

2\) Click the **Clear** button in the **Edit** section of the toolbar.

3\) Select the _Clear dropdowns and filters_ option in the dropdown list.

![Clear Filters via Toolbar](.gitbook/assets/clear\_dropdowns\_filters\_button.png)

Or:

1\) Select cells with filters/dropdown lists.

2\) Right-click the selected cell/cells to call the context menu.

3\) Select _Clear_->_Dropdowns and filters_.

![Clear Filters via Context Menu](.gitbook/assets/clear\_dropdowns\_filters\_option.png)

## Locking a Cell

You can lock a cell to forbid editing its content. Locked cells will be marked with small orange locks in the bottom right corner. You can neither set the mouse cursor inside of them, nor change their values.

To lock/unlock cells, you can use one of the two available ways:

* Select a cell or several cells you want to lock and click the **Lock/unlock cell** button in the **Edit** section.

![Locking Cells via Toolbar](.gitbook/assets/lock\_cell\_button.png)

* Right-click a selected cell or a range of cells and choose the **Lock/unlock cell** option in the context menu.

![Locking Cells via Context Menu](.gitbook/assets/lock\_cells\_option.png)

## Adding Link into a Cell

It is possible to add a link to an external resource or a specific cell.

![Adding Link to a Cell](.gitbook/assets/cell\_with\_link.png)

To insert a link into a cell:

1\) Select a cell to add a link into.

2\) Choose one of the following options:

* Click the **Add link** button in the **Edit** section:        &#x20;

![Adding Link via Toolbar](.gitbook/assets/add\_link\_button.png)

* Right-click a cell and select the **Add link** option in the context menu.

![Adding Link via Context Menu](.gitbook/assets/add\_link\_option.png)

3\) In the appeared popup enter the text of the link in the first line and insert the link into the second line:

![Add Link Popup](.gitbook/assets/add\_link\_popup.png)

If you want to add the link to a specific cell, use "#" before the cell reference:

<figure><img src=".gitbook/assets/link_via_hashtag.png" alt=""><figcaption><p>Link to a Specific Cell</p></figcaption></figure>

4\) Click the **Save** button to apply changes.

## Adding Image in a Cell

You can add an image into a cell to illustrate data in the spreadsheet.

To insert an image into a cell:

1\) Select a cell to add an image into.

2\) Click the **Image** button in the **Insert** section:

![Adding Image](.gitbook/assets/image\_button.png)

3\) In the appeared popup insert a link to the image or select a file from the computer:

![Add Image Popup](.gitbook/assets/add\_image\_popup.png)

4\) Click the **Save** button to apply changes.

## Adding Sparkline in a Cell

You can add a graph (sparkline) into a cell to display tendencies of data values changing in a range of cells.

To insert a graph into a cell:

1\) Select a cell to add a graph into.

2\) Click the **Graph** button in the **Insert** section:

![Adding Sparkline](.gitbook/assets/graph\_button.png)

3\) In the appeared popup enter sparkline configuration:

* choose the type of the line
* set the cell range&#x20;
* select the color of the graph (except for the Pie type) or two colors (for positive and negative values) for the Bar type

![Add Sparkline Popup](.gitbook/assets/add\_graph\_popup.png)

4\) Click the **Save** button to apply changes.

## Adding Comments in a Cell

You can add comments for a cell. To insert comments into a cell:

1\) Select a cell to add comments into.

2\) Choose one of the following options:

* Click the **Comment** button in the **Insert** section:

![Adding Comments](.gitbook/assets/comments\_button.png)

* Right-click a cell and select the **Comment** option in the context menu.

![Adding Comment via Context Menu](.gitbook/assets/add\_comment\_option.png)

3\) In the appeared popup enter a text of the comment:

![Add Comments Popup](.gitbook/assets/add\_comment\_text.png)

4\) Click any cell outside the textarea to save the comment.

You can change the size of the comment popup by dragging the resizer handle in the right bottom corner.

![Resize Comment Popup](.gitbook/assets/comment\_resizer.png)
