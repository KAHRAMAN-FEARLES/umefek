const Discord = require("discord.js");

const database = require('croxydb');
const db = require('croxydb');
module.exports.run = async (bot, message, args) => {

  let kişi = message.mentions.users.first();
  if (!kişi) return message.channel.send("Banlamam için birini etiketle :no_entry: ")

 message.channel.send(`${kişi} adlı kullanıcı banlandı. ||İnananlar çete +1 yazabilir mi lütfen :d||`)



};
//////Narcos Code
module.exports.conf = {
  aliases: [],
  permLevel: 0,
  enabled: true,
  guildOnly: true,
};
////SAHTE BAN KOMUDUDUR :) 
module.exports.help = {
  name: "fakeban",
  description: "Birisini sahte şekilde banlarsınız.",
  usage: "fakeban @etiket"
};