const Discord = require('discord.js');
const database = require('croxydb');
const db = require('croxydb');

exports.run = async (client, message, args) => {// can#0002
if(message.author.id !== '769241220110352416') return;

function gönderkardesim(content) {
const infoEmbed = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(content)
.setTimestamp()
.setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }));
return message.channel.send(infoEmbed)
};

const durum = await database.fetch(client.user.id);
if(durum == true) {

await database.delete(client.user.id);
return gönderkardesim('Bakım artık sona erdi.');

} else {

await database.set(client.user.id, true);
database.set(client.user.id+':)', { 
author: message.author,
time: Date.now() 
});

return gönderkardesim('Bakım modu açıldı.\nArtık hiç bir kimse komutları kullanamayacak.');
};


}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bakım'],
  permLevel: 0
};
 
exports.help = {
  name: 'bakım-modu',
  options: [
    {
        name: 'User',
        description: 'If mentioned, shows the information about the user.',
        type: 6,
        required: false
    }
]
};// codare ♥