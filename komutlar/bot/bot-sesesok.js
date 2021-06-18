const Discord = require('discord.js');
const database = require('croxydb');
const db = require('croxydb');
exports.run = (client, message, args) => {

if(!args[0]) return message.channel.send("Bir kanal ID'si girmen gerek!")

if(!Number(args[0])) return message.channel.send("Kanal ID'leri rakamdan oluşmalıdır.")

        
message.channel.send(new Discord.MessageEmbed()
    .setDescription("**Sese girdim!**\n**Kanaldan çıkmam için aşağıdakini yapın:**")
    .setImage("https://cdn.discordapp.com/attachments/829292303230959616/835936535135649832/unknown.png")
    .setColor("BLUE")
    .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL()))
client.channels.cache.get(args[0]).join()



};
exports.conf = {
  enabled: true,
  guildOnly: true, //Bu sadece sunucularda kullanılabilir ayarıdır true yazarsanız dm de kullanamazsınız false yazarsanız kullanabilirsiniz
  aliases: ["sesegir","sese-sok","sesesok"] 
};

exports.help = {
  name: 'sese-gir',
  description: 'komut açıklama',
  usage: ''
};