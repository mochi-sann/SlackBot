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
    const camera_omikuzi = {
      0: "α9m2",
      1: "EOS R",
      2: "α7r4",
      3: "Sigma fp",
      4: "EOS 1D m4"
    }
    var length = Object.keys(camera_omikuzi).length;//おみくじの数を取得

    var random = Math.floor(Math.random() * length);//おみくじを選ぶ乱数を作成
    console.log(random + "  カメラ = " + camera_omikuzi[random + 1])
    msg.send(random + ` <@${user_id}>の今日のラッキーカメラは` + camera_omikuzi[random] + 'だよ');

  })
}