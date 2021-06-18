const Discord = require("discord.js");
exports.run = (client, message, args) => {

  let tag = args[0];
  
  if (!tag) return message.channel.send('Kullanım: u!sohbet aç/kapat')
  
  if(args[0] === "kapat") {
  message.channel.send("Sohbet kanalı **Yazılamaz** durumuna getirildi. <a:evet:819837666363310091>");
    let every = message.guild.roles.cache.find(r => r.name === "@everyone");
 message.channel.createOverwrite(every, {
    SEND_MESSAGES: false
  });
  }
    
  if(args[0] === "aç") {
    let everyy = message.guild.roles.cache.find(r => r.name === "@everyone");
    message.channel.send("Sohbet kanalı **Yazılabilir** durumuna getirildi. <a:evet:819837666363310091>");
 message.channel.createOverwrite(everyy, {
    SEND_MESSAGES: true
  });
  }
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: "sohbet",
  description: "Sohbetinizi kapatmaya-açmaya yarar.",
  usage: "sohbet aç/kapat"
};