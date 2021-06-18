const Discord = require('discord.js')
const database = require('croxydb');
const db = require('croxydb');
const lyricsFinder = require('lyrics-finder');
exports.run = async(client, message, args) => {

    (async function(artist, title) {
        let lyrics = await lyricsFinder(artist, title) || "Lütfen Şarkının Adını Doğru Bir Şekilde Yazın! Daha Kapsamlı Arama İçin Sanatçının Adını Girebilirsiniz.";
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`${args.slice(0).join(" ")} Şarkı Sözleri`)
        .setDescription(lyrics)
        .setColor('BLUE'));
        if(lyrics.length > 2000) return message.channel.send('Yazdığınız Şarkının Sözleri 2000 Karakterden Fazla Olduğu İçin Gönderemedim :(')
    })(args.slice(0).join(" "));
    }
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['şarkı-sözü'], 
permLevel: 0
};
exports.help = {
name: 'şarkısözü',
description: 'Girdiğiniz şarkının sözlerini atar',
usage: 'şarkısözü'
};