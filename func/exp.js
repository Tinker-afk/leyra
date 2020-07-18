const Discord = module.require("discord.js");
const fs = require('fs-extra')
const levels = require('../levels.json')
const cd = new Set()

module.exports = async function(user) {
    if (!cd.has(user.id)) {
        let xpadd = Math.floor(Math.random() * 11) + 10

        if (!levels[user.id]) {
            levels[user.id] = {
                xp: 0,
                level: 1
            }
        }

        let exp = levels[user.id].xp
        let level = levels[user.id].level
        let nextlv = level * 100

        if (nextlv <= exp) {
            let levelsFile = fs.readFileSync('levels.json');
            let levelsobj = JSON.parse(levelsFile);
			let embed = new Discord.RichEmbed()
			.setTitle(`**__${user.tag}__**`)
            .setDescription(`Поздравляю **${user.username}**, ты повысил свой уровень на **1** балл!`)
            .setColor('#2F3136')
            .addField("Твой уровень:",levelsobj[user.id].level)
            .addField("Твой exp:",exp)
			.setThumbnail(user.avatarURL)
            user.send(embed);
            levels[user.id].level++
        } else {
            levels[user.id].xp = exp + xpadd
        }

        await fs.writeFile('./levels.json', JSON.stringify(levels), err => {
            if (err) console.log(err)
        })

        await cd.add(user.id)
        await setTimeout(() => cd.delete(user.id), 10000)
    }
}