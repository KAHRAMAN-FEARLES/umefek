const Discord = require('discord.js');
const db = require("croxydb");

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(` Bu komudu kullanabilmek için "Sunucuyu Yönet" yetkisine sahip olman gerek. Fakat sende yok? Hadi git bakem`)
  if (!args[0]) return message.channel.send(`:no_entry: Capslock Engel Böyle Çalışmıyor. \`u!capslock aç\` | veya \`u!capslock kapat\` Yazman Gerek`)
  if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send(`:no_entry: Capslock Engel Böyle Çalışmıyor. \`u!capslock aç\` | veya \`u!capslock kapat\` Yazman Gerek`)

    if (args[0] == 'aç') {
    db.set(`capslock_${message.guild.id}`, 'acik')
    let i = await db.get(`küfürT_${message.guild.id}`)
  message.channel.send(`<a:evet:819837666363310091> Artık Kimse Deli Gibi Büyük Harf Kullanamicam Çünkü Burada Bir **UMEF-EK** Var.`)   
    
  }

  if (args[0] == 'kapat') {
      
    db.delete(`capslock_${message.guild.id}`)
    
    message.channel.send(`<a:evet:819837666363310091> Artık Herkes Büyük Harf Kullanabilecek Çünkü Sistem Kapatıldı.`)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['capslockengel', "caps", "capslock"],
  permLevel: 0
};

exports.help = {
  name: 'capslock-engel',
  description: 'Capslock kullanımını engeller.',
  usage: 'capslock-engelleme'
};