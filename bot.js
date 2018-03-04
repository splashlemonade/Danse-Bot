// Loading dependencies
const Discord = require("discord.js");
// Create a new bot object
const myBot = new Discord.Client();

// Loading global variables
const danseResponses = ["Ad Victoriam.", "Outstanding.", "What if nobody shot me and my head just did that?"];

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
        case "danse":
            var response = danseResponses [Math.floor(Math.random()*danseResponses .length)];

            message.channel.send(response).then().catch(console.error);
            break;
        default:
            break;
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
