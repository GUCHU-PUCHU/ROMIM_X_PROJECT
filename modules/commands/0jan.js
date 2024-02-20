/**
* @Shaon Ahmed 
* @warn Do not edit code or edit credits
* @Dont Change This Credits Otherwisw Your Bot Lol
*/
module.exports.config = {
  name: "jan",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Shaon Ahmed",//partner
  usePrefix: false,
  description: "Dont Change This Credits Otherwisw Your Bot Lol",
  usages: "[ask]",
  commandCategory: "SIM ✅",
  cooldowns: 2
};

module.exports.run = async ({ api, event,args }) => {
const axios = require("axios");
let query = args.join(" ");
if (!query)
    return api.sendMessage(`𝐇𝐢 𝐛𝐛𝐲 𝐤𝐦𝐧 𝐚𝐬𝐨 𝐠𝐨 𝐭𝐮𝐦𝐢😚`, event.threadID, event.messageID);
const res = await axios.get(`https://shaon-all-api-07mo.onrender.com/sim?type=ask&ask=${query}`);
var plaintext = res.data.answer;
api.sendMessage(plaintext, event.threadID, event.messageID)
}