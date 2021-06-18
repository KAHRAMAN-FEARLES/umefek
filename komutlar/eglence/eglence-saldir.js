
const fs = require('fs');
const discord = require('discord.js');
const database = require('croxydb');
const db = require('croxydb');
exports.run = async(client, message, args) => {
  
let saldirmasana = args.slice(1).join(' ');
let uye = message.mentions.users.first();

if (message.mentions.users.size < 1) return message.channel.send(`Üye etiketlemedin, nasıl saldıracağım?!`)
if(!args[0])  return message.channel.send("Kullanım: u!saldır @ÜYE Saldırma Sebebi")
if(!args[1])  return message.channel.send("Kullanım: u!saldır @ÜYE Saldırma Sebebi")

const umutice = new discord.MessageEmbed()
//.setDescription("**Buneee, imdaaat**\n- <@!" + uye + `>\n**Şimdi Mahvettim Seni!**\n- <@!${message.author.id}>\n**Ne yaptım kiiiii, imdaat!!**\n- <@` + uye + ">\n**" + saldirmasana + `**\n-<@!${message.author.id}>`)
.addField("**Buneee, imdaaat**", `${uye}`)
.addField("**Şimdi Mahvettim Seni!**", `<@!${message.author.id}>`)
.addField("**Ne yaptım kiiiii, imdaat!!**", `${uye}`)
.setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
.setColor("BLUE")
.addField(`${saldirmasana}`, `<@!${message.author.id}>`)
.setImage("https://media4.giphy.com/media/U3t0STrvMXB3HYrOAe/200w.webp")
message.channel.send(umutice)  

  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'saldır',
  description: 'Birine Saldırırsınız.',
  usage: ''
}; //NARCOS CODE <3