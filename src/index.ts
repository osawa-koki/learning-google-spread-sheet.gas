
const scriptProperties = PropertiesService.getScriptProperties()
const SPREADSHEET_FILE_ID = scriptProperties.getProperty('SPREADSHEET_FILE_ID')
const SPREADSHEET_SHEET_NAME = scriptProperties.getProperty('SPREADSHEET_SHEET_NAME')

function hello (): void {
  const file = DriveApp.getFileById(SPREADSHEET_FILE_ID)
  const sheet = SpreadsheetApp.open(file)
    .getSheetByName(SPREADSHEET_SHEET_NAME)
  if (sheet == null) {
    console.error('Sheet1 not found.')
    return
  }
  const range = sheet.getRange('A1')
  range.setValue('Hello World!')
}

function inspect (): void {
  console.log('SPREADSHEET_FILE_ID:', SPREADSHEET_FILE_ID)
  console.log('SPREADSHEET_SHEET_NAME:', SPREADSHEET_SHEET_NAME)
}

export { hello, inspect }
