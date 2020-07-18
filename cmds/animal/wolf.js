const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");

module.exports.run = async (bot,message,args) => {
    try{
      
    let content = await require('node-fetch')('https://miss--perssbest.repl.co/api/v2/wolf').then(r => r.json()).then(r => r.image);
    let embed = new Discord.RichEmbed()
    .setTitle("WOLF-IMAGE")
    .setColor('#2F3136')
	.setImage(content)

    message.delete().catch();
    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "wolf"
};
