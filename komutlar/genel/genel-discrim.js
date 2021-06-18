const Discord = require('discord.js');
const fs = require('fs');
const database = require('croxydb');
const db = require('croxydb');
exports.run = async (client, msg, args) => {
  if(args.length > 4) return msg.channel.send(new Discord.MessageEmbed().setTitle('Discrimler 4 Basamaklı Olur').setColor("BULE").setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL()))
      const discrim = args[0] || msg.author.discriminator;
        const users = client.users.cache.filter(user => user.discriminator === discrim).map(user => user.tag);
        if (users < 1) {
            if(isNaN(args[0])) return  msg.channel.send(new Discord.MessageEmbed().setDescription(`Yazı Yazamazsın!`).setColor("BLUE").setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL()));
            return msg.channel.send(new Discord.MessageEmbed().setDescription(`${discrim} Bulunamadı!`).setColor("BLUE").setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL()));
          
        } else {
           msg.channel.send(`KULLANICI: ${users.join('\nKULLANICI: ')}`, {split: true, code: "yaml"})       
}
}

    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0,
    };
      
    exports.help = {
        name: 'discrim',
        description: '',
        usage: 'discrim',
    
    };//NONAME.JS