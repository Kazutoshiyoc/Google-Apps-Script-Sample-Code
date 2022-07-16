// ドライブのファイルを検索する関数
function searchDriveFile(key) {

  // 指定したキーパラメータで検索
  var results = DriveApp.searchFiles(key);

  // ヒットしたファイル一覧を表示
  while (results.hasNext()) {

    // イテレータの操作
    var file      = results.next();

    // ファイル名とIDを取得
    var file_name = file.getName();
    var file_id   = file.getId();

    // ファイル名とIDを表示
    Logger.log('>>> ' + 'Name: ' + file_name + ', ID: ' + file_id);
  }
}

// 指定した検索キーにヒットするディレクトリ内に指定のファイル名、bodyでファイルを生成する関数
function createFileOnTargetDir(filename, body, key) {

  // 検索キーでディレクトリを検索
  var target_dir = DriveApp.searchFolders(key);

  // ヒットしたディレクトリに対する処理
  while (target_dir.hasNext()) {

    // イテレータの操作
    var dir      = target_dir.next();

    // ファイル名とIDを取得
    var dir_name = dir.getName();
    var dir_id   = dir.getId();

    // ヒットしたディレクトリの表示
    Logger.log('>>> TargetDir: ' + '{ Name: ' + dir_name + ', ID: ' + dir_id + '}');

    // ファイルを生成
    var new_file = dir.createFile(filename, body);
    Logger.log('>>> 新規ファイル' + filename + 'を生成しました。');
    Logger.log('>>> 新規ファイルID: ' + new_file.getId());
  }
}
