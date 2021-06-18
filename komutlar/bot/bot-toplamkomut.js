const Discord = require('discord.js')
const database = require('croxydb');
const db = require('croxydb');
exports.run = function(client, message, args) {
  
const embed = new Discord.MessageEmbed()
.setTimestamp()
.setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
.setColor("BLUE")
.addField(`Botta Bulunan Toplam Komut Sayısı;`,`${client.commands.size}`)
  message.channel.send(embed)
  
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["toplam-komut","komut-sayısı","komutsayısı"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'toplamkomut'
  };