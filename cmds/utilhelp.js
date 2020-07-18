const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
      
	let user = message.mentions.users.first();
    let embed = new Discord.RichEmbed()
    .setColor('#2F3136')
    .setDescription(`**__🔮UTILITY КОМАНДЫ🔮__**
    • meme - Отправляет рандомный мем.
    • nsfw - Можно использовать только для канал 18+.
    • embed <текст> - Бот отправит ваш текст в ембеде.
    • rembed <текст> - Бот отправит ваш текст в ембеде только в разном цвете.
    • money - Подкинуть монетку.
    • 8ball <вопрос> - Бот ответит на ваш вопрос.
    • try <что вы хотите?> - Бот покажет шанс того чего вы хотите.
    • rnum - Бот выдаст рандомное число от 1-100.
	• avatar <@участник> - Бот вышлет аватарку пользователя которого вы указали.`)
	.setFooter("UTILITY|Leyra🌸")
    .setTimestamp()

    message.delete().catch();
    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "help-utility"
};
