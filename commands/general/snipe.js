const Discord = require('discord.js'),
      db = require("quick.db");

exports.run = async (client, message, args) => {
  let data = db.get(`snipe.${message.guild.id}`);
  if (!data) return message.channel.send("I don't see any stored deleted message here.");
  
  let content = data.content,
      user = data.user,
      channel = data.channel;
  
  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTimestamp()
  .setTitle("Sniped Message")
  .setDescription(`I got a deleted message from **${user}** in **<#${channel}>** \n> ${content}`)
  message.channel.send(embed);
}

exports.help = {
  name: "snipe",
  description: "Shows the last deleted message.",
  usage: "c/snipe",
  example: "/snipe"
};

exports.conf = {
  aliases: [],
  cooldown: 10
}
