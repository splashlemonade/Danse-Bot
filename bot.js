const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Paladin Danse reporting.');
});

client.on('message', message => {
    if (message.content === '!danse') {
    	message.reply('Outstanding.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
