const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let isim = args.slice(0).join("+")
    if(!isim)return message.channel.send("**Lütfen Birşeyler Yaz(Türkçe Harf İçermemelidir.)**")
  let link = `https://fortnitefontgenerator.com/img.php?textcolor=FFFFFF&text=${mesaj}&fontsize=250px`
    const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
    .setImage(link)
    message.channel.send(embed)
};

exports.conf = {
  aliases: ['fornite-yazı', 'forniteyazı', 'fortniteyaz'],
  permLevel: 0,
  kategori: 'Genel'
};

exports.help = {
  name: 'fortnite-yaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: ''
};