#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getUserAnswer = () => readlineSync.question('Your answer: ');
export const gcdRules = 'Find the greatest common divisor of given numbers.';

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
};

const findGcd = (number1, number2) => {
    let max = number1 <= number2 ? number1 : number2
    let maxGcd = 0;
    for (let i = max; i > 0; i -=1 ) {
        if (number1 % i === 0 && number2 % i === 0) {
            maxGcd = i;
            break;
        }
    }
    return maxGcd;
};

const gcd = () => {
    const firstNumber = getRandomInt(1, 100);
    const secondNumber = getRandomInt(1, 100);
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const correctAnswer = findGcd(firstNumber, secondNumber);
    const userAnswer = parseInt(getUserAnswer());
    if (correctAnswer !== userAnswer) {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
    }
    return [userAnswer, correctAnswer];
};

export default gcd;


