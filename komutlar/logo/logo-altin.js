const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen birşeyler yazınız.(Türkçe Harf İçermemelidir.)**`)
  const egehanss = `https://habbofont.net/font/steampunk/${yazi}.gif`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
  .setImage(egehanss)
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['altın-foto'],
    permLevel: 0
}

exports.help = {
    name: 'altın',
    description: 'Yazdığınız yazıyı dinamik çevirir.',
    usage: 'altın <yazı>'
}