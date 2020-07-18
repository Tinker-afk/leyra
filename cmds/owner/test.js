const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{

    let c = args.join(" ");
    let e = eval(c);
	
    message.channel.send(new Discord.RichEmbed().setDescription("```" + e + "```"))
    message.delete().catch();
	
	}catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "eval"
};
