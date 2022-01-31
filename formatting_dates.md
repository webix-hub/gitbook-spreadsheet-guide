# Formatting Dates

For dates, there is the _Date_ format.

To apply the date format to a cell value:

1\) Select a cell or a range of cells to format.\
&#x20;2\) Click the **Date format** button in the Number section to open a drop-down list with number formats.\
&#x20;3\) Choose the necessary format that will be applied to the selected cells.\


## Customizing the Default Date Format

You can choose one of the predefined date and time formats:

1\) Select a cell or a range of cells to format.\
&#x20;2\) Click the **Date format** button in the Number section to open a drop-down list with number formats and select the **Date** option.\
&#x20;3\) Select **Date**.\
&#x20;4\) Select the format:

![Date Format Settings](.gitbook/assets/default\_date\_formats.png)

## Custom Date Format

You can customize the predefined Date formats.

To customize a predefined date format:

1\) Select a cell or a range of cells to apply custom format to.\
&#x20;2\) Click the format button in the **Number** section and select the **Custom** option.\
&#x20;3\) Select **Custom**.\
&#x20;4\) Edit the date format line:

![Custom Date Format](.gitbook/assets/custom\_date\_format.png)

An example of a format line:

```
mm/dd/yyyy hh:mm
```

These are the allowed characters for a date format string:

* the date part:
  * "yy" - the year as a two-digit number (00 to 99);
  * "yyyy" - the year as a four-digit number (1900–9999);
  * "m" - the month as a number without a leading zero (1 to 12);
  * "mm" - the month as a number with a leading zero (01 to 12);
  * "mmm" - the month as an abbreviation (Jan to Dec);
  * "mmmm" - the month as a full name (January to December);
  * "mmmmm" - not supported by Webix, but interpreted as "mmmm"
  * "d" - the day as a number without a leading zero (1 to 31);
  * "dd" - the day as a number with a leading zero (01 to 31);
  * "ddd" - the day as an abbreviation (Sun to Sat);
  * "dddd" - the day as a full name (Sunday to Saturday);
* the time part:
  * "h" - the hour based on the 24-hour clock (0 to 23);
  * "hh" - the hour based on the 24-hour clock with a leading zero (00 to 23);
  * "m"- not supported by Webix, but interpreted as "mm"
  * "mm" - the minute as a number with a leading zero (00 to 59);
  * "s" - not supported by Webix, but interpreted as "ss"
  * "ss" - the second as a number with a leading zero (00 to 59);
  * "AM/PM" - displays AM (for times from midnight until noon) and PM (for times from noon until midnight).

5\) To apply the new format, click **Save**.
