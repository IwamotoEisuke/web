$(function () {
    //////////////////////////// 【必要な変数を定義】////////////////////////////
    //////////  スライドリストの合計幅を計算→CSSでエリアに代入
    let width = $('.carousel-list').outerWidth(true); // .carousel-listの1枚分の幅
    let length = $('.carousel-list').length; // .carousel-listの数
    let slideArea = width * length; // レール全体幅 = スライド1枚の幅 × スライド合計数
    $('.carousel-area').css('width', slideArea); // カルーセルレールに計算した合計幅を指定
    //////////  スライド現在値と最終スライド
    let slideCurrent = 0; // スライド現在値（1枚目のスライド番号としての意味も含む）
    let lastCurrent = $('.carousel-list').length - 1; // スライドの合計数＝最後のスライド番号
    ////////////////////////////【スライドの動き方+ページネーションに関する関数定義】////////////////////////////
    ////////// スライドの切り替わりを「changeslide」として定義
    function changeslide() {
        $('.carousel-area').stop().animate({ // stopメソッドを入れることでアニメーション1回毎に止める
            left: slideCurrent * -width // 代入されたスライド数 × リスト1枚分の幅を左に動かす
        });
        ////////// ページネーションの変数を定義（＝スライド現在値が必要）
        let pagiNation = slideCurrent + 1; // nth-of-typeで指定するため0に＋1をする
        $('.pagination-circle').removeClass('target'); // targetクラスを削除
        $(".pagination-circle:nth-of-type(" + pagiNation + ")").addClass('target'); // 現在のボタンにtargetクラスを追加
    };
    /////////////////////////【自動スライド切り替えのタイマー関数定義】/////////////////////////
    let Timer;
    ////////// 一定時間毎に処理実行する「startTimer」として関数を定義
    function startTimer() {
        // 変数Timerに下記関数内容を代入する
        Timer = setInterval(function () { // setInterval・・・指定した時間ごとに関数を実行
            if (slideCurrent === lastCurrent) { // 現在のスライドが最終スライドの場合
                slideCurrent = 0;
                changeslide(); // スライド初期値の値を代入して関数実行（初めのスライドに戻す）
            } else {
                slideCurrent++;
                changeslide(); // そうでなければスライド番号を増やして（次のスライドに切り替え）関数実行
            };
        }, 3000); // 上記動作を3秒毎に
    }
    ////////// 「startTimer」関数を止める「stopTimer」関数を定義
    function stopTimer() {
        clearInterval(Timer); // clearInterval・・・setIntervalで設定したタイマーを取り消す
    }
    //////// 自動スライド切り替えタイマーを発動
    startTimer();
    /////////////////////////【ボタンクリック時関数を呼び出し】/////////////////////////
    // NEXTボタン
    $('.js-btn-next').click(function () {
        // 動いているタイマーをストップして再度タイマーを動かし直す（こうしないとページ送り後の秒間隔がズレる）
        stopTimer();
        startTimer();
        if (slideCurrent === lastCurrent) { // 現在のスライドが最終スライドの場合
            slideCurrent = 0;
            changeslide(); // スライド初期値の値を代入して関数実行（初めのスライドに戻す）
        } else {
            slideCurrent++;
            changeslide(); // そうでなければスライド番号を増やして（次のスライドに切り替え）関数実行
        };
    });
    // BACKボタン
    $('.js-btn-back').click(function () {
        // 動いているタイマーをストップして再度タイマーを動かし直す（こうしないとページ送り後の時間間隔がズレる）
        stopTimer();
        startTimer();
        if (slideCurrent === 0) { // 現在のスライドが初期スライドの場合
            slideCurrent = lastCurrent;
            changeslide(); // 最終スライド番号を代入して関数実行（最後のスライドに移動）
        } else {
            slideCurrent--;
            changeslide(); // そうでなければスライド番号を減らして（前のスライドに切り替え）関数実行
        };
    });
});
// ここまでカルーセルの記述

$(function () {
    //////////// 一番目以外のコンテンツは非表示
    $(".menu-box:not(:first-of-type)").css("display", "none");
    //////////// タブの制御
    $('.tab').on('click', function () { // タブメニューをhoverしたら
        var index = $('.tab').index(this); // hoverしたタブ番号を取得
        $('.tab').removeClass('current'); // タブ現在地クラスを削除し、
        $(this).addClass('current'); // hoverしたタブにタブ現在地クラスを付与
        //////////// コンテンツの制御
        $('.menu-box').hide().eq(index).fadeIn();
    });
});
$(function () {
    $('.tab2').on('click', function () {
        var index = $('.tab2').index(this);
        $('.tab').removeClass('current');
        $(this).addClass('current');
        $('.menu-box').hide().eq(index).fadeIn();
    });
});

$(function () {
    $('.tab4').on('click', function () {
        var index = $('.tab4').index(this);
        $('.tab').removeClass('current');
        $(this).addClass('current');
        $('.menu-box').hide().eq(index).fadeIn();
    });
});
$(function () {
    $('.tab5').on('click', function () {
        var index = $('.tab5').index(this);
        $('.tab').removeClass('current');
        $(this).addClass('current');
        $('.menu-box').hide().eq(index).fadeIn();
    });
});
$(function () {
    $('.tab6').on('click', function () {
        var index = $('.tab6').index(this);
        $('.tab').removeClass('current');
        $(this).addClass('current');
        $('.menu-box').hide().eq(index).fadeIn();
    });
});
$(function () {
    $('.tab7').on('click', function () {
        var index = $('.tab7').index(this);
        $('.tab').removeClass('current');
        $(this).addClass('current');
        $('.menu-box').hide().eq(index).fadeIn();
    });
});

$(function () {
    $('.tab3').on('click', function () {
        $('.menu-box').hide()
        $('.menu-box').eq(0).fadeIn();
    });
});
