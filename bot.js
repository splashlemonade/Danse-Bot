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
function show_image(src, width, height, alt) {
    var img = document.createElement("https://media.discordapp.net/attachments/419305970863308800/419603904456556544/johnfieldkennedy.png?width=577&height=473");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
