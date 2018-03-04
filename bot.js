import random

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

@client.command(pass_context=True)
async def insoviet(ctx):

    possible_responses = ["Outstanding.", "With you by my side, I feel like I can take on the world.", "Ad Victoriam.", "What if nobody shot me and my head just did that?"]

    current_response = random.choice(possible_responses)

    await client.say(current_response)

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
    	message.reply('I am more of a country-western and bluegrass fan myself.');
  	}
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
