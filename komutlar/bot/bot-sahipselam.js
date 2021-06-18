
const Discord = require('discord.js');
const database = require('croxydb');
const db = require('croxydb');

exports.run = async(client, message, args) => {

  if (message.author.id !== "797051134187405323") return message.channel.send(` Bu komudu kullanabilmek için sahibim olman gerek. Fakat sende sahibim değilsin? Hadi git bakem. Yandan yandan gidinız...`)
  if (!args[0]) return message.channel.send(`:no_entry: Doğru Kullanmadınız. \`u!sahip-selam aç\` | veya \`u!sahip-selam kapat\` Yazman Gerek`)
  if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send(`:no_entry: Doğru Kullanmadınız. \`u!sahip-selam aç\` | veya \`u!sahip-selam kapat\` Yazman Gerek`)

    if (args[0] == 'aç') {
    db.set(`sahipmesaj_${message.guild.id}`, 'acik')
    let i = await db.get(`sahipmesaj_${message.guild.id}`)
  message.channel.send(`Artık Botun Sahibi Bir Mesaj Yazınca Anına Karşılık Vereceğim.`)   
    
  }

  if (args[0] == 'kapat') {
      
    db.delete(`sahipmesaj_${message.guild.id}`)
    
    message.channel.send(`Artık Botun Sahibi Bir Mesaj Yazınca Anına Karşılık Vermeyeceğim.`)
  }
 
};


exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['sahipselam'],
 permLevel: 0
};

exports.help = {
 name: 'sahip-selam',
 description: 'Narcos Code - Sahip Selam Kodu',
 usage: 'sahip-selam aç/kapat'
};