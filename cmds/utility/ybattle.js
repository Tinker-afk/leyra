const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");

module.exports.run = async (bot,message,args) => {

    let array = ["1 игрок", "2 игрок"]
    const randomField = array[Math.floor(Math.random() * array.length)];
    let user = message.mentions.users.first();
    let embed = new Discord.RichEmbed()
        .setDescription(`**__BATTLE 1VS1__**
        Начался батл между ${message.author.username} и ${user.username} ! `)
        .setColor('#2F3136')
        .addField("1 игрок",message.author.username)
        .addField("2 игрок",`${user.username}`)
        .addField("Победил",randomField)
    
        message.delete().catch();
        message.channel.send(embed);
}
module.exports.help = {
    name: "yes"
};