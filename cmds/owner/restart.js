const { Client, MessageEmbed, GuildMember } = require('discord.js');
const config = require('../../config.json')

module.exports.run = async (client, message, args) => {
    if (message.author.id != '719254619305541745') return;
    await message.channel.send(`Перезапуск...`)
    process.exit();
}
