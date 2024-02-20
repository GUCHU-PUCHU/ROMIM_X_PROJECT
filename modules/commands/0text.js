module.exports.config = {
  name: "text",
  version: "1.0.",
  hasPermssion: 0,
  credits: "Shaon Ahmed",
  description: "Fb Vid Downloader",
  commandCategory: "other",
  usages: "fb video link",
  cooldowns: 2,
};

module.exports.run = async function({ api, event, args }) {
  const linkanh = event.messageReply.attachments[0].url || args.join(" ");
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
const { img2text} = require('nayan-server')
    const data = await img2text(`${linkanh}`);
  console.log(data);
        var msg = [];
        var text = data.text;

        {
            msg += `${text}`
        }
    return api.sendMessage({
        body: msg

    }, event.threadID, event.messageID);
  };