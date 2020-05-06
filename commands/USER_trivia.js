module.exports = {
  name: 'trivia',
  aliases: ['factgame', 'triviagame'],
  description: 'Learn something new with Apple Mod.\n(Trivia will only include history of the Apple company, the Apple Explained channel, the server and its users for now.)\nTo answer a question, use .answer (question ID) (your answer).',
  usage: '',
  cooldown: 0,
	execute(message, args, client) {
    const fs = require('fs');
    const Discord = require('discord.js')
    const msg = message
    try {
    //Initialize variables
    var qa = Math.ceil(Math.random() * 55)
    var divisor = Math.ceil(Math.random() * 100)
    if(divisor < 51) {
      var temp1 = qa
      var qa = temp1
    }else {
      var temp1 = qa
      var qa = Math.ceil(temp1/2)
    }
    //Pick a question
    const quiz = require('./quiz.json');
    const item = quiz[Math.floor(Math.random() * quiz.length)];
    const ans = item.answer
    const filter = response => {
      console.log(response)
      return item.answer
    }
    console.log(item)
        respond('Trivia',`<@${message.author.id}>'s question:\n` + item.question+ '\n' + item.choice1 + '\n' + item.choice2 +'\n' + item.choice3 + '\n' + item.choice4 + '\n' + "Question ID: " + item.qid + '\n' + "**use `.answer (question ID) (your answer)` to answer the question**\nExample: .answer 2 C", message.channel) 
  }catch(error) {
    respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
    errorlog(error)
    // Your code broke (Leave untouched in most cases)
    console.error('an error has occured', error);
    }
  }
}