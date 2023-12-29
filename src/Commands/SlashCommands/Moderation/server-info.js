const Discord = require('discord.js')
const Canvas = require("canvas")
const fs = require("fs");
const path = require('path');
const image = require("../../../materials/image/image.json")
const fontPath = path.join(__dirname, '../../../font/MarlinGeo-Black.otf');
const moment = require('moment');
const { createCanvas, loadImage, registerFont } = require('canvas');
registerFont(fontPath, { family: 'Marlin Geo Black' });
require("moment-duration-format");

module.exports.execute = async(client, interaction) => {
await interaction.deferReply()

const canvas = createCanvas(1920, 1080);
const ctx = canvas.getContext('2d');
    
const background = await loadImage(image.SERVER_İNFO_BACKGROUND);
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    
const defaultAvatar = interaction.guild.iconURL({size: 2048}).replace('webp', 'png').replace('gif', 'png').replace('webp', 'jpeg').replace('gif', 'jpeg') || interaction.client.user.avatarURL({size: 2048}).replace('webp', 'png').replace('gif', 'png').replace('webp', 'jpeg').replace('gif', 'jpeg');
const avatars = defaultAvatar;
const avatar = await loadImage(avatars);
    
const members = interaction.options.getMember('kullanıcı') || interaction.member
            
ctx.fillStyle = '#FF0000';
ctx.font = '25px Marlin Geo Black';
ctx.fillText(`${interaction.guild.id}`, 340, 430);  
    
const avatarX = (canvas.width - 225) / 5.5;
const avatarY = +0;
const newAvatarY = avatarY + 0;
const avatarRadius = 150;
    
ctx.save();
ctx.beginPath();
ctx.beginPath();
ctx.arc(avatarX + avatarRadius, avatarY + avatarRadius, avatarRadius, 0, Math.PI * 2, true);
ctx.closePath();
ctx.clip();
ctx.drawImage(avatar, avatarX, newAvatarY, avatarRadius * 2, avatarRadius * 2);
ctx.restore();
ctx.stroke();
ctx.closePath();
    
const attachment = new Discord.AttachmentBuilder(canvas.toBuffer(), `${members.user.id}_userinfo`);
await interaction.followUp({ files: [attachment] });

},

module.exports.config = {
    name: "server-info",
    description: "You look at the information of the person tagged or your own information.",
    options: []
}

/*
const image = require("../../../materials/image/image.json")
let link = image.
const attachment = new Discord.AttachmentBuilder(link);
*/