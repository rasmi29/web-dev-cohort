

# HTML Tables

## 1. Create a Table with 3 Columns: City, Country, and Population
This table contains three columns: **City**, **Country**, and **Population**. It includes three rows of data.

## 2. Create a table with caption that list your favourite food and thier respective catagories 
## 3. Use colspan and rowspan and craete a complex table layout for a weekly shcedule

### Explanation of Table Elements:

1.  **`<tr>`**: Represents a row in the table. It contains `<td>` (table data) or `<th>` (table header) elements.
    
2.  **`<td>`**: Represents a single data cell within a row.
    
    *   **`colspan`**: Defines how many columns a cell should span. For example, in the weekly schedule, one of the cells spans two columns (Math and Physics).
    *   **`rowspan`**: Defines how many rows a cell should span. For example, the Science cell spans two rows in the schedule.
    
3.  **`<th>`**: Represents a header cell. Text in header cells is usually bold and centered by default.
    
    *   `<th>` is used to create headings for each column or row.

4.  **`<thead>`**: Contains the header rows for the table.
    
5.  **`<tbody>`**: Contains the body rows of the table. It’s often used for separating the content rows from the header and footer sections.
    
6.  **`<caption>`**: Adds a title to the table. It appears above the table.

### Notes on Table Border Property:

*   **`border`**: The `border` property in the `<table>`, `<th>`, and `<td>` elements is used to add borders around the table, header cells, and data cells.
    *   `border-collapse: collapse;` collapses adjacent borders into a single border.
    *   You can also set individual borders on each cell using `border: 1px solid black;` (or any other desired color/size).
