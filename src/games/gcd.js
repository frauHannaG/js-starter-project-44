#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getUserAnswer = () => readlineSync.question('Your answer: ');
export const gcdRules = 'Find the greatest common divisor of given numbers.';
const getNumber = () => {
    return Math.floor(Math.random() * 100);
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
    const firstNumber = getNumber();
    const secondNumber = getNumber();
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const correctAnswer = findGcd(firstNumber, secondNumber);
    const userAnswer = parseInt(getUserAnswer());
    if (correctAnswer !== userAnswer) {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
    }
    return [userAnswer, correctAnswer];
};

export default gcd;


