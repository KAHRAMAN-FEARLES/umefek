 
const Discord = require("discord.js");
const data = require("croxydb");

exports.run = async (client, message, args) => {
  const ad = await data.fetch(`numara.${message.channel.id}`);
  if (!ad) {
    ad = "0";
  }

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
        .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
        .setDescription(`Ticket ${message.author} tarafından kapatıldı.`));
    message.channel.setName(`closed-${ad}`);
    message.channel
      .send(
        new Discord.MessageEmbed().setColor("BLUE")
        .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
          .setDescription(`:unlock:: Ticketi tekrar açar.\n:no_entry:: Ticketi siler.`)
      )
      .then(m => {
        m.react("🔓");
        m.react("⛔");
        let sil = (reaction, user) =>
          reaction.emoji.name === "⛔" &&
          user.id !== client.user.id &&
          user.id == message.author.id;
        let sill = m.createReactionCollector(sil, { time: 0 });
        let geri = (reaction, user) =>
          reaction.emoji.name === "🔓" &&
          user.id !== client.user.id &&
          user.id == message.author.id;
        let geriaç = m.createReactionCollector(geri, { time: 0 });

        geriaç.on("collect", async reaction => {
          const author = reaction.users.last();
          m.delete("500");
          reaction.remove(author.id);
          message.channel.send(
            new Discord.MessageEmbed()
              .setColor("BLUE")
              .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
              .setDescription(
                `Ticket ${message.author} tarafından tekrar açıldı.`
              )
          );
          message.channel.setName(`ticket-${ad}`);
        });

        sill.on("collect", async reaction => {
          const author = reaction.users.last();
          reaction.remove(author.id);
          message.channel.send(
            new Discord.MessageEmbed()
              .setColor("BLUE")
              .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
              .setDescription(`Ticket 5 saniye sonra tamamen silinecek.`)
          );
          setTimeout(async () => {
            message.channel.delete();
            data.delete(`asd.${message.guild.id}.${message.channel.id}`);
          }, 5000);
        });
      });
  } else {
    return message.channel.send(`Bu komutu bir ticket kanalında kullanın.`);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ticketkapat"],
  permLevel: 0
};

exports.help = {
  name: "ticket-kapat"
};
