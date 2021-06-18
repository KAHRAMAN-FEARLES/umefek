const { MessageReaction, User } = require("discord.js");

let db = require("quick.db");
let Discord = require("discord.js");
let { MessageEmbed } = require("discord.js");
module.exports = async (client, reaction1, user) => {
  let message = reaction1.message;
  let member = message.guild.members.cache.get(user.id);
  let roleObject = db.fetch(`rolereactions_${message.guild.id}_${message.id}`);
  let starObject = db.fetch(`starboard_${message.guild.id}`);
  let emoji = reaction1.emoji.toString();
  if (roleObject) {
    if (emoji === roleObject.emoji) {
      let role = message.guild.roles.cache.get(roleObject.role);
      if (!member.roles.cache.has(role)) {
        try {
          member.roles.add(role);

          member.send(
            `\`${reaction1.message.guild.name}\` Sunucusunda \`${role.name}\` Rolü Başarıyla Verildi!`
          );
        } catch (e) {
          message.channel.send("Bir şeyler yanlış gitti " + e.message);
        }
      }
    }
  }
};
// youtube.com/c/EmirhanSarac