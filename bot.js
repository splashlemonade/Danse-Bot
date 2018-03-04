import random

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!danse')
string[3] responses = { "Outstanding.", "Ad Victoriam.", "What if nobody shot me and my head just did that?" }; //make an array of strings/responses to choose from

Random rnd = new Random(3); //create new Random class
int i = rnd.Next(3, responses.Length); //Indexing starts from 0, and the max value is minused by 1 (just how Random.Next works) so this will even out perfectly.



e.Channel.SendMessage(responses[i]); //Not sure what e.Channel.SendMessage is in the newer library versions, but that's what it is in 0.9.6 and it should be similar in the newer versions

});

client.on('message', message => {
    if (message.content === '!danse') {
    	message.reply('Outstanding.');
    }

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
