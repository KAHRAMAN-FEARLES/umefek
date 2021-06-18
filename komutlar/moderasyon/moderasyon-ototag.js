const Discord = require('discord.js');
const db = require("croxydb");
const database = require('croxydb');


exports.run = async(client,message, args) => {
   if(!args[0])  return message.channel.send(new Discord.MessageEmbed()
.setColor('BLUE')
.setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
.setDescription('**Birşeyler Yazman Gerek!**\n**u!ototag ayarla Tag #kanal** - **Ototag sistemini ayarlar.** \n**u!ototag sıfırla** - **Ototag sistemini sıfırlar.**'))

  if(args[0] === "ayarla") {

    var tag = args[1]
     var rolkanal = message.mentions.channels.first()
    if(!tag) return message.channel.send(new Discord.MessageEmbed()
.setColor('BLUE')
.setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
.setDescription('**Bir tag yazmalısın.**'))
    if(!rolkanal) return message.channel.send(new Discord.MessageEmbed().setColor('BLUE').setDescription('**Bir kanal etiketlemelisin.**'))
 
    db.set(`autoTagChannel_${message.guild.id}`, rolkanal.id)
    db.set(`autoTag_${message.guild.id}`, tag)
  
    return message.channel.send(new Discord.MessageEmbed()
.setColor('BLUE')
.setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
.setDescription('**Ototag Sistemi Aktif Edildi!**\n**Sunucuya giren kişilere verilecek tag **' + tag + ' \n**Ototag mesajının gideceği kanal** <#' +rolkanal.id+ '> **Olarak ayarlandı.**'))
  }
  
  if(args[0] === "sıfırla") {
          db.delete(`autoTagChannel_${message.guild.id}`)
          db.delete(`autoTag_${message.guild.id}`)
          return message.channel.send(new Discord.MessageEmbed()
          .setColor('BLUE')
          .setDescription('**Ototag Sistemi Sıfırlandı!**'))
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 3
}

exports.help = {
  name: "ototag"
}