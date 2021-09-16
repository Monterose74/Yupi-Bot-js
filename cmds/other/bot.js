const { Client, MessageEmbed, GuildMember } = require('discord.js');
const client = new Client();
const fs = require('fs');

module.exports.run = async(client, message, args) => {
  const createbot = client.user.createdTimestamp
  const embed = new MessageEmbed()
  .setTitle('Информация о боте')
  .setColor('#42f59e')
  .setAuthor(message.author.username, message.author.avatarURL())
    .setDescription(`> <:profile:871665900024102912> •** Участников**: ${client.users.cache.size}\n> <:programmer:871665899873140757> •** Серверов**: ${client.guilds.cache.size}\n> <:codes:871665899906662400> •** Комманд**: 42\n\n**Ссылки**\n:book: • Пригласить бота: [Пригласить](https://discord.com/api/oauth2/authorize?client_id=886312469188976651&permissions=8&scope=bot)\n🔖 • Discord Group: [Дискорд]( https://discord.gg/gKrDjgkkrX)`)
  .setFooter(`${client.user.tag} \n Был создан`, 'https://cdn.discordapp.com/avatars/871668247055982602/0a69ce8b042acb6511ec1df12d12a4a1.webp?size=4096')
  .setTimestamp(createbot);
  message.channel.send(embed)
}
