const chalk = require('chalk');
module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#00FF00").bold('[ Error ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#00FF00").bold('[ Error ] »') + data);
     break;
		default:			        
                        console.log(chalk.bold.hex("#00FF00").bold(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#FF00EE").bold('[𝐍𝐀𝐙𝐑𝐔𝐋 💁😘🪽] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#002CFF").bold('[𝐍𝐀𝐙𝐑𝐔𝐋 💁😘🪽] » ') + data);
			break;
		default:
			console.log(chalk.bold.hex("#FF0700").bold(`[𝐍𝐀𝐙𝐑𝐔𝐋 💁😘🪽] » `) + data);
			break;
	}
	}