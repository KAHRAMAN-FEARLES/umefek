const Discord = require('discord.js');
const db = require("croxydb");
const database = require('croxydb');

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(` Bu komudu kullanabilmek için "Sunucuyu Yönet" yetkisine sahip olman gerek. Ama sende yok? Hadi yürrü`)
  if (!args[0]) return message.channel.send(`:no_entry: :no_entry: Reklam Engel Böyle Çalışmıyor. \`u!reklam-engel aç\` | veya \`u!reklam-engel kapat\` Yazman Gerek`)
  if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send(`:no_entry: Reklam Engel Böyle Çalışmıyor. \`u!reklam-engel aç\` | veya \`u!reklam-engel kapat\` Yazman Gerek`)

    if (args[0] == 'aç') {
    db.set(`reklam_${message.guild.id}`, 'acik')
    let i = await db.fetch(`reklam_${message.guild.id}`)
  message.channel.send(`<a:evet:819837666363310091> Reklamcıların Korkulu Rüyası Olmaya Hazırım.`)   
    
  }

  if (args[0] == 'kapat') {
      
    db.delete(`reklam_${message.guild.id}`)
    
    message.channel.send(`Reklam Filtresini Kapattım.`)
  }
 
};


exports.conf = {
 enabled: true,
 guildOnly: true,
  aliases: ['reklam','reklamengel','reklamengelle','reklam-engelle'],
 permLevel: 0
};

exports.help = {
 name: 'reklam-engel',
 description: 'reklamm',
 usage: 's$$kanal'
};