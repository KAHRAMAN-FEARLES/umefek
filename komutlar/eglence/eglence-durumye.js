const Discord = require("discord.js")
const database = require('croxydb');
const db = require('croxydb');
exports.run = async (client, message, args) => {
 
 
   
const resim = ['https://img.fanatik.com.tr/img/75/1200x695/5ea41a6666a97c63749ca6ab.jpg',
 
'https://media.tenor.com/view/adolfos-burrito-wrap-gif-12674473',
 
'https://media.tenor.com/images/7036173455c9298c7d9fcff3f22e8cc5/tenor.gif?itemid=10905029' ,
 
'https://media.tenor.com/images/a1cdb4184b35b26f8329bc28a01458c8/tenor.gif' ,
 
'https://media.tenor.com/images/3bb936c95e394449ca484e5df8992798/tenor.gif' ,
 
'https://media.tenor.com/images/735b5ec29e9df6ce75b7d08e36869950/tenor.gif'//'The Ghost#0799
 
]
 
const embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setImage(resim[Math.floor(Math.random() * resim.length)])
.setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
.setDescription(`Nam nam nam nam, güzelmiş. Afiyet olsun :)`)
 message.channel.send(embed)
};
exports.conf = {
    aliases: [],
    enabled: true,
    guildOnly: false,
    permLevel: 0
  };
  
  exports.help = {
    name: "dürüm",
    description: "",
    usage: ""
  };