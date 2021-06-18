const { MessageReaction, User } = require("discord.js");

let db = require("quick.db");
let Discord = require("discord.js");
let { MessageEmbed } = require("discord.js");
module.exports = async (client, reaction, user) => {
  let message = reaction.message;
  let roleObject = db.fetch(`rolereactions_${message.guild.id}_${message.id}`);
  let emoji = reaction.emoji.toString();
  if (roleObject) {
    if (emoji === roleObject.emoji) {
      let member = message.guild.members.cache.get(user.id);
      let role = message.guild.roles.cache.get(roleObject.role);
      if (!member.roles.cache.has(role)) {
        try {
          member.roles.remove(role);

          member.send(
            `\`${reaction.message.guild.name}\` Sunucunda \`${role.name}\` Rolü Başarıyla Geri Alındı!`
          );
        } catch (e) {
          message.channel.send("Bir şeyler yanlış gitti " + e.message);
        }
      }
    }
  }
};
// youtube.com/c/EmirhanSarac