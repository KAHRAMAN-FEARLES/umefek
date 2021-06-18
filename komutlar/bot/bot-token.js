const Discord = require('discord.js');
const database = require('croxydb');
const db = require('croxydb');
exports.run = (client, message, params) => {
      const token = new Discord.MessageEmbed()
    .setAuthor(message.author.username + " Bak Tokenim Burada Al Bakalım :)")
    .setColor("BLUE")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
    .setTimestamp()
    .setDescription('')
    .setImage("https://media1.tenor.com/images/67f374697c7a93ce136a855250258d3e/tenor.gif?itemid=21562156")
    return message.channel.send(token);
    
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'token',
  description: 'tokenimi gösterir. ',
  usage: 'token'
};