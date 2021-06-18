const Discord = require("discord.js");
const db = require("croxydb");
const database = require('croxydb');

exports.run = (client, message) => {
  
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')

const onayembed = new Discord.MessageEmbed()
.setColor("BLUE")
.setTimestamp()
.setAuthor("Nuke İşlemi Başlatılıyor...")

.setDescription(
  "**ÖNEMLİ!** \n\nEğer işlemi onaylarsanız bu kanal tamamen **silinecek**,\n**asla geri getirilemeyecek ve Discord uzay boşluğunda kaybolacak!**\nAncak bu kanalın **kopyası oluşturulacaktır!** \n\nOnaylamak için 👍 emojisine, iptal etmek içinse 👎 emojisine tıklayın."
)
.setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL());
message.channel.send(onayembed).then(msg => {
msg.react("👍").then(() => msg.react("👎"));

const filter = (reaction, user) => {
  return (
    ["👍", "👎"].includes(reaction.emoji.name) &&
    user.id === message.author.id
  );
};

msg
  .awaitReactions(filter, { max: 1, time: 60000, errors: ["time"] })
  .then(collected => {
    const reaction = collected.first();

    if (reaction.emoji.name === "👍") {
      message.channel.clone({ position: message.channel.position });
      message.channel.delete();
    } else {
      message.reply("İşlem iptal edildi! Bu kanal Discord uzay boşluğuna gitmeyecek.");
      msg.delete({ timeout: 3000 });
    }
  })
  .catch(collected => {
    message.reply(
      "Bir hata oluştur. Bibubib"
    );
  });
});
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'nuke',
    description: 'Acaba Kazanabilecek Misin?',
    usage: 'piyango'
  };