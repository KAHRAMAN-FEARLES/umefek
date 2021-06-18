const Discord = require('discord.js')
const db = require("croxydb");
const database = require('croxydb');
 
exports.run = async(client, message, args) => {

  if (!args[0]) {
    const sa = new Discord.MessageEmbed()
    .setDescription(`Kullanımı Şu Şekilde Olmasın Aman: u!kanalkoruma aç/kapat`)
    .setTimestamp()
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
    .setColor("BLUE")
    return message.channel.send(sa)
  }
  if (args[0] === 'aç') {
    
    db.set(`kanalk_${message.guild.id}`, "Aktif")
       const sa = new Discord.MessageEmbed()
    .setDescription(`Kanal Koruma Başarıyla Açıldı!`)
    .setTimestamp()
    .setColor("BLUE")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
    return message.channel.send(sa)
  }
   if (args[0] === 'kapat') {
    
    db.delete(`kanalk_${message.guild.id}`)
       const sa = new Discord.MessageEmbed()
    .setDescription(`Kanal Koruma Başarıyla Kapatıldı!`)
    .setTimestamp()
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
    .setColor("BLUE")
    return message.channel.send(sa)
  }
};
exports.conf = {
  aliases: [],
  permLevel: 4
};
exports.help = {
  name: 'kanal-koruma'
}; 