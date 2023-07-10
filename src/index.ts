import dotenv from 'dotenv';

dotenv.config();

const {
  SPREADSHEET_FILE_ID,
  SPREADSHEET_SHEET_NAME,
}: {
  SPREADSHEET_FILE_ID: string;
  SPREADSHEET_SHEET_NAME: string;
} = process.env;

function hello() {
  const file = DriveApp.getFileById(SPREADSHEET_FILE_ID);
  const sheet = SpreadsheetApp.open(file)
    .getSheetByName(SPREADSHEET_SHEET_NAME);
  if (sheet == null) {
    console.error('Sheet1 not found.');
    return;
  }
  const range = sheet.getRange('A1');
  range.setValue('Hello World!');
}
