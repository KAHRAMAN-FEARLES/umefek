const discord = require('discord.js');
const database = require('croxydb');
const db = require('croxydb');
exports.run = (client, message, args) => {



let botid = args[0]
let sahipid = args[1]
let neden = args.slice(2).join(" ");

let basvuru = db.fetch(`basvuru_${message.guild.id}`)
let kanal = db.fetch(`botekle_${message.guild.id}`)
let log =   db.fetch(`botlistlog_${message.guild.id}`)
let yetkili =   db.fetch(`botlistyetkili_${message.guild.id}`)

if(!log) return message.channel.send("Bu komudu kullanmak için ayarların ayarlı olması gerekiyor. u!botlist-ayar").then(message => message.delete({timeout: 10000}))
if(!basvuru) return message.channel.send("Bu komudu kullanmak için ayarların ayarlı olması gerekiyor. u!botlist-ayar").then(message => message.delete({timeout: 10000}))
if(!kanal) return message.channel.send("Bu komudu kullanmak için ayarların ayarlı olması gerekiyor. u!botlist-ayar").then(message => message.delete({timeout: 10000}))
if(!yetkili) return message.channel.send("Bu komudu kullanmak için ayarların ayarlı olması gerekiyor. u!botlist-ayar").then(message => message.delete({timeout: 10000}))

if (!message.member.roles.cache.has(yetkili)) return message.channel.send('Bu komutu kullanamazsın çünkü yetkili rolüne sahip değilsin!').then(message => message.delete({timeout: 10000}))

if(!botid) return message.channel.send(":no_entry: Lütfen reddedeceğin botun ID'sini yaz.").then(message => message.delete({timeout: 10000}))
if(!sahipid) return message.channel.send(":no_entry: Lütfen reddedeceğin botun sahibinin ID'sini yaz.").then(message => message.delete({timeout: 10000}))
if(!neden) return message.channel.send(":no_entry: Lütfen reddetme sebebini yaz.").then(message => message.delete({timeout: 10000}))

const reddet = new discord.MessageEmbed()
.setDescription(`<@${sahipid}> adlı kişinin <@${botid}> isimli botu reddedildi.\nReddeden yetkili: <@${message.author.id}>\nSebep:: ${neden}`)
.setColor("BLUE")
.setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
client.channels.cache.get(log).send(reddet);

message.channel.send("Botu reddettiniz.").then(message => message.delete({timeout: 10000}))




};
exports.conf = {
  enabled: true,
  guildOnly: true, //Bu sadece sunucularda kullanılabilir ayarıdır true yazarsanız dm de kullanamazsınız false yazarsanız kullanabilirsiniz
  aliases: ["bot-reddet"] 
};

exports.help = {
  name: 'botreddet',
  description: 'komut açıklama',
  usage: ''
};