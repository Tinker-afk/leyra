const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");

module.exports.run = async (bot,message,args) => {
    try{
      
	let user = message.mentions.users.first();
    let embed = new Discord.RichEmbed()
    .setColor('#2F3136')
    .setDescription(`${message.author.username} **устал** --_--`)
	.setImage("https://avatars.mds.yandex.net/get-pdb/202366/6ff6992f-42eb-4607-8c99-041f44b86ddd/orig")

    message.delete().catch();
    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "tired"
};