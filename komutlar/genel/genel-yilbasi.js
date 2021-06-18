//const ayarlar = require('../config.json');
const Discord = require("discord.js")
const database = require('croxydb');
const db = require('croxydb');
exports.run = async (client, message, args) => {
    function sayac(endtime){
        var t = Date.parse(endtime) - Date.parse(new Date());
        var saniye = Math.floor( (t/1000) % 60 );
        var dakika = Math.floor( (t/1000/60) % 60 );
        var saat = Math.floor( (t/(1000*60*60)) % 24 );
        var gun = Math.floor( t/(1000*60*60*24) );
        return {'toplam': t,'gun': gun, 'saat': saat, 'dakika': dakika, 'saniye': saniye };
      };    
      
    var gn = new Date();
    var son = 'January 1 ' + (gn.getFullYear() + 1) + " 00:00:00";
    if (gn.getMonth() == 0 && gn.getDate() == 1) {
        son = 'January 1 ' + (gn.getFullYear()) + " 00:00:00";
    };
        var t = sayac(son);
        message.channel.send(`**Yılbaşına Kalan Süre**\n**Gün: ${t.gun}**\n**Saat: ${t.saat}**\n**Dakika: ${t.dakika}**\n**Saniye: ${t.saniye}**`)
        if(t.total<=0){
            message.channel.send(new Discord.MessageEmbed().setDescription(`**YENİ YILIMIZ KUTLU OLSUN!!!**`).setColor("BLUE").setTitle("Hoşgeldin 2022!!").setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())) 
        }

};

  
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
name:"yılbaşı",
usage:"yılbaşı",
description:""
}