# Formatting Dates

For dates, there is the _Date_ format. You can apply one of the predefined formats or create a custom one.

## Applying a Predefined Date Format

You can choose one of the predefined date and time formats:

1\) Select a cell or a range of cells to format.\
&#x20;2\) Click the **Date format** button in the Number section to open a drop-down list with number formats and select the **Date** option.\
&#x20;3\) Select the format:

![Date Format Settings](.gitbook/assets/default\_date\_formats.png)

## Creating a Custom Date Format

You can customize the predefined Date formats.

To customize a predefined date format:

1\) Select a cell or a range of cells to apply custom format to.\
&#x20;2\) Click the format button in the **Number** section and select the **Custom** option.\
&#x20;3\) Edit the date format line:

![Custom Date Format](.gitbook/assets/custom\_date\_format.png)

An example of a format line:

```
mm/dd/yyyy hh:mm
```

4\) To apply the new format, click **Save**.

## Date Format Characters

These are the allowed characters for a date format string:

* the date part:
  * "yy" - the year as a two-digit number (00 to 99);
  * "yyyy" - the year as a four-digit number (1900-9999);
  * "m" - the month as a number without a leading zero (1 to 12);
  * "mm" - the month as a number with a leading zero (01 to 12);
  * "mmm" - the month as an abbreviation (Jan to Dec);
  * "mmmm" - the month as a full name (January to December);
  * "mmmmm" - interpreted by Webix as "mmmm"
  * "d" - the day as a number without a leading zero (1 to 31);
  * "dd" - the day as a number with a leading zero (01 to 31);
  * "ddd" - the day as an abbreviation (Sun to Sat);
  * "dddd" - the day as a full name (Sunday to Saturday);
* the time part:
  * "h" - the hour based on the 24-hour clock (0 to 23);
  * "hh" - the hour based on the 24-hour clock with a leading zero (00 to 23);
  * "m"- interpreted by Webix as "mm"
  * "mm" - the minute as a number with a leading zero (00 to 59);
  * "s" - interpreted by Webix as "ss"
  * "ss" - the second as a number with a leading zero (00 to 59);
  * "AM/PM" - switches to the 12-hour clock and displays AM or PM accordingly.

> As in Excel, the letter **m** can represent either months or minutes, and Webix Spreadsheet automatically selects the appropriate interpretation based on the context. For example, `hh:mm` means hours:minutes, while `dd.mm.yyyy` means day.month.year.

## Displaying Milliseconds

To display milliseconds, add **.000** at the end of the time format:

```
hh:mm:ss.000
```
