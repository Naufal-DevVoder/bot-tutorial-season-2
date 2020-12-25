const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  // You can make a single array to detect the user permissions.
  if (!message.member.hasPermission(["MANAGE_GUILD", "ADMINISTRATOR"])) {
    return message.channel.send({embed: {color: "RANDOM", description: "You can't use this command!"}})
  }
  
  let user = message.mentions.users.first(); // You can mention someone, not only just user.
  if (!user) return message.channel.send({embed: {color: "RANDOM", description: "Kamu Harus Mention Orangnya Dulu !"}});
  
  let nick = args.slice(1).join(" ");
  if (!nick) return message.channel.send({embed: {color: "RANDOM", description: "Kamu Harus Ketik Nama Orangnya Dulu !"}});
  
  let member = message.guild.members.cache.get(user.id);
  
  await member.setNickname(nick).catch(err => message.channel.send({embed: {color: "RANDOM", description: `Error: ${err}`}}));
  return message.channel.send({embed: {color: "BLUE", description: `Berhasil Mengganti **${user.tag}** Menjadi **${nick}**`}});
}

exports.help = {
  name: "setnickname",
  description: "Set a user nickname.",
  usage: "c/setnickname <@user> <nick>",
  example: "c/setnickname @NaufaL-Kun#5555 Handsome"
}

exports.conf = {
  aliases: ["setnick"],
  cooldown: 20
}
