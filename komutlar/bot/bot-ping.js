const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  
  message.channel.send(`https://dummyimage.com/500x300/36393f/ffffff.png&text=${client.ws.ping}`)
  

  
 
};
exports.conf = {
  enabled: true,
  guildOnly: true, //Bu sadece sunucularda kullanılabilir ayarıdır true yazarsanız dm de kullanamazsınız false yazarsanız kullanabilirsiniz
  aliases: [] 
};

exports.help = {
  name: 'ping',
  description: 'Botum pingini görürsünüz.',
  usage: ''
};