## Sorting Data in a Range

You can sort data in a selected range of cells in both ascending and descending directions. There are two ways to do that:

1) Select a range of cells that contain data to be sorted.

![Selecting Cells for Sorting](img/select_for_sorting.png)

2) Make use of the corresponding button in the **Edit** section to sort data in either ascending or descending order:

- Click the **Sort A to Z** button to sort data in the descending order:

![Sort in Descending Order](img/sort_desc.png)

- Click the **Sort Z to A** button to sort data in the ascending order:

![Sort in Ascending Order](img/sort_asc.png)

Or:

1) Right-click the cell/cells with data to be sorted to call the context menu.

2) Select *Sort*->*Sort A to Z*, or *Sort*->*Sort Z to A* option, depending on the desired sorting direction.

![Sorting via Context Menu](img/sort_via_menu.png)

In the image below the range is sorted in the ascending order. Pay attention that the values in the **Total** column are recalculated accordingly:

![Sorted Column](img/sorted_range_of_cells.png)

## Filtering Data 

### Adding a filter

You can add filters for cells of a column. While selecting an option in the added filter, the whole grid data will be filtered according to the value of this option.

![Filtering Cells](img/cell_with_filter.png)

To filter data:

1) Select the necessary range of cells in a column.

![Selecting Cells for Filtering](img/select_for_filtering.png)

2) Choose one of the following options:

- Click the **Create filter** button in the **Edit** section to add a filter into the top cell of the selected range.

![Create Filter Button](img/create_filter_button.png)

- Right-click the selected range and select the *Create filter* option in the context menu. 

![Create Filter Option](img/create_filter_option.png)

A filter with options (cells' values from the range) will appear in the top cell of the selected range.

3) Click on any filter option to filter data in the grid.

The image below shows a table filtered by the *Europe* option from the filter.

![Filtered Table](img/filtered_sheet.png)

### Removing filters

To remove a filter/filters:

1) Select a cell/cells with filter/filters.

2) Click the **Clear** button in the **Edit** section of the toolbar.

3) Select the *Clear dropdowns and filters* option in the dropdown list.

![Clear Filters via Toolbar](img/clear_dropdowns_filters_button.png)

Or:

1) Right-click the cell/cells with filter/filters to call the context menu.

2) Select *Clear*->*Dropdowns and filters*.

![Clear Filters via Context Menu](img/clear_dropdowns_filters_option.png)



## Locking a Cell

You can lock a cell to forbid editing its content. Locked cells will be marked with small orange locks in the bottom right corner. You can neither set the mouse cursor inside of them, nor change their values.

To lock/unlock cells, you can use one of the two available ways: 

- Select a cell or several cells you want to lock and click the **Lock/unlock cell** button in the **Edit** section.

![Locking Cells via Toolbar](img/lock_cell_button.png)

- Right-click a selected cell or a range of cells and choose the **Lock/unlock cell** option in the context menu.

![Locking Cells via Context Menu](img/lock_cells_option.png)


## Adding Link into a Cell

It is possible to add a link to an external resource into a cell. 

![Adding Link to a Cell](img/cell_with_link.png)

To insert a link into a cell:

1) Select a cell to add a link into.

2) Choose one of the following options:

- Click the **Add link** button in the **Edit** section:         
                 
![Adding Link via Toolbar](img/add_link_button.png)          

- Right-click a cell and select the **Add link** option in the context menu.

![Adding Link via Context Menu](img/add_link_option.png)

3) In the appeared popup enter the text of the link in the first line and insert the link into the second line:  

![Add Link Popup](img/add_link_popup.png)

4) Click the **Save** button to apply changes.

## Adding a Dropdown List into a Cell

You can add a dropdown list with arbitrary options into a cell of a sheet.

![Adding Dropdown List](img/add_cell_editor.png)

It's really easy to do:

1) Select a cell to add a dropdown menu into.

2) Click the **Add dropdown** button in the **Edit** section.

![Add Dropdown](img/add_cell_editor.png)     

3) In the appeared popup add the range of cells the values of which will be used as options of the dropdown menu.
There are two ways for that:

- Type the reference to the range as a pair of the starting and ending cells as A2:A5
- Select a range of cells in a sheet and the reference will appear in the input automatically

![Add Dropdown Popup](img/dropdown_popup.png)     

4) Click the **Save** button to add a dropdown list into a cell.
