const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");

module.exports.run = async (bot,message,args) => {
    try{
      
    let user = message.mentions.users.first();
    let content = await require('node-fetch')('https://miss--perssbest.repl.co/api/v2/cry').then(r => r.json()).then(r => r.image);
    let embed = new Discord.RichEmbed()
    .setColor('#2F3136')
    .setDescription(`${message.author.username} **плачет** (｡•́︿•̀｡)`)
	.setImage(content)

    message.delete().catch();
    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "cry"
};