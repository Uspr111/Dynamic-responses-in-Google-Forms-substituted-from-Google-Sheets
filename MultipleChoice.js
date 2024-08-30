function updateFormChoices() {
    var form = FormApp.openById('ID формы');//ID forms
    
    // Массив идентификаторов вопросов, которые вы хотите обновить
    var questionIds = ['ID Вопроса1', 'ID Вопроса2', 'ID Вопроса3']; //['Question1 ID', 'Question2 ID', 'Question3 ID', ...]]
  
    var ss = SpreadsheetApp.openById('ID таблицы');// ID table
    var sheet = ss.getSheetByName('Название листа');// Name sheet
    var range = sheet.getRange(номер строчки, номер столбца, sheet.getLastRow(), 1); //sheet.getRange(row number, column number, sheet.getLastRow(), 1);
  
    var data = range.getValues();
    var choices = [];
    
    for (var i = 0; i < data.length; i++) {
      if (data[i][0] !== "") {
        choices.push(data[i][0]);
      }
    }
  
    for (var j = 0; j < questionIds.length; j++) {
      var item = form.getItemById(questionIds[j]);
      if (item) {
        var formItem = form.getItemById(item.getId());
        formItem.asMultipleChoiceItem().setChoiceValues(choices);
      }
    }
  }
