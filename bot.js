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
    if (message.content === '!warriormale') {
    	message.reply('Train and Fight!');
  	}
});

client.on('message', message => {
    if (message.content === '!Dash') {
    	message.reply('I hope one day you will be able to come to terms with whatever demons youre fighting.');
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
    if (message.content === '!Paladin Danse') {
    	message.reply('Dont worry, the only reason I am here is to get slightly intoxicated.');
  	}
});

client.on('message', message => {
    if (message.content === '!Danse') {
    	message.reply('Godless heathens!');
  	}
    
});

client.on('message', message => {
    if (message.content === '!Paladin D*nse') {
    	message.reply('I bet a months pay that we will find an illicit experiment gone awry inside this vault..');
  	}
});

client.on('message', message => {
    if (message.content === '!paladin d*nse') {
    	message.reply('These mirelurks obviously have no respect for the historical significance of this location.');
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

client.on('message', message => {
    if (message.content === '!D*nse') {
    	message.reply('This is an astonishing waste of technology.');
    }
    
});

client.on('message', message => {
    if (message.content === '!D*NSE') {
    	message.reply('This place would elicit fear in most individuals. Fortunately my training prevents... wait... what was that?');
    }
    
});

client.on('message', message => {
    if (message.content === '!danse danse') {
    	message.reply('Revolution');
    }
    
});

client.on('message', message => {
    if (message.content === '!safety danse') {
    	message.reply('We can dance if we want to, we can leave our friends behind.');
    }
    
});

client.on('message', message => {
    if (message.content === '!paladin danse') {
    	message.reply('Whats the matter? Dont like kicking in the door?');
    }
    
});

client.on('message', message => {
    if (message.content === '!danse fucker danse') {
    	message.reply('Man he never had a chance.');
    }
    
});

client.on('message', message => {
    if (message.content === '!dance dance') {
    	message.reply('Were falling apart to half time.');
    }
    
});

client.on('message', message => {
    if (message.content === '!dance dance!') {
    	message.reply('And these are the lives you love to lead.');
    }
    
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
