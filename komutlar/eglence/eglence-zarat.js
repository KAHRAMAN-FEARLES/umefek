const Discord = require('discord.js')
const database = require('croxydb');
const db = require('croxydb');
exports.run = function(bot, message) {
    message.channel.send(new Discord.MessageEmbed()
    .setColor("BLUE")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!")
    .setTitle('🎲 Zarın: ' + narcoscode()));

    function narcoscode() {
        var rand = ['1', '2', '3', '4', '5', '6',' 7',' 9',' 8',' 10', ];

        return rand[Math.floor(Math.random()*rand.length)];
    }
}

 exports.conf = {
  enabled: true,  
  aliases: ['zar'],
  guildOnly: false,
  permLevel: 0
};

 exports.help = {
  name: 'zarat',
  description: 'Zar Atın',
  usage: ''
};