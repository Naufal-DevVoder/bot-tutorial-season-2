const ms = require("ms");

exports.run = async (client, message, args) => {
  if (!message.member.permissions.any(["ADMINISTRATOR", "MANAGE_CHANNELS"])) {
    return message.channel.send("MAAF, Kamu Tidak Memiliki Akses !");
  }
  
  let channel = message.mentions.channels.first(),
      time = args.slice(1).join(" ");
  
  if (!channel) time = args.join(" "), channel = message.channel;
  // If the user doesn't includes the channel.
  
  if (message.flags[0] === "off") {
    channel.setRateLimitPerUser(0);
    return message.channel.send(`<#${channel.id}> Slowmode telah dinonaktifkan.`);
  }
  
  if (!time) return message.channel.send("Harap sertakan format waktu.");
  
  let convert = ms(time); // This will results the milliseconds.
  let toSecond = Math.floor(convert / 1000); // This will convert the ms to s. (seconds)
  
  if (!toSecond || toSecond == undefined) return message.channel.send("Tolong Sertakan Waktu Yang Benar !");
  
  if (toSecond > 21600) return message.channel.send("Timer should be less than or equal to 6 hours.");
  else if (toSecond < 1) return message.channel.send("Timer should be more than or equal to 1 second.");
  
  await channel.setRateLimitPerUser(toSecond);
  return message.channel.send(`Channel Ini: <#${channel.id}> Berhasil Di SlowMode Selama **${ms(ms(time), {long: true})}**.`);
}

exports.help = {
  name: "slowmode",
  description: "Slowing down the channel.",
  usage: "slowmode [channel] <time>",
  example: "slowmode #general 5s \nslowmode 5.25 hrs"
}

exports.conf = {
  aliases: ["slow"],
  cooldown: 10
}
