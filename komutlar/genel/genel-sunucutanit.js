const Discord = require('discord.js')
const fs = require('fs');
const ms = require("ms")
const database = require('croxydb');
const db = require('croxydb');
exports.run = async (client, message, args) => {
  	if (!message.guild) return;
//    if(message.author.id !== message.guild.owner.id) return message.channel.send("Bu komutu kullanmanız için Sunucu Sahibi olmalısınız.")
    let kullanildii = JSON.parse(fs.readFileSync('./sunucutanıt.json', 'utf8'));
  if (!kullanildii[message.guild.id]) kullanildii[message.guild.id] = {
    gunlukkullanim: 0
  }
  if (kullanildii[message.guild.id].gunlukkullanim == 0)
  {
        const embed = new Discord.MessageEmbed()
  .setTitle('BAŞARILI')
  .setDescription('Sunucu [Burada](https://discord.gg/f6UAvPTnf4) Tanıtıldı! \n\n 12 Saat Sonra Sunucunuzu Tekrardan Tanıtabilirsiniz. \n\n Sunucunu Tanıtabilmek İçin Beni [Ekle!](https://www.umefek.tk)')
  .setColor("BLUE")
  .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
 message.channel.send(embed);
    message.channel.createInvite({maxAge: 0}).then((invite) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor("Bir Sunucu Tanıtıldı!")
            .addField(` Sunucu Sahibi`, message.guild.owner.user.tag, true)
            .addField(` Sunucu İsmi`, message.guild.name, true)
      .addField(` Sunucu Davet Linki`, `[Tıkla!](${invite.url})`, true)
        .setThumbnail(`${message.guild.iconURL({dynamic: true})}`)
        .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
            .setColor("BLUE")
//      .setThumbnail(message.guild.iconURL)
       client.channels.cache.get('797583587754901524').send(embed)
            });
  kullanildii[message.guild.id].gunlukkullanim = 1
    
  fs.writeFile('./sunucutanıt.json', JSON.stringify(kullanildii), (err) => {
      if (err) console.error(err)
    })
  return
  }
  setTimeout(async() => {
    kullanildii[message.guild.id].gunlukkullanim = 0
    fs.writeFile('./sunucutanıt.json', JSON.stringify(kullanildii), (err) => {
      if (err) console.error(err)
    })
  }, ms('12h'));
  
  if (kullanildii[message.guild.id].gunlukkullanim == 1)
  {
  message.channel.send({embed: {
      description: '**BAŞARISIZ TANITIM!** \n\nBu komut zaten kullanılmış!\n\nSunucunu 12 saate 1 defa tanıtabilirsin!',
      color: "BLUE",
      footer: "UMEF-EK / Discord'da Yeni Devrim!"
            }});
  }
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['sunucu-tanıt'],
    permLevel: 4,
}
exports.help = {
    name: 'sunucutanıt',
    description: 'Sunuzunuzu Tanıtmak İçin En Uygun Kod!',
    usage: 'sunucutanıt'
}//sunucutanıt.json oluşturup içine {} yazın.