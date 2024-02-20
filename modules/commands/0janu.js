module.exports.config = {
  name: "janu",
  version: "3.8",
  hasPermission: 0,
  credits: "Shaon Ahmed", 
  description: "sim",
  commandCategory: "sim simi fun",
  usages: "janu [your query]",
  cooldowns: 3,
};
module.exports.run = async function({ api, event, args }) {
  const axios = require("axios");
  let { messageID, threadID, senderID, body } = event;
  let tid = threadID,
  mid = messageID;
  const content = encodeURIComponent(args.join(" "));
  if (!args[0]) return api.sendMessage("Please type a message...", tid, mid);
  try {
    const res = await axios.get(`https://shaon-sim-api.onrender.com/sim?reply=${content}`);
    const respond = res.data.message;
    if (res.data.error) {
      api.sendMessage(`Error: ${res.data.error}`, tid, (error, info) => {
        if (error) {
          console.error(error);
        }
      }, mid);
    } else {
      api.sendMessage(respond, tid, (error, info) => {
        if (error) {
          console.error(error);
        }
      }, mid);
    }
  } catch (error) {
    console.error(error);
    api.sendMessage("An error occurred while fetching the data.", tid, mid);
  }
};