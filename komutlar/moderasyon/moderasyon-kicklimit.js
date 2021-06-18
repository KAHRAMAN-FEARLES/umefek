const Discord = require('discord.js')
const db = require("croxydb");
const database = require('croxydb');
exports.run = async(client, message, args) => {

  
  let limit = args[0]
  
  if (!limit) return message.channel.send(`Lütfen Limit Belirt.`)
  if (isNaN(limit)) return message.channel.send('Kick Limiti Sadece Sayılardan Oluşabilir! Lütfen Sayıyı Harflerle Yazmayı Deneme :D')
  
  db.set(`kicklimit_${message.guild.id}`, limit)
message.channel.send(`Kick Limiti **${limit}** Olarak Ayarlandı! Limiti Geçeni Döverim.`)
};
exports.conf = {
  aliases: ["kick-limit"],
  permLevel: 4
};
exports.help = {
  name: 'kicklimit'
}; 