module.exports.config = {
  name: "bing",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nayan",
  description: "",
  commandCategory: "Image",
  usages: "bing cat",
  cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const prompt = args.join(" ");
    const key = this.config.credits;
    if (!prompt) return api.sendMessage('use : /bing cat', event.threadID, event.messageID); 

    const rndm = ['156JyrQlgyouhrVIt8tQAutnHtD1XjbhsYwTikxrhAYJK3rDxegi8PFdOuQnycMWS_V3ullJrnLhqHfKTpUKlTS-GCrFZoe6R3nX5nm6dGGZ5bRGX1Pi9qoAln3AWnDS4bUiZ0oBmV_kwp8DWhoif3GRtSPTn3zN0b21VlAHgpE2fRPaDwDvTVjggVRiOc4bw7G535mQpZ6uuX1uy76aLGg']; 
    var cookie = rndm[Math.floor(Math.random() * rndm.length)];

    const res = await axios.get(`https://bing-api-5dpl.onrender.com/bing-img?key=${key}&cookie=${cookie}&prompt=${encodeURIComponent(prompt)}`);

    console.log(res.data);
    const data = res.data.result;
    const numberSearch = data.length;
    var num = 0;
    var imgData = [];
    for (var i = 0; i < parseInt(numberSearch); i++) {
        let path = __dirname + `/cache/${num += 1}.jpg`;
        let getDown = (await axios.get(`${data[i]}`, { responseType: 'arraybuffer' })).data;
        fs.writeFileSync(path, Buffer.from(getDown, 'utf-8'));
        imgData.push(fs.createReadStream(__dirname + `/cache/${num}.jpg`));
    }

    await api.sendMessage({
        attachment: imgData,
        body: "Bing Search Result\n\nPrompt: " + prompt + "\n\n#Number of Images: " + numberSearch
    }, event.threadID, event.messageID); 

    for (let ii = 1; ii < parseInt(numberSearch); ii++) {
        fs.unlinkSync(__dirname + `/cache/${ii}.jpg`);
    }
};