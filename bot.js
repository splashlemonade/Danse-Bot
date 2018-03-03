const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Paladin Danse reporting.');
});

client.on('message', message => {
    if (message.content === '!danse') {
    	message.reply('Outstanding.');
        message.reply('With you standing by me, I feel like I can take on the world.');
    	message.reply('If I lost you, I don't know what I'd do.');
        message.reply('Ad Victorium.');
  	}

    
  	}
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
