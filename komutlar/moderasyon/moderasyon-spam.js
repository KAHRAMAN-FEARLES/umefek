const Discord = require('discord.js');
const db = require("croxydb");
const database = require('croxydb');

exports.run = async (client, message, args) => {

  const nn = new Discord.MessageEmbed().setThumbnail();
const sistem = await db.fetch(`spam.${message.guild.id}`);
  
if (args[0] == 'aç') {

db.set(`spam.${message.guild.id}`, 'spallers');
return message.channel.send(nn.setTitle(`İşlem başarılı!`).setColor('BLUE').setDescription(`**Spam koruma başarıyla açıldı!**`)).then(a => a.delete({timeout: 10000}));
  }
  
if (args[0] == 'kapat') {

db.delete(`spam.${message.guild.id}`);
return message.channel.send(nn.setTitle(`İşlem başarılı!`).setColor('BLUE').setDescription(`**Spam koruma başarıyla açıldı!**`)).then(a => a.delete({timeout: 10000}));
  }
  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['spam-engel', 'spamengel', 'spam-koruma', 'spamkoruma'],
  permLevel: 4
}

exports.help = {
  name: 'spam'
};