// -----------------------------------
//
//   Google Apps Script Sample Code
//
// -----------------------------------

function testSampleCode() {

  Logger.log('> -------------------------------------------------');

  // getInboxMails関数
  var mail_start = 0;   // 開始メール番号
  var get_length = 3;   // メール取得件数
  Logger.log('> Inbox内のメールを' + mail_start + '件目以降' + get_length + '件取得します。');
  getInboxMails(mail_start,get_length);

  Logger.log('> -------------------------------------------------');

  // searchDriveFile関数
  var search_key = "title contains 'test'";   // 検索パラメータ
  Logger.log('> Drive内のファイルを' + search_key + 'で検索して一覧表示します。');
  searchDriveFile(search_key);

  Logger.log('> -------------------------------------------------');

  // createFileOnTargetDir関数
  Logger.log('> 指定条件で新規ファイルを生成します。');
  var target_dir_key = "title contains 'test'";
  var new_file_name  = 'HelloWorld';
  var new_file_body  = 'Hello world!';
  createFileOnTargetDir(new_file_name, new_file_body, target_dir_key);

  Logger.log('> -------------------------------------------------');

  // createWordDoc関数
  Logger.log('> 同名のファイルが存在しない場合、新規ファイルを生成します。');
  var new_doc_name = 'HelloGoogleDoc';
  createWordDoc(new_doc_name);
  
  Logger.log('> -------------------------------------------------');
  Logger.log('> スクリプトを終了します。')
}
