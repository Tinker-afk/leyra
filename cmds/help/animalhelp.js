const Discord = module.require("discord.js");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
      
	let user = message.mentions.users.first();
    let embed = new Discord.RichEmbed()
    .setColor('#2F3136')
    .setDescription(`**__🐱ANIMAL КОМАНДЫ🐱__**
    • dog - Картинки собак.
    • cat - Картинки кошек.
    • fox - Картинки лис.
    • pand - Картинки панд.
    • snake - Картинки змей.
    • wolf - Картинки волков.
    `)
	.setFooter("ANIMAL|Leyra🌸")
    .setTimestamp()

    message.delete().catch();
    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "help-animal"
};
