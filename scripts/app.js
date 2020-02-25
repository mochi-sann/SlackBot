/**
 * TODO
 * + @ボット名　おみくじ　でおみくじを引けるようにする
 * +おみくじの結果を1日で固定にする人によって違う結果を出るよにする
 * + @ボット名　今日の天気　で天気がわかるようにする
 */


'use strict';

const fs = require('fs');
const fileName = "./Json/input.json"
let dataMap = new Map();
//おみくじの結果を保存する
function saveData() {
  fs.writeFileSync(fileName, JSON.stringify(Array.from(dataMap)), 'utf8');
}

module.exports = (robot) => {
  robot.hear(/撮りたい|取りたい|とりたい/i, (msg) => {
    const gosshoto = [
      "撮りにいこーよ",
      "一緒にとろ～",
      "いいね!",
      ":eeyan:"
    ]
    var omikuzi_randam = Math.floor(Math.random() * Object.keys(gosshoto).length);
    msg.send(gosshoto[Math.floor(Math.random() * Object.keys(gosshoto).length)]);
  })

  robot.hear(/hello>/i, (msg) => {
    const user_id = msg.message.user.id;
    msg.send(`Hello, <@${user_id}>`);
  });
  robot.respond(/今日の天気/i, (msg) => {
    const user_id = msg.message.user.id;
    msg.send(`Hay, <@${user_id}>`);
  })
  robot.respond(/おみくじ/i, (msg) => {

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
      "EOS 1D m4",
      "D6",
      "EOS 5D",
      "EOS 6D",
      "EOS kiss m",
      "EOS 8000D",
      "D6",
      "D850",
      "α6600",
      "GFX100",
      "X-T3",
    ]
    var length = Object.keys(camera_omikuzi).length;//おみくじの数を取得
    var random = Math.floor(Math.random() * length);//おみくじを選ぶ乱数を作成

    // for (let i = 0; i <= 10; i++) {
    //   //テストようなので後で削除する
    //   random = Math.floor(Math.random() * length);
    //   omikuzi_randam = Math.floor(Math.random() * Object.keys(omikuzi).length);
    //   //テスト用に0~10まで代入するやつ
    //   // console.log(random + "  カメラ = " + camera_omikuzi[i] + ' msg = ' + `<@${user_id}> 運勢 = ` + omikuzi[i]);
    //   // msg.send(` <@${user_id}>は` + omikuzi[i] + `だよ、今日のラッキーアイテムは` + camera_omikuzi[i] + 'だよ!');
    //   console.log(random + "  カメラ = " + camera_omikuzi[random] + ' msg = ' + `<@${user_id}> 運勢 = ` + omikuzi[omikuzi_randam]);
    //   msg.send(` <@${user_id}>は` + omikuzi[omikuzi_randam] + `だよ。今日のラッキーアイテムは` + camera_omikuzi[random] + 'だよ!');
    // }

    // dataMap.set({ "${user_id}": `${user_id}` });
    dataMap.set({ [user_id]: [`${omikuzi[omikuzi_randam]}`, camera_omikuzi[random]] });
    
    console.log(random + "  カメラ = " + camera_omikuzi[random] + ' msg = ' + `<@${user_id}> 運勢 = ` + omikuzi[omikuzi_randam]);
    msg.send(` <@${user_id}>は` + omikuzi[omikuzi_randam] + `だよ。ラッキーカメラは` + camera_omikuzi[random] + 'だ!');
    saveData();
    // UNTANCM8U
  });

  robot.respond(/ヘルプ|help|-h/i, (msg) => {
    msg.send(`このBOTに`)
  })
}

console.log("起動しました");
