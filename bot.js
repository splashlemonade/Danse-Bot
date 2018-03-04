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
    if (message.content === '!Danse') {
    	message.reply('Godless heathens!');
  	}
    
});

client.on('message', message => {
    if (message.content === '!DANSE') {
    	message.reply('This is positively barbaric.');
  	}
    
});

client.on('message', message => {
    if (message.content === '!dance') {
    	message.reply('I am more of a country-western and bluegrass fan myself.');
  	}
    
});

client.on('message', message => {
    if (message.content === '!d*nse') {
    	message.reply('I just wanted you to know that you are the only reason I have not opened fire and burned this place to the ground.');
  	}
    
});

client.on('message', message => {
    if (message.content === '!dnse') {
    	message.reply('Have you taken leave of your senses?');
    }
    
});

client.on('message', message => {
    if (message.content === '!dns') {
    	message.reply('You are one hell of a soldier.');
    }
    
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
