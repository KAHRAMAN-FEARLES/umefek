const Discord = require('discord.js');
const db = require("croxydb");
const database = require('croxydb');

exports.run = async(client,message, args) => {
   if(!args[0])  return message.channel.send(new Discord.MessageEmbed()
.setColor('BLUE')
.setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
.setDescription('**Birşeyler Yazman Gerek!**\n**u!otorol ayarla @üye #kanal** - **Otorol sistemini ayarlar.** \n**u!otorol sıfırla** - **Otorol sistemini sıfırlar.**'))

  if(args[0] === "ayarla") {

    var rol = message.mentions.roles.first()   
     var rolkanal = message.mentions.channels.first()
    if(!rol) return message.channel.send(new Discord.MessageEmbed()
.setColor('BLUE')
.setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
.setDescription('**Bir rol etiketlemelisin.**'))
    if(!rolkanal) return message.channel.send(new Discord.MessageEmbed().setColor('BLUE').setDescription('**Bir kanal etiketlemelisin.**'))
 
    db.set(`autoRoleChannel_${message.guild.id}`, rolkanal.id)
    db.set(`autoRole_${message.guild.id}`, rol.id)
  
    return message.channel.send(new Discord.MessageEmbed()
.setColor('BLUE')
.setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
.setDescription('**Otorol Sistemi Aktif Edildi!**\n**Sunucuya giren kişilere verilecek rol** <@&' + rol + '> \n**Otorol mesajının gideceği kanal** <#' +rolkanal.id+ '> **Olarak ayarlandı.**'))
  }
  
  if(args[0] === "sıfırla") {
          db.delete(`autoRoleChannel_${message.guild.id}`)
          db.delete(`autoRole_${message.guild.id}`)
          return message.channel.send(new Discord.MessageEmbed()
          .setColor('BLUE')
          .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
          .setDescription('**Otorol Sistemi Sıfırlandı!**'))

  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 3
}

exports.help = {
  name: "otorol"
}