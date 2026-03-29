// --- GOOGLE APPS SCRIPT CODE ---
// 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1QlSxCSFQ2GFIeiKSn_Q8o3MQq2N7tFYNkkmFvlvR7Hc/edit
// 2. Go to 'Extensions' > 'Apps Script'
// 3. Delete any existing code and paste this script below:

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Check if sheet is empty and add headers if needed
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp', 
        'Name', 
        'Maiden Name',
        'Residential Address', 
        'Office Address',
        'Phone', 
        'WhatsApp', 
        'Gender', 
        'DOB', 
        'Occupation', 
        'Class Friend', 
        'Class In', 
        'Conduct Accepted'
      ]);
    }

    // Append the row from incoming data
    sheet.appendRow([
      new Date().toLocaleString(),
      data.name,
      data.maidenName,
      data.address,
      data.officeAddress,
      data.phone,
      data.whatsapp,
      data.gender,
      data.dob,
      data.occupation,
      data.classFriend,
      data.classIn,
      data.acceptConduct ? 'Yes' : 'No'
    ]);

    return ContentService.createTextOutput(JSON.stringify({result: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({result: 'error', message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// 4. Click 'Deploy' > 'New Deployment'
// 5. Select type: 'Web App'
// 6. Set:
//    - Description: 'MCC Data Collection'
//    - Execute as: 'Me'
//    - Who has access: 'Anyone' (Required for the web form to post without authentication)
// 7. Click 'Deploy'
// 8. Copy the 'Web App URL' and paste it into script.js at SCRIPT_URL
