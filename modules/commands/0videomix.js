module.exports.config = {
  name: "videomix",
  version: "11.9.7",
  hasPermssion: 0,
  credits: "Shaon Ahmed",
  description: "random love story video",
  commandCategory: "video",
  usages: "random",
  cooldowns: 30,
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var shaon = ["https://shaon-all-api-07mo.onrender.com/video/status",
"https://shaon-all-api-07mo.onrender.com/video/sad",
"https://shaon-all-api-07mo.onrender.com/video/baby",
"https://shaon-all-api-07mo.onrender.com/video/love",
"https://shaon-all-api-07mo.onrender.com/video/ff",
"https://shaon-all-api-07mo.onrender.com/video/shairi",
"https://shaon-all-api-07mo.onrender.com/video/humaiyun",
"https://shaon-all-api-07mo.onrender.com/video/islam",
"https://shaon-all-api-07mo.onrender.com/video/anime",
"https://shaon-all-api-07mo.onrender.com/video/short",
"https://shaon-all-api-07mo.onrender.com/video/event",
"https://shaon-all-api-07mo.onrender.com/video/prefix",
"https://shaon-all-api-07mo.onrender.com/video/cpl",
"https://shaon-all-api-07mo.onrender.com/video/time",
"https://shaon-all-api-07mo.onrender.com/video/lofi",
"https://shaon-all-api-07mo.onrender.com/video/happy"
]
  var shaon1 = shaon[Math.floor(Math.random() * shaon.length)]
  axios.get(shaon1).then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let shaon2 = res.data.shaon;
  let callback = function () {
          api.sendMessage({
            body: `𝐒𝐏𝐀𝐘𝐒𝐇𝐄𝐀𝐋 𝐑𝐀𝐍𝐃𝐎𝐌 𝐌𝐈𝐗 
${shaon2} 𝐕𝐈𝐃𝐄𝐎...🎬\n\n｢𝐒𝐇𝐀𝐎𝐍 𝐏𝐑𝐎𝐉𝐄𝐂𝐓｣`,
            attachment: fs.createReadStream(__dirname + `/data/Shaoon.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/data/Shaoon.mp4`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/data/Shaoon.mp4`)).on("close", callback);
      })
}