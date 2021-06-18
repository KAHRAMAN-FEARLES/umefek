const Discord = require('discord.js');
const database = require('croxydb');
const db = require('croxydb');
exports.run = (client, message, params) => {
   
  const egehanss = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTitle('Sunucunun resmi;')
  .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
  .setImage(message.guild.iconURL({dynamic: true}))
  message.channel.send(egehanss)
}

exports.conf = {
  enabled: true, 
  guildOnly: true, 
    aliases: ["sunucu-resmi","sunuculogo","sunucu-logo"],
}

exports.help = {
  name: 'sunucuresmi',
};