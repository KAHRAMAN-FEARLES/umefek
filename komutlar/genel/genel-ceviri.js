const Discord = require("discord.js");
const database = require('croxydb');
const db = require('croxydb');
exports.run = async (client, message, args) => {
    var translate = require('node-google-translate-skidz');
    const dil1 = args[0]
    const dil2 = args[1]
    const sözcük = args.slice(2).join(" ")
    if (!dil1) return message.channel.send(new Discord.MessageEmbed().setTitle('Lütfen Geçerli Bir Dil Girin').setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL()).setDescription(`**Not: Dili Kısaltma Olarak Girin. Kısaltmaları Bilmiyorsanız [Buraya Tıklayarak](https://tr.wiktionary.org/wiki/Vikis%C3%B6zl%C3%BCk:Diller_listesi) Ulaşabilirsiniz.**`).setColor('BLUE'))
    if (!dil2) return message.channel.send(new Discord.MessageEmbed().setTitle('Lütfen Çevirilecek Bir Dil Girin').setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL()).setDescription(`**Not: Dili Kısaltma Olarak Girin. Kısaltmaları Bilmiyorsanız [Buraya Tıklayarak](https://tr.wiktionary.org/wiki/Vikis%C3%B6zl%C3%BCk:Diller_listesi) Ulaşabilirsiniz.**`).setColor('BLUE'))
    if (!sözcük) return message.channel.send(new Discord.MessageEmbed().setAuthor('Lütfen Çevirilecek Yazıyı Girin').setColor('BLUE').setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL()))

    translate({
      text: sözcük,
      source: dil1,
      target: dil2
    }, function(result) {
      message.channel.send(new Discord.MessageEmbed()
      .setTitle('Çeviri')
      .setThumbnail('https://media.discordapp.net/attachments/815166779319517206/822155847395180554/kisspng-google-translate-translation-english-language-clolorful-letters-5ac9c995c64c45.8151412515231.png?width=473&height=473')
      .setDescription(`Çeviri Dili: **${dil1}** => **${dil2}**`)
      .addField('Yazı', sözcük)
      .addField('Çeviri', result)
      .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
      .setColor('BLUE'));
    });
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çevir', 'çeviri', 'translate'],
  permLevel: 0
};
exports.help = {
  name: 'çeviri',
  description: 'İstediğiniz bir yazıyı çevirirsiniz',
  usage: 'çeviri dil1 dil2 yazı'
};