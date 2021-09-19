  
const { Client, MessageEmbed, GuildMember } = require('discord.js');
const { play } = require("../../modules/play.js");
const ytdl = require('ytdl-core');
const YouTubeAPI = require("simple-youtube-api");
const scdl = require("soundcloud-downloader").default
const https = require("https");
const { youtube_api_key, soundcloud_client_id, default_volume, prefix, config } = require("../../config.json");
const youtube = new YouTubeAPI(youtube_api_key);

module.exports.run = async (client, message, args) =>{
  
    
    const music = new MessageEmbed()
    .setTitle('Ошибка...')
    .setDescription('Похоже что модуль \`"play"\`, был отключен Администрацией бота!')
    .setColor(11608096)
    message.reply(music)
};
