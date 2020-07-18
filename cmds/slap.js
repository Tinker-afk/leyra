const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");

module.exports.run = async (bot,message,args) => {
    try{
      
	let user = message.mentions.users.first();
    let embed = new Discord.RichEmbed()
    .setColor('#2F3136')
    .setDescription(`${message.author.username} **шлёпнул** ${user.username} ᕦ(ò_óˇ)ᕤ`)
	.setImage("https://images-ext-2.discordapp.net/external/E3YVoM4oPCUOswyOk201XPasc8R01vURGid7DZT2CUI/https/i.imgur.com/y8SzXYp.gif")

    message.delete().catch();
    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "slap"
};
