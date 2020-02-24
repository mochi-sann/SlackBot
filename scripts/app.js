/**
 * TODO
 * @ボット名　おみくじ　でおみくじを引けるようにする
 */

'use strict';
module.exports = (robot) => {
  robot.hear(/hello>/i, (msg) => {
    const user_id = msg.message.user.id;
    msg.send(`Hello, <@${user_id}>`);
  });
  robot.respond(/今日の天気/i, (msg) => {
    const user_id = msg.message.user.id;
    msg.send(`Hay, <@${user_id}>`);
  })
  robot.hear(/おみくじ/i, (msg) => {

    const user_id = msg.message.user.id;
    const omikuzi = [
      //おみくじの結果
      "大吉",
      "吉",
      "中吉",
      "小吉",
      "末吉",
      "凶",
    ]
    var omikuzi_randam = Math.floor(Math.random() * Object.keys(omikuzi).length);

    const camera_omikuzi = [
      "α9m2",
      "EOS R",
      "α7r4",
      "Sigma fp",
      "EOS 1D m4"
    ]
    var length = Object.keys(camera_omikuzi).length;//おみくじの数を取得

    


    var random = Math.floor(Math.random() * length);//おみくじを選ぶ乱数を作成
    for (let i = 0; i <= 10; i++) {
      //テストようなので後で削除する
      random = Math.floor(Math.random() * length);
      omikuzi_randam = Math.floor(Math.random() * Object.keys(omikuzi).length);
      //テスト用に0~10まで代入するやつ
      // console.log(random + "  カメラ = " + camera_omikuzi[i] + ' msg = ' + `<@${user_id}> 運勢 = ` + omikuzi[i]);
      // msg.send(` <@${user_id}>は` + omikuzi[i] + `だよ、今日のラッキーアイテムは` + camera_omikuzi[i] + 'だよ!');
      console.log(random + "  カメラ = " + camera_omikuzi[random] + ' msg = ' + `<@${user_id}> 運勢 = ` + omikuzi[omikuzi_randam]);
      msg.send(` <@${user_id}>は` + omikuzi[omikuzi_randam] + `だよ。今日のラッキーアイテムは` + camera_omikuzi[random] + 'だよ!');
    }
    console.log(random + "  カメラ = " + camera_omikuzi[random] + ' msg = ' + `<@${user_id}> 運勢 = ` + omikuzi[omikuzi_randam]);
    msg.send(` <@${user_id}>は` + omikuzi[omikuzi_randam] + `だよ。今日のラッキーアイテムは` + camera_omikuzi[random] + 'だ!');

  })
}