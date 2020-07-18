const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");

module.exports.run = async (bot,message,args) => {
    try{
      
	let user = message.mentions.users.first();
    let embed = new Discord.RichEmbed()
    .setColor('#2F3136')
    .setDescription(`${user.username},**не спамь** (μ_μ)`)
	.setImage("https://images-ext-1.discordapp.net/external/ImHfaUfmVz3MvRXj9XoKYPJJ76rsLNa7fjre24AGMkI/https/i.imgur.com/SA1X2gB.gif?width=400&height=225")

    message.delete().catch();
    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "spam"
};
