const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', msg ->{
if(msg.content.startsWith('!ping'){
msg.channel.send(client.ping + 'пинг слева'
}
});

client.login('token');
