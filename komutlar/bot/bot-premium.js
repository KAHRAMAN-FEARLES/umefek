const Discord = require('discord.js');
const database = require('croxydb');
const db = require('croxydb');
const ms = require('ms');
const moment = require('moment');
moment.locale('tr');
require('moment-duration-format');

exports.run = async (client, message, args) => {//NarcosCode
  let KomutKullanıcı = "797051134187405323" || "755384903297663086" //Premium üyelik verecek kişinin ID'sini girin. 
  
  let argümanlar = ['ver', 'süreli', 'al', 'kod-al', 'kara-liste', 'kontrol'];
  if (!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor("BLUE").setAuthor("Premium Sistemi Komutlar").addField("u!premium ver <KullanıcıID>", "ID'si girilen kullanıcıya sınırsız premium üyelik verir.").addField("u!premium al <KullanıcıID>", "ID'si girilen kullanıcının sınırsız premium üyeliğini alır.").addField("u!premium süreli ver <KullanıcıID> <Süre>", "ID'si girilen kullanıcıya yazılmış olan süre boyunca premium üyelik verir.").addField("u!premium süreli al <KullanıcıID> <Süre>", "ID'si girilen kullanıcıya yazılmış olan süre boyunca olan premium üyeliği alır.").addField("u!premium kontrol", "Premium üyeliğinizi kontrol edersiniz. Sınırsız ise sınırsız yazar, üyeliğiniz süreli ise bitecek olan süreyi gösterir.").setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL()));
  if (!argümanlar.includes(args[0].toLowerCase())) return message.channel.send('Geçersiz argüman girdin.\nBu komut için geçerli argümanlar: ' + argümanlar.join(', ')).then(m => m.delete({ timeout: 5000 }));
  
  let kanal = "797852663046996048"

  if (args[0].toLowerCase() === 'ver') {
    if(message.author.id !== KomutKullanıcı) return message.channel.send("Bu Komutu Kullanamazsın!")
    let Kullanıcı = args[1]
    if (!args[1]) return message.channel.send(`${message.author} Premium vereceğin kullanıcı ID'si girmelisin.`).then(m => m.delete({ timeout: 5000 }));
    if (!Number(args[1])) return message.channel.send(`${message.author} Kullanıcı ID'leri sayı ile yazılmalı.`).then(m => m.delete({ timeout: 5000 }));
    if (database.has(`Premium.${Kullanıcı}`)) return message.channel.send(`${message.author} Bu kullanıcının premiumu zaten var.`).then(m => m.delete({ timeout: 5000 }));
    database.set(`Premium.${Kullanıcı}`, true)
    return message.channel.send(new Discord.MessageEmbed().setDescription(`<@!${Kullanıcı}> Kullanıcısına premium üyelik başarıyla verildi.`).setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL()).setColor("BLUE")).then(m => m.delete({ timeout: 5000 }));
    return client.channels.cache.get(kanal).send(new Discord.MessageEmbed().setDescription(`<@!${Kullanıcı}> Kullanıcısına premium üyelik <@${message.author.id}> verildi.`))
  }

  if (args[0].toLowerCase() === 'süreli') {
    if(message.author.id !== KomutKullanıcı) return message.channel.send("Bu Komutu Kullanamazsın!")
    if (args[1].toLowerCase() === 'ver') {
      let Argümanlar = ['saniye', 'dakika', 'saat', 'gün'];
      let Kullanıcı = args[2]
      if (!args[2]) return message.channel.send(`${message.author} Premium vereceğin kullanıcı ID'si girmelisin.`).then(m => m.delete({ timeout: 5000 }));
      if (!Number(args[2])) return message.channel.send(`${message.author} Kullanıcı ID'leri sayı ile yazılmalı.`).then(m => m.delete({ timeout: 5000 }));
      if (!args[3]) return message.channel.send(`${message.auhtor} Geçerli bir zaman belirtmelisin. \nÖrnek: u!premium süreli-ver ${Kullanıcı} 5 gün`).then(m => m.delete({ timeout: 5000 }));
      if (!args[4]) return message.channel.send(`${message.author} Geçerli bir zaman belirtmelisin. Mevcut olan zamanlar: saniye, dakika, saat, gün`).then(m => m.delete({ timeout: 5000 }));
      if (!Argümanlar.includes(args[4])) return message.channel.send(`${message.author} ${args[4]} Adında bir zaman yok geçerli zaman belirtmelisin. Mevcut olan zamanlar: saniye, dakika, saat, gün`).then(m => m.delete({ timeout: 5000 }));
      let BitişSüresiHesaplayıcı = Date.now() + ms(args[3] + ' ' + args[4].replace('dakika', 'minutes').replace('saat', 'hours').replace('saniye', 'seconds').replace('gün', 'day'))
      database.set(Kullanıcı, {
        Bitiş: BitişSüresiHesaplayıcı,
        Başlangıç: Date.now()
      });
      message.channel.send(`<@!${Kullanıcı}> Adlı kişiye ${args[3]} ${args[4]} boyunca premium üyelik verildi. \nKullanıcının premium bitiş tarihi: ${moment(BitişSüresiHesaplayıcı).format('DD.MM.YYYY - HH:mm:ss')}`).then(m => m.delete({ timeout: 5000 }));
      client.channels.cache.get(kanal).send(`<@!${Kullanıcı}> Adlı kişiye ${args[3]} ${args[4]} boyunca <@${message.author.id}> tarafından premium üyelik verildi. \nKullanıcının premium bitiş tarihi: ${moment(BitişSüresiHesaplayıcı).format('DD.MM.YYYY - HH:mm:ss')}`)
      setTimeout(() => {
        database.delete(Kullanıcı)
      }, ms(args[3] + ' ' + args[4].replace('dakika', 'minutes').replace('saat', 'hours').replace('saniye', 'seconds').replace('gün', 'day')));
    }
    if (args[1].toLowerCase() === 'al') {
      if(message.author.id !== KomutKullanıcı) return message.channel.send("Bu Komutu Kullanamazsın!")
      let Kullanıcı = args[2]
      if (!args[2]) return message.channel.send(`${message.author} Süreli premium üyeliği alacağın kullanıcı ID'si girmelisin.`).then(m => m.delete({ timeout: 5000 }));
      if (!Number(args[2])) return message.channel.send(`${message.author} Kullanıcı ID'leri sayı ile yazılmalı.`).then(m => m.delete({ timeout: 5000 }));
      if (!database.has(Kullanıcı)) return message.channel.send(`${message.author} Bu kullanıcıda premium yok.`).then(m => m.delete({ timeout: 5000 }));
      database.delete(Kullanıcı)
      return message.channel.send(new Discord.MessageEmbed().setDescription(`<@!${Kullanıcı}> Kullanıcısından premium üyelik alındı.`).setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL()).setColor("BLUE")).then(m => m.delete({ timeout: 5000 }));
      client.channels.cache.get(kanal).send(`<@!${Kullanıcı}> Kullanıcısından premium üyelik <@${message.author.id}> tarınfdan alındı.`)

    }
  }

  if (args[0].toLowerCase() === 'al') {
    if(message.author.id !== KomutKullanıcı) return message.channel.send("Bu Komutu Kullanamazsın!")
    let Kullanıcı = args[1]
    if (!args[1]) return message.channel.send(`${message.author} Premium üyeliği alacağın kullanıcı ID'si girmelisin.`).then(m => m.delete({ timeout: 5000 }));
    if (!Number(args[1])) return message.channel.send(`${message.author} Kullanıcı ID'leri sayı ile yazılmalı.`).then(m => m.delete({ timeout: 5000 }));
    if (!database.has(`Premium.${Kullanıcı}`)) return message.channel.send(`${message.author} Bu kullanıcıda premium yok.`).then(m => m.delete({ timeout: 5000 }));
    database.delete(`Premium.${Kullanıcı}`)
    return message.channel.send(new Discord.MessageEmbed().setDescription(`<@!${Kullanıcı}> Kullanıcısından premium üyelik başarıyla alındı.`).setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL()).setColor("BLUE")).then(m => m.delete({ timeout: 5000 }));
client.channels.cache.get(kanal).send(`<@!${Kullanıcı}> Kullanıcısından premium üyelik <@${message.author.id}> tarafından alındı.`)
    
    
  }

  if (args[0].toLowerCase() === 'kontrol') {
    if (database.has(message.author.id)) {
      const Embed = new Discord.MessageEmbed()
      .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
      .setColor("BLUE")
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
        .setDescription(`Süreli premium üyeliğine sahipsiniz. Premium özelliklerine erişiminiz ${moment.duration(database.fetch(message.author.id).Bitiş - Date.now()).format('w [hafta] d [gün] h [saat] m [dakika] s [saniye]')} sonra kapancak.`)
        .setThumbnail(message.author.avatarURL({ dynamic: true, size: 1024 }))
      return message.channel.send(Embed).then(m => m.delete({ timeout: 5000 }));
    }
    if (database.has(`Premium.${message.author.id}`)) {
      const Embed = new Discord.MessageEmbed()
      .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
      .setColor("BLUE")
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
        .setDescription(`Sınırsız premium erişiminiz var.`)
        .setThumbnail(message.author.avatarURL({ dynamic: true, size: 1024 }))
      return message.channel.send(Embed)
    } else {
      message.channel.send(`${message.author} Premium üyeliğin yok.`).then(m => m.delete({ timeout: 5000 }));
    }
  }

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'premium'
};