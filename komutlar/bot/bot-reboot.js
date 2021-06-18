const Discord = require('discord.js');
const database = require('croxydb');
const db = require('croxydb');
exports.run = (client, message, args) => {
    var embed2 = new Discord.MessageEmbed()
    .setAuthor(message.author.username + " Şu An Yeniden Başlıyorum.")
    .setColor("BLUE")
    .setTimestamp()
    .setDescription('')
    .setImage("https://media1.tenor.com/images/67f374697c7a93ce136a855250258d3e/tenor.gif?itemid=21562156")

    if(message.author.id !== "769241220110352416") return message.channel.send(embed2)
    message.delete();
    message.channel.send(new Discord.MessageEmbed().setColor('BLUE').setTitle('Reboot').setDescription('Eğer Kabul Ediyorsan => `onay` <=\n15 Saniye içinde cevap vermezsen iptal edilecek.').setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL()).setTimestamp())
    .then(() => {
    message.channel.awaitMessages(response => response.content === 'onay', {
    max: 1,
    time: 15000,
    errors: ['time'],
    })
    .then((collected) => {
      message.channel.send(new Discord.MessageEmbed().setColor('BLUE').setTitle('Reboot').setDescription('Onay Verildi! Yeniden Başlatılıyorum...').setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL()).setTimestamp()).then(msg => {
    console.log(`Yeniden Başlatılıyor...`);
    process.exit(0);
    })
    })
    .catch(() => {
      message.channel.send(new Discord.MessageEmbed().setColor('BLUE').setTitle('Yeniden Başlatma').setDescription('Komut İptal Edildi!').setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL()).setTimestamp())
    });
    });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'reboot',
  description: 'Botu Yeniden Başlatır.',
  usage: 'reboot'
};