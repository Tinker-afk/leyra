const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");

module.exports.run = async (bot,message,args) => {
    try{
      
	let user = message.mentions.users.first();
    let embed = new Discord.RichEmbed()
    .setColor('#2F3136')
    .setDescription(`${message.author.username}'у **скучно** ( ･ั﹏･ั) `)
	.setImage("https://images-ext-2.discordapp.net/external/a-lP67UgFTUDx9Us3771o6MJvit63IhIzP6TACNdQC0/https/i.gifer.com/FQcH.gif?width=400&height=210")

    message.delete().catch();
    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "frake"
};