const Discord = require("discord.js");
const database = require('croxydb');
const db = require('croxydb');
const get = require("request")
exports.run = async (client, message, args) => {
let soru = args.join(' ');
if(!soru) return message.reply('Birşeyler yazman gerek yoksa bot cevap veremez.')
let encodedsoru = encodeURI(soru)
get(`https://api.codare.fun/sor/${encodedsoru}`, async function (err, resp, body) { 
body = JSON.parse(body); 
if(err) return message.channel.send('hata oluştu')
message.channel.send(body.cevap)
    }) 
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["konuş"],
  permLevel: 0
};

exports.help = {
  name: "botla-konuş",
  description: "bota soru sorarsınız",
  usage: "sor"
};