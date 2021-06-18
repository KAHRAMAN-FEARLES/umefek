const { MessageEmbed, MessageAttachment } = require("discord.js");
const get = require("request");
const database = require('croxydb');
const db = require('croxydb');
exports.run = async (client, msg, args) => {
  //'Vu4ll#1719
  let kullanıcı = msg.mentions.users.first()

  let r = args[1]

  if(!kullanıcı) {
    kullanıcı = msg.author;
    r = args[0]
  }


  if(!r) r = 1;
  if(isNaN(r)) return msg.channel.send("Yazdığın seviye rakam olmalı.")
  if(r > 10) return message.channel.send("10'dan büyük yazamazsın.")
  if (r == 0) {
    r = 1;
  }

  let link = `https://nekobot.xyz/api/imagegen?type=magik&image=${kullanıcı.avatarURL(
    { format: "png", size: 1024 }
  )}&intensity=${r}&raw=true`;

  get(link, async function(err, resp, body) {
    //'Vu4ll#1719
    body = JSON.parse(body);

    const ek = new MessageAttachment(body.message, `magik.png`);

    const embed = new MessageEmbed()
      .setTitle(`Efekt Hazır!`)
      .setDescription(`**Efekt Seviyesi: ${r}**`)
      .setColor(`BLUE`)
      .attachFiles(ek)
      .setImage(`attachment://magik.png`)
      .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
      .setTimestamp();

    msg.channel.send(embed);
  });
};
exports.conf = {
  //'Vu4ll#1719
  aliases: [],
  enabled: true,
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: "magik",
  description: "",
  usage: "magik <etiket>"
};