const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");

module.exports.run = async (bot,message,args) => {
    try{
    
    let botmessage = args.join(" ");
	let array = ["Да", "Нет", "Наверно", "Может быть", "Не думаю","...","Не будет","Нейтрально","Даже не знаю что отвтить"]
	let randomField = array[Math.floor(Math.random() * array.length)];
    let embed = new Discord.RichEmbed()
    .setDescription(`** ${message.author.username} ** спрашивает!`)
    .setColor('#2F3136')
    .addField("Вопрос",botmessage)
    .addField("Ответ",randomField);
	
    message.delete().catch();
    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "8ball"
};