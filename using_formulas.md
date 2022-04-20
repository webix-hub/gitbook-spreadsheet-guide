# Using Formulas for Math Calculations

Webix SpreadSheet supports simple math expressions and allows making calculations with the help of formulas. The following elements are allowed in formulas:

* numbers
* basic mathematical operators, which are: +, -, /, \*
* comparison operators: **<**, **>**, **<=**, **>=**, **<>**, **=**
* the **&** operator for connecting two or more text strings into a single text
* cell references
* Excel-like functions

## Entering a Formula

To enter a formula into a cell:

1\) Type the **=** sign in a cell to start the formula.

2\) Type a combination of numbers and math operators:

* **+** - for adding
* **-**  - for subtracting
* **\*** - for multiplying
* **/** - for dividing

For example: =8+5, =8-5, =8\*5, =8/5.

You can also enter any Excel function after the "=" symbol.

For example: =SUM(C2:D2).

You can find the full list of functions below.

3\) Press the **Enter** button to get the result of formula calculation.

****

You can show formulas in cells instead of values. To do it, click on the **Hide/show formulas** button **** in the **View** section.

## The List of Supported Functions

SpreadSheet can work with the Excel functions. Below you'll find the full list of functions with detailed descriptions.

### Math Functions

* **ABS** - returns the absolute value of a number. The absolute value of a number is the number without its sign.
* **AVERAGE** - returns the average (arithmetic mean) of the arguments;
  *   if a range or a cell reference argument contains text, logical values, or empty cells, those values are ignored;

      however, cells with the value zero are included.
* **CONCATENATE** - joins values from a range of cells into a string.
* **COUNT** -  counts the number of cells that contain numbers, and counts numbers within the list of arguments;
  * empty cells, logical values, text, or error values in the array or reference are not counted.
* **COUNTA** - counts the number of cells that are not empty in a range, zero is excluded.
* **COUNTBLANK** - counts empty cells in a specified range of cells;
  * cells with zero values are not counted.
* **EVEN** - returns number rounded up to the nearest even integer.
* **INT** - rounds a number down to the nearest integer.
* **MAX** - returns the largest value in a set of values;
  *   empty cells, logical values, or text in the array or reference are ignored.

      If the arguments contain no numbers, MAX returns 0 (zero).
* **MIN** - returns the smallest number in a set of values.
  *   empty cells, logical values, or text in the array or reference are ignored.

      If the arguments contain no numbers, MIN returns 0 (zero).
* **ODD** - returns number rounded up to the nearest odd integer.
* **PI** - returns the number 3.14159265358979, the mathematical constant pi, accurate to 15 digits.
* **POWER** - returns the result of a number raised to a power;
  * works with real numbers.
* **PRODUCT** - multiplies all the numbers given as arguments and returns the product;
  *   only numbers in the array or reference are multiplied.

      Empty cells, logical values, and text in the array or reference are ignored.
* **QUOTIENT** -returns the integer portion of a division. Use this function when you want to discard the remainder of a division;
  * works with real numbers.
*   **RAND** - returns an evenly distributed random real number greater than or equal to 0 and less than 1.

    A new random real number is returned every time the worksheet is calculated.
* **ROUND** - rounds a number to a specified number of digits.
* **ROUNDDOWN** - rounds a number down to a specified number of digits.
* **ROUNDUP** - rounds a number up to a specified number of digits.
* **SQRT** - returns a positive square root.
*   **STDEVP** - calculates standard deviation based on the entire population given as arguments.

    The standard deviation is a measure of how widely values are dispersed from the average value (the mean).

    * empty cells, logical values, text, or error values in the array or reference are ignored.
* **SUM** - adds values;
  * empty cells, logical values like TRUE, or text are ignored.
* **SUMPRODUCT** - multiplies corresponding components in the given arrays, and returns the sum of those products.
  *   for valid products only numbers are multiplied. Empty cells, logical values, and text are ignored.

      Treats array entries that are not numeric as if they were zeros.
* **SUMSQ** - returns the sum of the squares of the arguments;
  * empty cells, logical values, text, or error values in the array or reference are ignored.
* **TRUNC** - truncates a number to an integer by removing the fractional part of the number.
* **VARP** - calculates variance based on the entire population;
  * empty cells, logical values, text, or error values in the array or reference are ignored.

### String Functions

* **CONCATENATE** (A1,B2, C2:D4) - joins several text items into one text item.
* **LEFT** (text, count) - returns the first character or characters (leftmost) in a text string, based on the number of characters you specify.
* **LEN** (text) - returns the number of characters in a text string.
* **LOWER** (text) - converts all uppercase letters in a text string to lowercase.
* **MID** (text, start, count) - returns a specific number of characters from a text string starting at the position you specify.
* **PROPER** (text) -  capitalizes the first letter in each word of a text value.
* **RIGHT** (text, count) - returns the last character or characters (rightmost) in a text string, based on the number of characters you specify.
* **TRIM** (text) - removes spaces from text.
* **UPPER** (text) - converts text to uppercase.

### Date Functions

* **DATE** (year, month, day) - creates a valid Excel date from a year, a month, and a day
* **TIME** (hour, minute, second) - creates a valid Excel time from hours, minutes, and seconds
* **DAY** (date) - returns the day of the month from the given Excel date
* **MONTH** (date) - returns the number of the month from the given Excel date (counting from 1)
* **YEAR** (date) - returns the year from the given Excel date
* **NOW** () - returns the current date
* **DATEDIF** (start, end, unit) - returns the difference between two dates in years, months, or days. The available units are:
  * "Y" - in years
  * "M" - in months
  * "D" - in days
  * "MD" - in days, ignoring months and years
  * "YM" - in months, ignoring days and years
  * "YD" - in days, ignoring years

### Other Functions

* **IMAGE** (url) - displays an image the URL of which is set as a parameter of the function
* **SPARKLINE** (range, type, color1, color2) - draws a sparkline according to the specified parameters
* **LINK** (url, text) -  creates a shortcut or jump that opens a document stored on a network server, an intranet, or the Internet
  * link URL can be a text string or a reference to a cell that contains the link
* **IF** (smth is true, then do smth, otherwise do smth else) - specifies a logical test to perform (e.g. IF(A1 < 10, "Yes" , "No"))
  * the function supports the following operators <, >, <=, >=, <>, =

## Adding Named Range

You can specify a name for a particular range of cells and then use it in formulas for calculations. Thus, the formula will be easier to understand and work with.

To add a named range:

1\) Choose one of the ways below:

* Click the **Named Ranges** button in the **Edit** section.

![Named Ranges Button](.gitbook/assets/named\_ranges\_button.png)

* Right-click any cell and select the _Named Ranges_ option in the context menu.

![Named Range Option](.gitbook/assets/named\_range\_context\_option.png)

2\) In the opened popup specify the desired name and add cells that will be included in the range in one of the ways below:

* Type the reference to the range as a pair of the starting and ending cells as A2:A5
* Select a range of cells in a sheet and the reference will appear in the input automatically

_Adding a range named Total for cells F2-F4_

![Named Range Popup](.gitbook/assets/named\_range\_popup.png)

3\) Click the **Save** button to save a new range. It will appear in the list of ranges in the left part of the popup.

![Saving New Named Range](.gitbook/assets/saved\_named\_range.png)

### Using Named Range in Formulas

After a named range is added into a list, you can use it as an argument in a function/formula. The image below shows how the _Total\_range for cells F2-F4 is used in the \_SUM_ function:

![Using Named Range in Function](.gitbook/assets/using\_named\_range.png)

As a result, the values of the cells F2-F4 are summed up.

![Result of Using Named Range in Function](.gitbook/assets/named\_range\_result.png)

### Editing Named Range

To make changes in an existing named range:

1\) Click the **Named Ranges** button

![Named Ranges Button](.gitbook/assets/named\_ranges\_button.png)

2\) Apply the necessary action by clicking the corresponding icon in the line with the named range in question:

* To edit the range, click the "pencil" icon.
* To delete the range, click the "basket" icon.

![Editing Icons for Named Range](.gitbook/assets/named\_range\_edit\_icons.png)
