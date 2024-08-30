# Dynamic Responses in Google Forms from Google Sheets
Dropdown: Dropdown
Single Answer Type: Multiple Choice
Multiple Answer Type: Checkbox

1. `MultipleChoice.js`
2. `Dropdown.js`
3. `Checkboxes.js`

Each file contains code that needs to be inserted into the AppScript editor of Google Sheets. The code allows for dynamic population of form responses based on data from a Google Sheet.

## Configuration

Before using the code, make sure to customize the following parameters within each file:

- Form ID: Replace `[FORM_ID]` with the actual ID of your Google Form.
- Question IDs: Set the IDs of the questions (starting from 1) for the questions in each group.
- Spreadsheet ID: Replace `[SPREADSHEET_ID]` with the actual ID of your Google Sheet.
- Sheet Name: Specify the name of the sheet within the Google Sheet.
- Starting Row and Column: Set the starting row and column for data extraction.
- Note: Ensure that there are no duplicate elements in the specified column, as the code may not function correctly in such cases.

## Code Explanation

### Multiple Choice

The `MultipleChoice.js` file is designed for multiple-choice questions. It dynamically populates the choices of a multiple-choice question from a specified column in the Google Sheet.

### Dropdown

The `Dropdown.js` file is tailored for dropdown questions. It populates the dropdown options based on the data in the specified column of the Google Sheet.

### Checkboxes

The `Checkboxes.js` file is meant for checkbox questions. It dynamically generates the checkbox options from the specified column in the Google Sheet.

## Trigger Setup

To ensure continuous functionality, set up triggers for each function in Google Apps Script:

1. Open the script editor in Google Sheets.
2. Click on the clock icon (Triggers) on the left sidebar.
3. Click on "+ Add Trigger" at the bottom right.
4. Choose the function you want to trigger (e.g., `updateFormChoices`).
5. Set the event type and frequency according to your needs.

## Function Renaming

To use multiple types of questions, create separate functions for each type:

1. Duplicate the existing function (e.g., `updateFormChoices`) in each script.
2. Rename the duplicated function to avoid conflicts (e.g., `updateDropdownChoices`, `updateCheckboxes`).
3. Update the trigger to point to the newly created function.

This prevents conflicts when using different question types.

## Note

This README serves as a general guide. Please refer to the comments in each script for more detailed instructions and considerations. Additionally, review and understand the Google Apps Script documentation for further customization and troubleshooting.
