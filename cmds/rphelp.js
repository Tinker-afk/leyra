const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");

module.exports.run = async (bot,message,args) => {
    try{
      
	let user = message.mentions.users.first();
    let embed = new Discord.RichEmbed()
    .setColor('#2F3136')
    .setDescription(`**__ROLE-PLAY__**
    rfart - Комманда роле-плей ей не нужна информация.
    rsleep - Комманда роле-плей ей не нужна информация.
    raway - Комманда роле-плей ей не нужна информация.
    rplay - Комманда роле-плей ей не нужна информация.`)

    message.delete().catch();
    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "help-role-play"
};
