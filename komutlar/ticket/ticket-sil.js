const Discord = require("discord.js");
const data = require("croxydb");

exports.run = async (client, message, args) => {
  const ad = await data.fetch(`numara.${message.channel.id}`);
  if (
    message.channel.name === `ticket-${ad}` ||
    message.channel.name === `kapatildi-${ad}`
  ) {
    const ann = await data.fetch(
      `asd.${message.guild.id}.${message.channel.id}.${message.author.id}`
    );
    if (!ann) return message.channel.send(`Bu ticket senin değil.`);
    message.delete();

    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(`Ticket 5 saniye sonra tamamen silinecek.`)
        .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
    );
    setTimeout(async () => {
      message.channel.delete();
      data.delete(
        `asd.${message.guild.id}.${message.channel.id}.${message.author.id}`
      );
    }, 5000);
  } else {
    return message.channel.send(`Bu komutu bir ticket kanalında kullanın.`);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ticket-sil"],
  permLevel: 0
};

exports.help = {
  name: "ticket-sil"
};
