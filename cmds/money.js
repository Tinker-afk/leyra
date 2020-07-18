const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
    
    let botmessage = args.join(" ");
	let array = ["Орёл","Решка"]
	let randomField = array[Math.floor(Math.random() * array.length)];
    let embed = new Discord.RichEmbed()
    .setColor('#2F3136')
    .addField("Подкинул монетку",message.author.username)
    .addField("Монетка показала",randomField);
	
    message.delete().catch();
    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "money"
};
