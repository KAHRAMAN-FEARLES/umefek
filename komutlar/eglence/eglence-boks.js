const Discord = require('discord.js');
const database = require('croxydb');
const db = require('croxydb');
exports.run = (client, message, args) => {
  
 var boksmakinesi = ['Boks Makinesi Sonucu ・ **3000 Boks Makinesi Kırıldı, Bana Boks Makinesi Borçlusun!**', 
                 'Boks Makinesi Sonucu ・ **100 Kanka Bune Çok Yavaş Vurdun.**', 
                 'Boks Makinesi Sonucu ・ **900 Eh İşte Ne Diyelim? **', 
                 'Boks Makinesi Sonucu ・ **1000 İyimiş.**',
                 'Boks Makinesi Sonucu ・ **50 Bune Bee Çooook Yavaş...**', 
                 'Boks Makinesi Sonucu ・ **2000 Mi? Çok İyi!**', 
                 'Boks Makinesi Sonucu ・ **700 Daha İyisini Yaparsın.**',
                 'Boks Makinesi Sonucu ・ **500 Yeaaanii Daha İyisini Yapabilirsin Sen.**', 
                 'Boks Makinesi Sonucu ・ **999 Nasıl Bir Şeysin Sen 1 Puan Beee!**', 
                 'Boks Makinesi Sonucu ・ **1100 Bilemedim, İyinin Bir Üstü.**', 
                 'Boks Makinesi Sonucu ・ **1200 Güzel Güzel Böyle Devamke!** ',
                 'Boks Makinesi Sonucu ・ **1 Hiç Vurmasaydın Be Kardeşim?**'
                ];
 var cevap = boksmakinesi[Math.floor(Math.random() * boksmakinesi.length)];
  
 const egehanss = new Discord.MessageEmbed()
 .setColor(`BLUE`)
 .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
 .setDescription(":boxing_glove: " + cevap)
 .setImage('https://media.giphy.com/media/Rl4yxxVEvUge8b5mkW/giphy.gif')
message.channel.send(egehanss)
  
  
};

exports.conf = {
   aliases: ['boksmakinesi']
 };

 exports.help = {
   name: 'boks',
   description: 'egehanss'
 }