const Discord = require('discord.js')
const db = require("croxydb");
exports.run = async(client, message, args) => {

  
  let limit = args.slice(0).join(' ')
  
  if (!limit) return message.channel.send(`Lütfen Limit Belirt.`)
  if (isNaN(limit)) return message.channel.send('Kick Limiti Sadece Sayılardan Oluşabilir! Lütfen Sayıyı Harflerle Yazmayı Deneme :D')
  
  db.set(`banlimit_${message.guild.id}`, limit)
message.channel.send(`Ban Limiti **${limit}** Olarak Ayarlandı! Limiti Geçeni Döverim.`)
};
exports.conf = {
  aliases: [],
  permLevel: 4
};
exports.help = {
  name: 'banlimit'
}; 