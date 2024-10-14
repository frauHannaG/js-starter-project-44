#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getNumber = () => {
   return Math.floor(Math.random() * 100);
};

const getUserAnswer = () => readlineSync.question('Your answer: ');
const isEven = (number) => !(number % 2);
export const evenRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const even = () => {
    const number = getNumber();
    console.log(`Question: ${number}`);
    const userAnswer = getUserAnswer();
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    return [userAnswer, correctAnswer];
};
 export default even;
