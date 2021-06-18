const egehanss = require('discord.js');
const database = require('croxydb');
const db = require('croxydb');
exports.run = async (client, message, args) => {
  let kişi = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('Lütfen Birisini Etiketle')
    let yazi = args.slice(1).join(' ');
    if (!yazi) return message.reply('Lütfen Yazını Yaz')

    if (yazi.includes("@everyone")) return message.channel.send(`${message.author} Akıllısın. Ama ben senden akıllıyım :) Maalesef bu komutla everyone çekemezsin.`).then(a => a.delete({timeout: 4500}));
  if (yazi.includes("@here")) return message.channel.send(`${message.author} Akıllısın. Ama ben senden akıllıyım :) Maalesef bu komutla here çekemezsin.`).then(a => a.delete({timeout: 4500}));
    message.delete()
    const webhook = await message.channel.createWebhook(kişi.username, {
        reason: "Fake Mesaj",
        avatar: kişi.avatarURL({dynamic: true})
    })
    
    webhook.send(yazi)

    setTimeout(() => {
        webhook.delete()
      }, 500);
    
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["fake-mesaj"],
    permLevel: 0
};

exports.help = {
    name: 'fakemesaj',
    description: 'fakemesaj',
    usage: 'fakemesaj'
};