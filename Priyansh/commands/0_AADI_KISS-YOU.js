const fs = require("fs");
module.exports.config = {
	name: "KISS-YOU",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "AADI BABU",
	description: "THIS BOT IS MR AADI SHARMA",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("kiss") ||
     react.includes("kiss you") || react.includes("umma") || react.includes("KISS DO") ||
react.includes("kiss me") ||
react.includes("KISS YOU")) {
		var msg = {
				body: `𝐊𝐬𝐬𝐢 𝐒𝐰𝐞𝐞𝐭 𝐍𝐚𝐡𝐢 𝐇𝐚𝐢 🤮🤮`,attachment: fs.createReadStream(__dirname + `/noprefix/KK10.png`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
