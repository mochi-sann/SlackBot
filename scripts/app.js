/**
 * TODO
 * + @ボット名　おみくじ　でおみくじを引けるようにする
 * +おみくじの結果を1日で固定にする人によって違う結果を出るよにする
 * + @ボット名　今日の天気　で天気がわかるようにする
 */


'use strict';

const fs = require('fs');
const fileName = "./Json/input.json"
var dataMap = new Map();
var dataMapload;
var nowDate;



const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM(`<html><body><div id="aaa">AAA<div></body></html>`);
const { document } = dom.window;
const jquery = require('jquery');
const $ = jquery(dom.window);

//おみくじの結果を保存する

const user_data = {
  "mochi": {
    data: "2020/03/02",
    unsei: "大吉",
    camera: "Eos 5D"
  }
};
//おみくじの結果を取得する

// loadData();
// dataMap = dataMapload;
module.exports = (robot) => {
  //loadData();//Jsonファイルからデータをデータを読み込み


  robot.hear(/撮りたい|取りたい|とりたい|撮ろう|撮る/i, (msg) => {
    const gosshoto = [
      "撮りにいこーよ",
      "一緒にとろ～",
      "いいね!",
      ":eeyan:"
    ]
    var omikuzi_randam = Math.floor(Math.random() * Object.keys(gosshoto).length);
    msg.send(gosshoto[Math.floor(Math.random() * Object.keys(gosshoto).length)]);
  })
  robot.hear(/撮れた|とれた/i, (msg) => {
    const gosshoto = [
      "うまいね！",
      "いいじゃん！",
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



    nowDate = new Date().getFullYear() + "-" + new Date().getMonth() + "-" + new Date().getDate();
    console.log("今の時間 = " + nowDate);



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
      "EOS M10",
      "EOS Kiss X10i",
      "α7 III",
      "E-M10"
    ]

    var length = Object.keys(camera_omikuzi).length;//おみくじの数を取得
    var random = Math.floor(Math.random() * length);//おみくじを選ぶ乱数を作成
    for (let i = 0; i <= 40; i++) {

      // loadData();
    }
    //おみくじの結果をmap関数に保存
    // dataMap.set({ "user": [`${user_id}`], "omikuzi": [`${omikuzi[omikuzi_randam]}`, "omikuzi" [camera_omikuzi] , "date", [nowDate]] });

    console.debug('[' + new Date() + ']' + random + "  カメラ = " + camera_omikuzi[random] + ' msg = ' + `<@${user_id}> 運勢 = ` + omikuzi[omikuzi_randam]);
    console.info("User の投稿した時間 = " + dataMap.get());

    try {
      if (user_data[user_id].data == nowDate) {
        todayomikuzi(user_id, omikuzi[omikuzi_randam], camera_omikuzi[random])
        // msg.send(` <@${user_id}>の今日の運勢は` + user_data[user_id].unsei + `だよ。今日は` + user_data[user_id].camera + 'を持って撮りに行こう!　いい写真が撮れるといいね');
      } else {
        saveData();
        todayomikuzi(user_id, omikuzi[omikuzi_randam], camera_omikuzi[random])
        // msg.send(` <@${user_id}>の今日の運勢は` + omikuzi[omikuzi_randam] + `だよ。今日は` + camera_omikuzi[random] + 'を持って撮りに行こう!　いい写真が撮れるといいね');
      }

    } catch (error) {
      saveData();
      todayomikuzi(user_id, omikuzi[omikuzi_randam], camera_omikuzi[random])
      // msg.send(` <@${user_id}>の今日の運勢は` + omikuzi[omikuzi_randam] + `だよ。今日は` + camera_omikuzi[random] + 'を持って撮りに行こう!　いい写真が撮れるといいね');
    }
    function todayomikuzi(userid, unsei, camera) {
      msg.send(`<@${userid}>の今日の運勢は` + unsei + `だよ。今日は` + camera + 'を持って撮りに行こう!　いい写真が撮れるといいね');
    }



    //loadData(user_id); //テスト
    // dataMap.set({ "${user_id}": `${user_id}` });

    // UNTANCM8U
    function saveData(name) {
      var asrtasrtaerta = "mochi"
      user_data[user_id] = {
        data: `${nowDate}`,
        unsei: `${omikuzi[omikuzi_randam]}`,
        camera: `${camera_omikuzi[random]}`
      };

      // var testttttt = `user_data[asrtasrtaerta].data`;

      console.log("—————————————————————————————————————————————————————————————————————————————————\n " + "user = " + user_id + "\n" + "date  = " + user_data[user_id].data);
      console.log("運勢  = " + user_data[user_id].unsei);
      console.log("カメラ  = " + user_data[user_id].camera + "\n—————————————————————————————————————————————————————————————————————————————————");


      // console.log("dataMap[user_id)] = " + dataMap.get(`UNTANCM8U`));
      // console.log("dataMap['2020-1-27'] = " + dataMap.get(['UNTANCM8U']));
      // console.log("dataMap['2020-1-2'] = " + dataMap[user_id].data);
      // console.log("dataMap['2020-1-27'] = " + dataMap.get(["NTANCM8U"]));
      // console.log("dataMap['2020-1-27'] = " + dataMap.get());
      // console.log("dataMap['2020-1-27'] = " + dataMap[0]);
      // console.log("dataMap keys " + dataMap.keys());
      var keys = dataMap.keys();
      for (var key of keys) {
        console.log(key);
      }
      fs.writeFileSync(fileName, JSON.stringify(Array.from(dataMap)), 'utf8');
    }
  });

  robot.respond(/ヘルプ|help|-h/i, (msg) => {
    msg.send(`このBOTに@おみくじでおみくじが引けます。おみくじは一日に一回変わります。\n写真を撮ると褒めてくれます。`);
  })

  robot.hear(/天気/i, (msg) => {
    $(function () {
      var API_KEY = 'ad14112cc3761af968355faebdb8a93d'
      var city = 'Tokyo';
      var url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + ',jp&units=metric&APPID=' + API_KEY;
      $.ajax({
        url: url,
        dataType: "json",
        type: 'GET',
      })
        .done(function (data) {
          console.log("天気");
          console.log(data.list[1]);
          console.log("url =  "  + url);
          
          msg.send(data);
        })
        .fail(function (data) {
          msg.send("データを取得でみませんでした。");
        });
    });
  })
}

console.log("起動しました");
