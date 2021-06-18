const Discord = require('discord.js');
const database = require('croxydb');
const db = require('croxydb');
const cevaplar = [
    "Evet",
    "Hayır",
    "Belki",
    "Olabilir",
    "Daha sonra tekrar sor",
    "İmkansız",
    "Pingliyim galiba sonra tekrar dene"
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Bir soru belirt. **Doğru Kullanım**: u!soru-sor <soru>')
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["sorusor"],
  permLevel: 0 
};

exports.help = {
  name: 'soru-sor', 
  description: 'Bota soru sorarsınız',
  usage: '8ball <soru>'
};