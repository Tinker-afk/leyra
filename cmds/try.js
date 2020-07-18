const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");

module.exports.run = async (bot,message,args) => {
    try{
      
	let array = ["█▒▒▒▒▒▒▒▒▒ 10%", "██▒▒▒▒▒▒▒ 20%", "███▒▒▒▒▒▒▒ 30%", "████▒▒▒▒▒▒ 40%", "█████▒▒▒▒▒ 50%", "██████▒▒▒▒ 60%", "███████▒▒▒ 70%", "████████▒▒ 80%", "█████████▒ 90%", "██████████ 100%"]
    let randomField = array[Math.floor(Math.random() * array.length)];
	let botmessage = args.join(" ");
    let embed = new Discord.RichEmbed()
	.setDescription(`** ${message.author.username} ** пробует ${botmessage}`)
    .setColor('#2F3136')
    .addField("Шанс",randomField);
	
    message.delete().catch();
    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "try"
};