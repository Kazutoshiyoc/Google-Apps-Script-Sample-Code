// Inbox内のメールを取得する関数
function getInboxMails(start, length) {

  // start件目のメール以降のメールをlength件取得
  var results = GmailApp.getInboxThreads(start,length);
  
  // 取得したメールに対する処理
  for (var i = 0; i < results.length; i++) {

    // 件名を表示
    Logger.log('>>> Title: ' + results[i].getFirstMessageSubject());
  }
}
