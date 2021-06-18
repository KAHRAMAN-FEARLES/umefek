const Discord = require('discord.js');
const db = require("croxydb");
const database = require('croxydb');


exports.run = async (client, message, args) => {
if(message.author.id !== message.guild.owner.user.id) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setDescription(`Bu komutu kullanmak için, \`**Sunucu Sahibi**\` olmanız gerekiyor.`).addField('Sunucu Sahibi', message.guild.owner.user.tag).setImage('https://hizliresim.com/xnoGzL'));

  
message.channel.send(new Discord.MessageEmbed()
.setTitle("Sunucu Kurma İşlemi")
.setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
.setColor("BLUE")
.addField("**Sunucular!**", "** **")
.addField("Gelişmiş Sunucu Kurma", "u!sunucu-kur-gelişmiş")
.addField("Normal Sunucu Kurma", "u!sunucu-kur-normal")
.addField("Botlist Sunucu Kurma", "u!sunucu-kur-botlist"))

  

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sunucu-kur'],
  permLevel: 0
}

exports.help = {
  name: 'sunucu-kur'
};//THE MAN BEHİND THE İMPOSTER