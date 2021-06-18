const Discord = require('discord.js');
const db = require("croxydb");
const database = require('croxydb');


exports.run = async(client, message, args) => {

  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(` Bu komudu kullanabilmek için "Sunucuyu Yönet" yetkisine sahip olman gerek. Fakat sende yok? Hadi git bakem`)
  if (!args[0]) return message.channel.send(`:no_entry: Küfür Engel Böyle Çalışmıyor. \`u!küfür-engel aç\` | veya \`u!küfür-engel kapat\` Yazman Gerek`)
  if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send(`:no_entry: Küfür Engel Böyle Çalışmıyor. \`u!küfür-engel aç\` | veya \`u!küfür-engel kapat\` Yazman Gerek`)

    if (args[0] == 'aç') {
    db.set(`küfürT_${message.guild.id}`, 'acik')
    let i = await db.get(`küfürT_${message.guild.id}`)
  message.channel.send(`<a:evet:819837666363310091> Artık Kimse Küfür Edemeyecek Çünkü Burada Bir **UMEF-EK** Var.`)   
    
  }

  if (args[0] == 'kapat') {
      
    db.delete(`küfürT_${message.guild.id}`)
    
    message.channel.send(`<a:evet:819837666363310091> Artık Herkes Küfür Edebilecek Çünkü Sistem Kapatıldı.`)
  }
 
};


exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['küfür', 'küfürengel'],
 permLevel: 0
};

exports.help = {
 name: 'küfür-engel',
 description: 'küfür engelleyici',
 usage: 'küfür-engel'
};