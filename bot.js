const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!danse') {
    	message.reply('Outstanding.');
    }
    
});

client.on('message', message => {
    if (message.content === '!johnfield') {
    	message.reply('With you by my side, I feel like I can take on the world.');
  	}
});

client.on('message', message => {
    if (message.content === '!wash') {
    	message.reply('will you be the rachel to my ross');
  	}
});

client.on('message', message => {
    if (message.content === '!jfk') {
    	message.reply('What if nobody shot me and my head just did that?');
  	}
});

client.on('message', message => {
    if (message.content === '!paladin') {
    	message.reply('Ad Victoriam.');
  	}
});

client.on('message', message => {
    if (message.content === '!dash') {
    	message.reply('I like it when you are this close.');
  	}
    
});

   client.on('message', message => {
    if (message.content === '!testing') {
    message.reply (file: 'app.net/attachments/419305970863308800/419603904456556544/johnfieldkennedy.png');
    } // Or replace with FileOptions object
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
