const Discord = require('discord.js');
const database = require('croxydb');
const db = require('croxydb');
exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen birşeyler yazınız.(Türkçe Harf İçermemelidir.)**`)
  const linqo = `https://habbofont.net/font/battlebanzai/${yazi}.gif`
  .replace(' ', '+')

  
  const narcosembed = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("RED")
  .setImage(linqo)
  .setFooter('Anime Font Logo Oluşturuldu')
  message.channel.send(narcosembed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yazıfoto','yazı-foto'],
    permLevel: 0
}

exports.help = {
    name: 'anime',
    description: 'Yazdığınız yazıyı dinamik çevirir.',
    usage: 'anime'
}