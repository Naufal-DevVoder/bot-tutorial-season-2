const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  message.channel.send("**Selamat Anda Mendapatkan Pukulan Dari John Chena !");
}

exports.help = {
  name: "ping",
  description: "Ponged!",
  usage: "c/ping",
  example: "/ping"
};

exports.conf = {
  aliases: ["beep"],
  cooldown: 5 // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
}
