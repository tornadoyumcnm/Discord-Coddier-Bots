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
    
const background = await loadImage(image.USER_İNFO_BACKGROUND);
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    
const defaultAvatar = 'https://cdn.discordapp.com/attachments/1185339110563524618/1186482156839653447/coddier.png?ex=6593689d&is=6580f39d&hm=e9c53d6968f786dfb57b5680032afadae349b88b62854a470eeda9a3f361bfbd&';
const avatars = defaultAvatar;
const avatar = await loadImage(avatars);
    
const members = interaction.options.getMember('kullanıcı') || interaction.member
    
if (members.displayAvatarURL().endsWith(".webp")) {
var avatar1 = members.displayAvatarURL();
img = await Canvas.loadImage(avatar1.replace("webp", "jpg"));
}
            
ctx.fillStyle = '#00DDFF';
ctx.font = '45px Marlin Geo Black';
ctx.fillText(`${members.user.username}`, 350, 414);  
    
ctx.fillStyle = '#00DDFF';
ctx.font = '35px Marlin Geo Black';
ctx.fillText(`${members.user.id}`, 350, 637);  
    
ctx.fillStyle = '#00DDFF';
ctx.font = '25px Marlin Geo Black';
ctx.fillText(`${moment(members.user.createdTimestamp).format('DD MMMM dddd Do/YYYY (HH:mm)')}`
, 1305, 407);
    
ctx.fillStyle = '#00DDFF';
ctx.font = '25px Marlin Geo Black';
ctx.fillText(`${moment(members.joinedTimestamp).format('DD MMMM dddd Do/YYYY (HH:mm)')}`
, 350, 860);
    
ctx.fillStyle = '#00DDFF';
ctx.font = '25px Marlin Geo Black';
ctx.fillText(`No Premium`
, 1307, 632.5);
    
ctx.fillStyle = '#00DDFF';
ctx.font = '25px Marlin Geo Black';
ctx.fillText(`Total Role: ${members.roles.cache.size - 1}`
, 1307, 860);
    
const avatarX = (canvas.width - 247.5) / 2.3;
const avatarY = -130;
const newAvatarY = avatarY + 100;
const avatarRadius = 230;
    
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
    name: "user-info",
    description: "You look at the information of the person tagged or your own information.",
    options: [
        {
            name: 'user',
            description: 'Select the user whose information you want to look at!',
            type: 6,
            required: false,
        },
    ]
}

/*
const image = require("../../../materials/image/image.json")
let link = image.
const attachment = new Discord.AttachmentBuilder(link);
*/