const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
      
	let user = message.mentions.users.first();
    let embed = new Discord.RichEmbed()
    .setColor('#2F3136')
    .setDescription(`
    **__BATTLE 1VS1__**
        ** ${user.username} **, с тобой хочет побатлиться ** ${message.author.username} ** !
        Согласен?: #yes <@игрок> Несогласен?: #no <@игрок>`)

    message.delete().catch();
    message.channel.send(embed);
            }
module.exports.help = {
    name: "battle"
};