const Discord = require('discord.js');
const db = require("croxydb");
const database = require('croxydb');

 exports.run = (client, message, args) => {
   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.send(

     new Discord.MessageEmbed()

     .addField(`:x: Yazı yazman gerek. Kullanıcılar neyi oylicak? :x:`)
     .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
     .setColor("BLUE")).then(m => m.delete(5000));

     message.channel.send(

       new Discord.MessageEmbed()

       .setColor("BLUE")
       .setThumbnail(client.user.avatarURL())
       .setTimestamp()
       .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
       .addField(`**Oylama**`, `**${question}**`)).then(function(message) {

         message.react('✅');

         message.react('❌');

       });

     };

     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['oylama'],

  permLevel: 1
};

exports.help = {
  name: 'oylama',
  description: 'Oylama yapmanızı sağlar.',
  usage: 'oylama <oylamaismi>'
};
