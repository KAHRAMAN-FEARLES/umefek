const Discord = require('discord.js');
const db = require("croxydb");
const database = require('croxydb');


exports.run = async (client, message, args) => {
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setTitle('Ne kadar mesajı uzay boşluğuna göndereceğim?'));
if(!Number(args[0])) (new Discord.MessageEmbed().setTitle('Bu kadar mesaj silemem ki, bu bir rakam değil!'));
if(args[0] > 100) return message.channel.send(new Discord.MessageEmbed().setTitle('Discord bu kadar mesajı silmeme izin vermiyor. Uzay boşluğunda bu kadar yer yokmuş.'));

message.channel.bulkDelete(args[0]);
return message.channel.send(new Discord.MessageEmbed()
.addField(`Temizleyen Yetkili`, `<@${message.author.id}>`)
.setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
.setColor("BLUE")
.setDescription('**Görev Tamamlandı! '+`${args[0]}`+' adet mesaj uzay boşluğunda kayboldu, nereye gitti bende bilmiyorum aramaya çalışma.**')).then(m => m.delete({timeout: 3900}));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 1
}

exports.help = {
  name: 'sil'
};