module.exports.config = {
  name: "fb",
  version: "1.0.",
  hasPermssion: 0,
  credits: "Shaon Ahmed",
  description: "Fb Vid Downloader",
  commandCategory: "other",
  usages: "fb video link",
  cooldowns: 2,
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
  const { ytdown, ndown, tikdown, twitterdown } = require("nayan-media-downloader")
    const { messageID, threadID } = event;
  if (!args[0]) return api.sendMessage("[ ! ] Input link.", threadID, messageID);

    const { NAYAN } = global.apiNayan;
    let np = args.join(" ");
   if (!args[1]) api.sendMessage(`𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐈𝐍𝐆 𝐕𝐈𝐃𝐄𝐎 𝐅𝐎𝐑 𝐘𝐎𝐔\n\n𝐏𝐋𝐄𝐀𝐒𝐄 𝐖𝟖...`, event.threadID, (err, info) => setTimeout(() => { api.unsendMessage(info.messageID) }, 20000));

 try {
    const res = await ndown(`${np}`);
console.log(res)
    var msg = [];
    let img1 = `${res.data[0].url}`;


    let imgs1 = (await axios.get(`${img1}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/fbvideo.mp4", Buffer.from(imgs1, "utf-8"));
    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/fbvideo.mp4"));

    {
        msg += `✅Downloaded Successfully`
    }

    return api.sendMessage({
        body: msg,
        attachment: allimage
    }, event.threadID, event.messageID);
} catch (err) {
    api.sendMessage(`error`, event.threadID, event.messageID);  
   }
};