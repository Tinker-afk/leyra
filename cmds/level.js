const Discord = module.require("discord.js");
const fs = require("fs");
const levels = require('../levels.json')
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
      
    let levelsFile = fs.readFileSync('levels.json');
    let levelsobj = JSON.parse(levelsFile);
    let user = message.mentions.users.first() || message.author;
    let exp = levels[user.id].xp
    let level = levels[user.id].level
    let embed = new Discord.RichEmbed()
    .setTitle("**__📊УРОВЕНЬ📊__**")
    .setColor('#2F3136')
    .setDescription(`${message.author.username} вот ваша статистика!`)
    .addField("📈Уровень📈",levelsobj[user.id].level)
    .addField("📋Exp📋",exp)
    .setThumbnail(user.avatarURL)

    message.delete().catch();
    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "level"
};