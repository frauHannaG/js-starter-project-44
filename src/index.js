#!/usr/bin/env node
import getUserName from './cli.js';

const playGame = (game, rules) => {
    const userName = getUserName();
    const gameRules = rules;
    console.log(gameRules);
    const maxTries = 2;
    for (let i = 0; i <= maxTries; i += 1) {
        const [userAnswer, correctAnswer] = game();
        if (userAnswer === correctAnswer) {
            console.log('Correct!');
            if (i === maxTries) {
                console.log(`Congratulations, ${userName}!`);
            }
        } else {
            console.log(`Let's try again, ${userName}!`);
            break;
        } 
    }
}

export default playGame;