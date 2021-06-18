const discord = require('discord.js');
const database = require('croxydb');
const db = require('croxydb');
exports.run = (client, message, args) => {



let botid = args[0]
let sahipid = args[1]

let basvuru = db.fetch(`basvuru_${message.guild.id}`)
let kanal = db.fetch(`botekle_${message.guild.id}`)
let log =   db.fetch(`botlistlog_${message.guild.id}`)
let yetkili =   db.fetch(`botlistyetkili_${message.guild.id}`)
let developerr =   db.fetch(`botlistdeveloper_${message.guild.id}`)
let botrol =   db.fetch(`botlistbotrol_${message.guild.id}`)

if(!log) return message.channel.send("Bu komudu kullanmak için ayarların ayarlı olması gerekiyor. u!botlist-ayar").then(message => message.delete({timeout: 10000}))
if(!basvuru) return message.channel.send("Bu komudu kullanmak için ayarların ayarlı olması gerekiyor. u!botlist-ayar").then(message => message.delete({timeout: 10000}))
if(!kanal) return message.channel.send("Bu komudu kullanmak için ayarların ayarlı olması gerekiyor. u!botlist-ayar").then(message => message.delete({timeout: 10000}))
if(!yetkili) return message.channel.send("Bu komudu kullanmak için ayarların ayarlı olması gerekiyor. u!botlist-ayar").then(message => message.delete({timeout: 10000}))
if(!developerr) return message.channel.send("Bu komudu kullanmak için ayarların ayarlı olması gerekiyor. u!botlist-ayar").then(message => message.delete({timeout: 10000}))
if(!botrol) return message.channel.send("Bu komudu kullanmak için ayarların ayarlı olması gerekiyor. u!botlist-ayar").then(message => message.delete({timeout: 10000}))

if (!message.member.roles.cache.has(yetkili)) return message.channel.send('Bu komutu kullanamazsın çünkü yetkili rolüne sahip değilsin!').then(msg => msg.delete(10000))

if(!botid) return message.channel.send(":no_entry: Lütfen kabul edeceğin botun ID'sini yaz.").then(message => message.delete({timeout: 10000}))
if(!sahipid) return message.channel.send(":no_entry: Lütfen kabul edeceğin botun sahibinin ID'sini yaz.").then(message => message.delete({timeout: 10000}))

const kabulet = new discord.MessageEmbed()
.setDescription(`<@${sahipid}> adlı kişinin <@${botid}> isimli botu kabul edildi.\nKabul eden yetkili: <@${message.author.id}>`)
.setColor("BLUE")
.setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
client.channels.cache.get(log).send(kabulet);
sahipid.roles.add(developerr)
botid.roles.add(botrol)

message.channel.send("Botu onayladınız.").then(message => message.delete({timeout: 10000}))




};
exports.conf = {
  enabled: true,
  guildOnly: true, //Bu sadece sunucularda kullanılabilir ayarıdır true yazarsanız dm de kullanamazsınız false yazarsanız kullanabilirsiniz
  aliases: ["bot-onayla"] 
};

exports.help = {
  name: 'botonayla',
  description: 'komut açıklama',
  usage: ''
};