const Discord = require('discord.js');
const database = require('croxydb');
const db = require('croxydb');
exports.run = async (client, message, args)=> {
//let us = message.guild.members.cache.find(u => args.slice(0).join(' ').includes(u.username))
let muser = message.mentions.users.first();
let userid;
if(isNaN(args[0])){
  if(!muser){
    userid = message.author.id;
  }else{
    userid = muser.id;
  }
}else{
  userid = args[0];
}
try{
let user = await client.users.fetch(userid);
let avatar = user.displayAvatarURL({dynamic: true, size: 1024})
if(avatar.endsWith(".gif?size=1024")) {

let embed = new Discord.MessageEmbed()
.setAuthor(user.tag + '', user.displayAvatarURL())
.setDescription(`**[[PNG]](${user.displayAvatarURL({ format: 'png', size: 1024 })})** | **[[JPEG]](${user.displayAvatarURL({ format: 'jpeg', size: 1024 })})** | **[[GIF]](${user.displayAvatarURL({ format: 'gif', size: 1024 })})** | **[[WEBP]](${user.displayAvatarURL({ format: 'webp', size: 1024 })})**`)
.setImage(user.displayAvatarURL({dynamic: true, size: 1024}))
.setColor("BLUE")
message.channel.send(embed)

} else {

  let embed = new Discord.MessageEmbed()
.setAuthor(user.tag + '', user.displayAvatarURL())
.setDescription(`**[[PNG]](${user.displayAvatarURL({ format: 'png',  size: 1024 })})** | **[[JPEG]](${user.displayAvatarURL({ format: 'jpeg',  size: 1024 })})** | **~~[GIF]~~** | **[[WEBP]](${user.displayAvatarURL({ format: 'webp',  size: 1024 })})**`)
.setImage(user.displayAvatarURL({dynamic: true, size: 1024}))
.setColor("BLUE")
.setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
message.channel.send(embed)

}
}catch{
  message.channel.send(new Discord.MessageEmbed().setColor("BLUE").setDescription("Kullanıcıyı Bulamadım!"));
  return;
}

}

 exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['pp'],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: '',
  usage: 'avatar [@kullanıcı]'
};