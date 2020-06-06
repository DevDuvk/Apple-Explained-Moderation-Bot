module.exports = {
    name: 'unban',
    description: 'Bans a user.',
    aliases: ['unbanish'],
	usage: '<user> <reason>',
	cooldown: 0,
	mod:true,
    execute(message, args, client) {
		const {prefix} = require('../config.json')
		const argarray = message.content.slice(prefix.length).trim().split(/ +/g);
        try {
			var reason = args.join(' ')
			let userID = args[0]
			var reason = reason.replace(args[0], '')
			if (message.author.id == argarray[1]){
				respond('',`You can't perform this action on yourself.`, message.channel);
				return;
			}
			if(reason == ''){
				var reason = 'No reason provided.'
			}
			   
			respond('Unban',userID+' was unbanned.\nReason: '+reason, message.channel)
			
			message.guild.members.unban(userID)
        	}catch(error) {
				respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
				errorlog(error)
				// Your code broke (Leave untouched in most cases)
				console.error('an error has occured', error);
				}
    },
};
