const Discord = require('discord.js');
const database = require('croxydb');
const db = require('croxydb');
exports.run = (client, message, args) => {

let id = args[0]
let prefix = args[1]
let dbl = args[2]

let basvuru = db.fetch(`basvuru_${message.guild.id}`)
let kanal = db.fetch(`botekle_${message.guild.id}`)
let log =   db.fetch(`botlistlog_${message.guild.id}`)
let yetkili =   db.fetch(`botlistyetkili_${message.guild.id}`)

if(!log) return message.channel.send("Bu komudu kullanmak için ayarların ayarlı olması gerekiyor. u!botlist-ayar").then(m => m.delete({timeout: 10000}))
if(!basvuru) return message.channel.send("Bu komudu kullanmak için ayarların ayarlı olması gerekiyor. u!botlist-ayar").then(m => m.delete({timeout: 10000}))
if(!kanal) return message.channel.send("Bu komudu kullanmak için ayarların ayarlı olması gerekiyor. u!botlist-ayar").then(m => m.delete({timeout: 10000}))
if(!yetkili) return message.channel.send("Bu komudu kullanmak için ayarların ayarlı olması gerekiyor. u!botlist-ayar").then(m => m.delete({timeout: 10000}))

if (message.channel.id !== kanal) return message.channel.send(`Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.`).then(m => m.delete({timeout: 10000}))
if (message.channel.id == kanal) {
    if(!id) return message.channel.send(":no_entry: Lütfen botunun ID'sini yaz.").then(m => m.delete({timeout: 10000}))
    if(!prefix) return message.channel.send(":no_entry: Lütfen botun prefixini yaz.").then(m => m.delete({timeout: 10000}))
    if(!dbl) return message.channel.send(":no_entry: Lütfen botun DBL onaylı olup olmadığını yaz.").then(m => m.delete({timeout: 10000}))
    message.delete()
    const basvuruuu = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setDescription(`${message.author} isimli kullanıcının <@${id}> isimli botu sıraya ekledi. En kısa zamanda yetkililer kontrol edecektir.`)
  const embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setDescription(`[Botu Ekle](https://discordapp.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=0)`, true)
  .setTitle("Bir Bot İsteği Var!")
  .addField("Bot Sahibi", message.author.tag)
  .addField("Bot Sahibi ID", message.author.id)
  .addField("Bot ID", id)
  .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
  .addField("Bot Prefix", prefix)
  .addField("DBL Onaylı Mı?", dbl)
  client.channels.cache.get(basvuru).send(embed)
  client.channels.cache.get(log).send(basvuruuu)
  message.channel.send(`Bot ekleme isteğiniz alındı. Tek yapman gereken şey beklemek.`).then(m => m.delete({timeout: 10000}))
}


};
exports.conf = {
  enabled: true,
  guildOnly: true, //Bu sadece sunucularda kullanılabilir ayarıdır true yazarsanız dm de kullanamazsınız false yazarsanız kullanabilirsiniz
  aliases: ["bot-ekle"] 
};

exports.help = {
  name: 'botekle',
  description: 'komut açıklama',
  usage: ''
};