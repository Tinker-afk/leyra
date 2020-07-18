const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");

module.exports.run = async (bot,message,args) => {
    try{
      
	let user = message.mentions.users.first();
    let embed = new Discord.RichEmbed()
    .setColor('#2F3136')
    .setDescription(`${message.author.username} **лизнул** ${user.username} (ღ˘ω˘ღ)`)
	.setImage("https://images-ext-2.discordapp.net/external/WiNc2fDijst0nx5ZxQZfskOdqL0dewmH8_tMKfLlKPs/https/api.storage.ksoft.si/media/i-08_u343s-24.gif?width=400&height=225")

    message.delete().catch();
    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "lick"
};
