var nayan = "SHAON AHMED";
module.exports.config = {
  'name': "textpro",
  'version': "1.0.0",
  'hasPermssion': 0x0,
  'credits': "SHAON",
  'description': "Text pro",
  'commandCategory': "text edit",
  'usages': "textpro <text>",
  'cooldowns': 0xa
};
const API = "https://textpro-photoxy-api-b96b.onrender.com";
module.exports.run = async function ({
  api: _0x11c673,
  event: _0x47e11b,
  args: _0x12fc58
}) {
  const _0x2ec6fb = require("axios");
  const _0x5cec15 = require("fs-extra");
  const _0xd9e5a3 = _0x12fc58[0];
  const _0x19e4c2 = _0x12fc58.slice(1).join('');
  if (!_0xd9e5a3 || isNaN(_0xd9e5a3)) {
    return _0x11c673.sendMessage("🔰Use " + global.config.PREFIX + "textpro [no.] [text]\n🔰Example: " + global.config.PREFIX + "textpro 1 " + "SHAON AHMED" + "\n\n🔥Total Edit limit 207...", _0x47e11b.threadID, _0x47e11b.messageID);
  }
  const _0x3fe8fa = "/api/textpro?number=" + _0xd9e5a3 + "&text=" + _0x19e4c2;
  const _0x26b3ec = __dirname + "/cache/server2.png";
  _0x11c673.sendMessage('', _0x47e11b.threadID, _0x47e11b.messageID);
  _0x2ec6fb.get("https://textpro-photoxy-api-b96b.onrender.com" + _0x3fe8fa, {
    'responseType': "arraybuffer"
  }).then(_0x22c351 => {
    const _0x47222f = _0x22c351.data;
    _0x5cec15.writeFileSync(_0x26b3ec, Buffer.from(_0x47222f));
    _0x11c673.sendMessage({
      'body': "❐ THIS IS YOUR NAME EDIT ✌️\n\n___________________________________\n\n❐ This Bot Name : " + global.config.BOTNAME + " 🤖\n\n❐  This Bot Owner : " + "SHAON AHMED" + "😘\n\n❐Your Input Name : " + _0x19e4c2 + "\n\n___________________________________\n\n⚡  Textpro Api  👉SHAON PROJECT 🔥",
      'attachment': _0x5cec15.createReadStream(_0x26b3ec)
    }, _0x47e11b.threadID, () => _0x5cec15.unlinkSync(_0x26b3ec));
  })["catch"](_0xe80cf4 => {
    let _0x2fac7a;
    if (_0xe80cf4.response) {
      _0x2fac7a = JSON.parse(_0xe80cf4.response.data.toString());
    } else {
      _0x2fac7a = _0xe80cf4;
    }
    return _0x11c673.sendMessage("❗️ERROR ❌\n\n❗️❐ 𝚂𝙷𝙰𝙾𝙽 6𝚇 𝚂𝙴𝚁𝚅𝙴𝚁 𝙱𝚄𝚂𝚈 𝙽𝙾𝚆 💔🥀", _0x47e11b.threadID, _0x47e11b.messageID);
  });
};