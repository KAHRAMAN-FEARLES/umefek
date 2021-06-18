const Discord = require('discord.js');
const database = require('croxydb');
const db = require('croxydb');
exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
    if (mesaj.includes("@everyone")) return message.channel.send(`${message.author} Akıllısın. Ama ben senden akıllıyım :) Maalesef bu komutla everyone çekemezsin.`).then(a => a.delete({timeout: 4500}));
  if (mesaj.includes("@here")) return message.channel.send(`${message.author} Akıllısın. Ama ben senden akıllıyım :) Maalesef bu komutla here çekemezsin.`).then(a => a.delete({timeout: 4500}));
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yaz',
  description: 'Bota yazı yazdırırsınız',
  usage: 'yaz YAZI'
};