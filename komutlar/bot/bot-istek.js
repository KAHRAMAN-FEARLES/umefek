const Discord = require('discord.js')
const fs = require('fs');
const ms = require("ms")
const database = require('croxydb');
const db = require('croxydb');
exports.run = async (client, message, args) => {
  
let istek = args.slice(0).join(' ');
  
if(!istek) return message.channel.send("İsteğini belirtmelisin!")
  
    let kullanildii = JSON.parse(fs.readFileSync('./istekkod.json', 'utf8'));
  if (!kullanildii[message.guild.id]) kullanildii[message.guild.id] = {
    gunlukkullanim: 0
  }
  if (kullanildii[message.guild.id].gunlukkullanim == 0)
  {
        const embed = new Discord.MessageEmbed()
  .setTitle('BAŞARILI')
  .setDescription('İsteğin [Burada](https://discord.gg/f6UAvPTnf4) Paylaşıldı! \n\n 1 Saat Sonra İsteğinizi Tekrar Atabilirsiniz.')
  .setColor("BLUE")
  .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
 message.channel.send(embed);
    message.channel.createInvite({maxAge: 0}).then((invite) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor("Bir İstek Paylaşıldı!")
            .addField(`İsteyen`, message.author.tag, true)
      .addField(`İsteği`, `${istek}`, true)
        .setThumbnail(`${message.author.avatarURL({dynamic: true})}`)
            .setColor("BLUE")
//      .setThumbnail(message.guild.iconURL)
       client.channels.cache.get('786562524627599382').send(embed)
            });
  kullanildii[message.guild.id].gunlukkullanim = 1
    
  fs.writeFile('./istekkod.json', JSON.stringify(kullanildii), (err) => {
      if (err) console.error(err)
    })
  return
  }
  setTimeout(async() => {
    kullanildii[message.guild.id].gunlukkullanim = 0
    fs.writeFile('./istekkod.json', JSON.stringify(kullanildii), (err) => {
      if (err) console.error(err)
    })
  }, ms('1h'));
  
  if (kullanildii[message.guild.id].gunlukkullanim == 1)
  {
  message.channel.send({embed: {
      description: '**BAŞARISIZ!** \n\nBu komut zaten kullanılmış!\n\nİsteğini saate 1 defa atabilirsin!',
      color: "BLUE",
      footer: "UMEF-EK / Discord'da Yeni Devrim!"
            }});
  }
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0,
}
exports.help = {
    name: 'istek',
    description: 'Sunuzunuzu Tanıtmak İçin En Uygun Kod!',
    usage: 'sunucutanıt'
}//sunucutanıt.json oluşturup içine {} yazın.