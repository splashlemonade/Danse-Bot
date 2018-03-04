// Loading dependencies
const Discord = require("discord.js");
// Create a new bot object
const myBot = new Discord.Client();

// Loading global variables
const helloResponses = ["Hello", "Hi", "Hi there"];

// The onReady even handler. Will get executed only once.
myBot.on('ready', function () {
    console.log(`${myBot.user.username} online!`);
});

// The onMessage event handler
myBot.on('message', function (message) {
    // It is considered bad practice to let your bot react to other bots.
    if (message.author.bot) return;

    // If a message doesn't start with your bot's prefix, don't bother going through the cases.
    if (!message.content.startsWith("!")) return;

    // Args length check. #1 is the command, #2 and higher are the arguments
    var args = message.content.substring("!".length).split(" ");

    switch (args[0].toLowerCase()) {
        case "hello":
            var response = helloResponses [Math.floor(Math.random()*helloResponses .length)];

            message.channel.send(response).then().catch(console.error);
            break;
        default:
            break;
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
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


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
