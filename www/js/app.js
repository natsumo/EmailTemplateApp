///// 新規登録
function onRegisterBtn(){
    //入力フォームからusername, password変数にセット
    var username = $("#reg_username").val();
    var password = $("#reg_password").val();
    signUp(username, password);
    // 入力フォームをクリアする
    $("#reg_username").val("");
    $("#reg_password").val("");
}

///// ログイン
function onLoginBtn(){
    var username = $("#login_username").val();
    var password = $("#login_password").val();
    login(username, password);
    // 入力フォームをクリアする
    $("#login_username").val("");
    $("#login_password").val("");
}

///// ログアウトする
function onLogoutBtn(){
    logout();
    $.mobile.changePage('#LoginPage');
}

///// TOPページを初期化
function initTopPage() {
    $("#TopListView").empty();
    searchAll();
}

///// テンプレートの保存
function onSaveBtn() {
    var to = $("#To").val();
    var title = $("#Title").val();
    var message = $("#Message").val();
    if (to != '' || title != '' || message != '') {
        addTemplate(to, title, message);
        // 入力フォームをクリアする
        $("#To").val("");
        $("#Title").val("");
        $("#Message").val("");
        initTopPage();
    }
    $.mobile.changePage("#TopPage", { reverse: true });
}

///// 詳細ページに移動する
function onShowLink() {
    var $li = $(this).parent();
    var templateTitle = $li.find("h3").text();
    var templateHtmlMessage = $li.find("p").html().replace(/\n/g, "<br>");
    var templateHtmlTo = $li.find("small").html().replace(/\n/g, "<br>");
    $("#ShowPage p1").html("件名:".bold());
    $("#ShowPage h2").html(templateTitle);
    $("#ShowPage p2").html("宛先:".bold() +"<br>");
    $("#ShowPage small").html(templateHtmlTo);
    $("#ShowPage p3").html("<br>本文:<br>".bold());
    $("#ShowPage p4").html(templateHtmlMessage);
   
    $.mobile.changePage("#ShowPage");
}

///// テンプレートを削除する
function onDeleteLink() {
    var $li = $(this).parent();
    var objectId = $li.data("id");

    // アラート        
    navigator.notification.confirm(
        'テンプレートを削除します\nよろしいですか？', // メッセージ
        onConfirmDelete,  // 押されたボタンのインデックスを使用して呼び出すコールバック
        '削除',   // タイトル
        ['キャンセル','OK']   // ボタンのラベル名
    );
    function onConfirmDelete(buttonIndex) {
        if(buttonIndex=='1'){
            return;
        }else{
            deleteTemplate(objectId);
            initTopPage();
            $.mobile.changePage("#TopPage", { reverse: true });
        }
    }
}

///// メーラーを起動する
function onStartMailer(){
    var to = $("#ShowPage small").html();
    var title = $("#ShowPage h2").html();
    var message = $("#ShowPage p4").html();

    // アラート
    navigator.notification.confirm(
        'メーラーを起動しメールを作成します\nよろしいですか？', // メッセージ
        onConfirmMailer,  // 押されたボタンのインデックスを使用して呼び出すコールバック
        'メール作成',   // タイトル
        ['キャンセル','OK']   // ボタンのラベル名
    );
    function onConfirmMailer(buttonIndex) {
        if(buttonIndex=='1'){
            return;
        }else{    
            startMailer(to,title, message);
            $.mobile.changePage("#TopPage", { reverse: true });
        }
    }
}

///// アプリ起動時に実行
function onReady() {
    $("#LoginBtn").click(onLoginBtn);
    $("#RegisterBtn").click(onRegisterBtn);
    initTopPage();
    $("#SaveBtn").click(onSaveBtn);
    $("#TopListView").on("click", "a.show", onShowLink);
    $("#TopListView").on("click", "a.delete", onDeleteLink);
}
$(onReady);

