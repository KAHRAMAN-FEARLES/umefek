const Discord = require("discord.js");
const database = require('croxydb');
var http = require("https");
const {
    JsonDatabase
} = require("wio.db");

const db = new JsonDatabase("myDatabase");

exports.run = async (client, message, args) => {
        var yazi = args[0];
        if (!yazi) return message.channel.send(new Discord.MessageEmbed().setColor("BLUE").setTitle("Bir şehir girin."));
        var yazi = yazi.toLowerCase();
        var options = {
          "method": "GET",
          "hostname": "api.collectapi.com",
          "port": null,
          "path": "/pray/all?data.city=" + yazi.toLowerCase(),
          "headers": {
            "content-type": "application/json",
            "authorization": "apikey 6YTKQ8hFYlv9muWs61VvpK:4C9eIhPnWMPApXq0QEl4K7"
          }
        };
    
        try {
    
          var req = http.request(options, function(res) {
            var chunks = [];
    
            res.on("data", function(chunk) {
              chunks.push(chunk);
            });
    
            res.on("end", function() {
              var body = Buffer.concat(chunks);
              let json = JSON.parse(body);
              if(!json.result) return message.channel.send(`Yanlış şehir ismi girdiniz.`);
              message.channel.send(new Discord.MessageEmbed()
              .setTitle(`İl: ${yazi}`)
              .addField("İmsak",json.result[0].saat, true)
              .addField("Güneş",json.result[1].saat, true)
              .addField("Öğle",json.result[2].saat, true)
              .addField("İkindi",json.result[3].saat, true)
              .addField("Akşam",json.result[4].saat, true)
              .addField("Yatsı",json.result[5].saat, true)
              .setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL())
              .setColor("BLUE"));
              });
              });
              }catch(err){
              return message.channel.send(`Yanlış şehir ismi girdiniz.`);
        }
    
        req.end();
    
    
    
      } 

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["namaz-vakitleri"],
    permLevel: 0
};

exports.help = {
    name: "namazvakitleri"
};