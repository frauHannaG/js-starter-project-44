#!/usr/bin/env node
import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
};

const getUserAnswer = () => readlineSync.question('Your answer: ');
export const primeRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';


const prime = () => {
    const number = getRandomInt(1, 100);
    let correctAnswer = 'yes';
    for (let i = 2; i <= number; i += 1) {
        if (number % i === 0 && i < number) {
            correctAnswer = 'no';
            break;
        }
    }
    console.log(`Question: ${number}`);
    const userAnswer = getUserAnswer();
    if (correctAnswer !== userAnswer) {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
    }
    return [userAnswer, correctAnswer];
};

export default prime;