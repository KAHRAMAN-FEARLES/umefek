const Discord = require('discord.js')
const db = require("croxydb");
const database = require('croxydb');

exports.run = async(client, message, args) => {
  
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')
  
let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`narcosmodlog_${message.guild.id}`)
if (args[0] === "sıfırla" || args[0] === "kapat") {
if(logkanal) return message.channel.send(new Discord.MessageEmbed()                                          
  .setTitle("Hata!!")
  .setDescription("Log Kanalı Ayarlı Değil.")
  .setColor("BLUE")
  .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL()));
db.delete(`narcosmodlog_${message.guild.id}`)
message.channel.send(new Discord.MessageEmbed()
  .setTitle("Başarılı!!")
  .setDescription("Modlog Kanalı Sıfırlandı.")
  .setColor("BLUE"));
return
}
if (!logk) return message.channel.send(new Discord.MessageEmbed()
  .setTitle("Hata!!")
  .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
  .setDescription("Bir Kanal Belirt.")
  .setColor("BLUE"));
db.set(`narcosmodlog_${message.guild.id}`, logk.id)
message.channel.send(new Discord.MessageEmbed()
    .setTitle("Başarılı!!")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
  .setDescription(`Modlog Kanalı ${logk} Olarak Ayarlandı.`)
  .setColor("BLUE"));
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['log','modlog'],
    permLevel: 0
};

exports.help = {
    name: 'mod-log',
    description: 'Moderasyon Loglarınızı Kayıt Eder',
    usage: 'mod-log'
};