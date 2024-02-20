const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

module.exports.config = {
    name: "dalle",
    version: "1.0",
    Credits: "Cock,dipto| credit change korla bts💩🐤",
    countDown: 15,
    hasPermssion: 0,
    Description: "Generate images by Dalle3",
    commandCategory: "Bing",
  },

module.exports.run = async function ({ api, message, args , event }) {
    try {
      const dipto = args.join(" ");

      const w = await api.sendMessage("Be Pecient...Image Is Generating - ⚠️", event.threadID);

      const data2 = {
        prompt: dipto, cookie:"ADD YOUR COOKIE HERE"
      };

      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const response = await axios.post('https://project-dallee3.onrender.com/dalle', data2, config);

      if (response.status === 200) {
        const imageUrls = response.data.image_urls.filter(url => !url.endsWith('.svg'));
        const imgData = [];

        for (let i = 0; i < imageUrls.length; i++) {
          const imgResponse = await axios.get(imageUrls[i], { responseType: 'arraybuffer' });
          const imgPath = path.join(__dirname, 'cache','dalle3', `${i + 1}.jpg`);
          await fs.outputFile(imgPath, imgResponse.data);
          imgData.push(fs.createReadStream(imgPath));
        }

      //  await api.unsendMessage(w.messageID);

        await api.sendMessage({
          body: `Generated - ✅`,
          attachment: imgData
        },event.threadID);
      } else {
        throw new Error("Non-200 status code received");
      }
    } catch (error) {
      return api.sendMessage("Unexpected Error - ⚠️",event.threadID);
    }
}