const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
      
    let embed = new Discord.RichEmbed()
    .setColor('#2F3136')
    .setDescription(`**__🔧MODERATION КОМАНДЫ🔧__**
    • ban <@участник> - Забанить участника.
    • kick <@участник> -Кикнуть участника.
    • mute <@участник> - Замьютить участника.
    • unmute <@участник> - Размьютить человека.
    • warn <@участник> - Выдать предупреждение участнику.
    • unwarn <@участник> - Забрать предупреждение у участника.
    • serverinfo - Информация о сервере.
    • userinfo <@участник> - Информация о участнике.
    • say - Бот повторяет сообщение за участником.
    • lsay <@участник> - Бот повторяет сообщение за участником и отправит его в личное сообщение.
    • spam <@участник> - Выдаёт сообщение о предупреждении человека что он спамит.
    • clear <кол-во сообщений> - Очистить сообщения.`)
	.setFooter("MODERATION|Leyra🌸")
    .setTimestamp()

    message.delete().catch();
    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "help-moderation"
};
