'use strict';
const Readline = require('readline');
const weather = require('./weather')
const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
})
    
const matcher = require('./matcher');
const bc = "\x1b[32m"; // bot color
const uc = "\x1b[33m"; // user color
const ec = "\x1b[0m";  // exit color

console.log(ec);
console.log(uc);
rl.setPrompt('> ');
rl.prompt();
rl.on('line', reply => {
    matcher(reply, cb => {
      switch (cb.intent) {
        case 'Hello':{
          console.log(bc,`${cb.entities.greeting}!`,uc);
          rl.prompt();
          break;
        }
        case 'Exit':{
          console.log(bc,'Exit!',ec);
          process.exit();
          break;
        }
        case 'Weather':{
          //console.log(`weather in '${cb.entities.city}' '${cb.entities.time}'`);
          weather(cb.entities.city).then(response => {
            if(response){
              console.log(bc,response,uc);
            }
            rl.prompt();
          });
          rl.prompt();
          break;
        }
        default:{
          console.log(bc,"Sorry! I don't understand.",uc);
          rl.prompt();
        } 
      }
    });
});