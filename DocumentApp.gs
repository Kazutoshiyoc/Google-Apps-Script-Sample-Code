// ドライブ直下にドキュメントファイルを生成する関数
function createWordDoc(file_name) {
  var target_file = '';

  // 同様のファイル名のファイルが存在しないか検索
  var results = DriveApp.searchFiles("title contains '" + file_name + "'");

  // まだファイルが存在しない場合、ファイルを生成
  if (!results.hasNext()) {

    // ファイル名とIDを取得
    var new_file = DocumentApp.create(file_name);
    var new_file_id   = new_file.getId();

    var target_file = DriveApp.getFileById(new_file_id);
    Logger.log('>>> 新規ファイル: ' + target_file.getName());
    Logger.log('>>> 新規ファイルID: ' + new_file_id);

  } else {

    // 既にファイルが存在する場合、何もしない
    Logger.log('>>> 既に同名のファイルが存在します。');

    // イテレータの操作
    var file = results.next();

    // ファイル名とIDを取得
    var file_name = file.getName();
    var file_id   = file.getId();

    // ファイル名とIDを表示
    Logger.log('>>> ' + 'Name: ' + file_name + ', ID: ' + file_id);

  }
}
