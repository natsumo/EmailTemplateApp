//// (2)★mBaaSの２つのAPIキーの設定
var APPLICATION_KEY ="YOUR_NCMB_APPLICATION_KEY";
var CLIENT_KEY ="YOUR_NCMB_CLIENT_KEY";
// カレントユーザー
var currentLoginUser;

//// (3)★ mBaaS 初期化
    /***↓この間に記入↓***/
    
    /***↑この間に記入↑***/

//// (4)★ テンプレート保存用クラスの生成
    /***↓この間に記入↓***/
    
    /***↑この間に記入↑***/



/********************************/
/***********会員管理*************/
/********************************/
//// (13)★ 新規登録とログイン
function signUp(username, password){
    /***↓この間に記入↓***/
    
    /***↑この間に記入↑***/
}

//// (14)★ ログイン
function login(username, password){
	/***↓この間に記入↓***/
    
    /***↑この間に記入↑***/
}

//// (15)★ ログアウト
function logout(){
	/***↓この間に記入↓***/
    
    /***↑この間に記入↑***/
}



/********************************/
/*********テンプレート***********/
/********************************/
//// ★ テンプレートを作成して保存する
function addTemplate(to, title, message) {
    // (16) acl(アクセス権限)設定
    /***↓この間に記入↓***/
    
    /***↑この間に記入↑***/
    
    // (5) クラスの新しいインスタンスを生成して保存する
    /***↓この間に記入↓***/
    
    /***↑この間に記入↑***/
}

//// (6)★ テンプレートを削除する
function deleteTemplate(id) {
	/***↓この間に記入↓***/
    
    /***↑この間に記入↑***/
}

//// トップページの情報更新
//// (7)★ 保存されたテンプレートの全件検索(一覧表示)
function searchAll(){
	/***↓この間に記入↓***/
    
    /***↑この間に記入↑***/
}

//// リストにテンプレートデータをセットする[実装済]
function setListData(data){
    for (var i = 0; i < data.length; i++) {
        var object = data[i];
        $li = $("<li><a href='#' class='show'><h3></h3><p></p><small></small></a><a href='#' class='delete'></a></li>");
        $li.data("id", object.get("objectId")); 
        $li.find("h3").text(object.get("title"));
        $li.find("p").text(object.get("message"));
        $li.find("small").text(object.get("to"));
        $("#TopListView").prepend($li);
    }
    if (data.length == 0) {
        $li = $("<li>--登録されているテンプレートはありません--</li>");
        $("#TopListView").prepend($li);
    }
    $("#TopListView").listview("refresh");  // リストを操作した後、リフレッシュする
}



/********************************/
/***********メーラー*************/
/********************************/
//// (9) メーラーを起動する
function startMailer(to, title, message){
	/***↓この間に記入↓***/
    
    /***↑この間に記入↑***/
}

// callback
function alertDismissed() {
    // 何もしない
}