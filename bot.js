const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!danse') {
    	message.reply('Outstanding.');
    }
    
    {
    if (message.content === '!dnse') {
    	message.reply('With you standing by me, I feel like I can take on the world.');
    }
        
        {
    if (message.content === '!johnfield') {
    	message.reply('If I lost you, I dont know what I would do.');
    }
            
            {
    if (message.content === '!paladin') {
    	message.reply('Ad Victoriam.');
    }
                
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
