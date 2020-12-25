module.exports = async (client, member) => {
  const db = require("quick.db");
  const Discord = require("discord.js");
  
  if (member.user.bot) return;
  // If the user was a robot, return it.
  // Unless, you create a welcome/goodbye system. Put this under your welcome/goodbye system.
  
  let number = randomInteger(100000, 1000000);
  // The number will be shuffled from the range 100K - 1M
  
  let verifyChannel = member.guild.channels.cache.find(ch => ch.id === "792028238192312330");
  // Your Verification Text Channel.
  
  await db.set(`verification.${member.user.id}`, number);
  
  const dm = new Discord.MessageEmbed()
  .setColor(0x7289DA)
  .setTitle(`WELCOME TO ${member.guild.name} I Hope You Enjoy In The Server !`)
  .setDescription("Hello! Bro And Sis, Selamat Datang. Untuk Membuka Akses Channel, Silahkan Verify Terlebih Dahulu ! Makasih")
  .addField("Ambil Code Ini Dan Copy Paste Ke Channel Verify !.", `**Ini Code Kamu:** ${number}`)
  await member.send(dm).catch(() => {
    verifyChannel.send(`<@!${member.user.id}> Hey, Saya kira DM Anda terkunci. Bagaimana kalau Anda membukanya dulu dan mengetik \`resend\` here.`)
    .then(i => i.delete({timeout: 10000}));
  })
}

function randomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
