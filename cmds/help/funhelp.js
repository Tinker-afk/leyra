const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
      
	let user = message.mentions.users.first();
    let embed = new Discord.RichEmbed()
    .setColor('#2F3136')
    .setDescription(`**__🎊FUN КОМАНДЫ🎊__**
    • away - Бот отправит сообщение что вы отошли.
    • cry - Начать плакать.
    • dance - Начать танцевать.
    • enjoy - Начать смеяться.
    • hug <@участник> - Обнять участника.
    • kiss <@участник> - Поцеловать участника.
    • lick <@участник> - Лизнуть участника.
    • love <@участник> - Любить участника.
    • ping - Игра с ботом ping-pong.
    • beat <@участник> - Избить участника.
    • slap <@участник> - Шлёпнуть участника.
    • suspect - Бот отправит сообщение что вы что-то подазриваете.
    • sleep - Бот отправит сообщение что вы заснули.
    • sad - Бот отправит сообщение что вам грустно.
    • suck <@участник> - Отсосать у пользователя.
    • cookie <@участник> - Подарить печеньку пользоваетлю.
    • fur <@участник> - Фыркнуть на участника.
    • came - Бот напишет что вы вернулись.
    • frake - Бот напишет что вы беситесь.
    • knight <@участник> - Посветить участника в рыцари.
    • misses - Бот напишет что вам скучно.
    • battle <@участник> - Побатлиться с участником.
    • tired - Бот напишет что вы устали.`)
	.setFooter("FUN|Leyra🌸")
    .setTimestamp()

    message.delete().catch();
    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "help-fun"
};
