#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getNumber = () => Math.floor(Math.random() * 100);

const getUserAnswer = () => readlineSync.question('Your answer: ');
export const calcRules = 'What is the result of the expression?';

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

export const calc = () => {
  const firstOperand = getNumber();
  const secondOperand = getNumber();
  const operator = getRandomInt(1, 3);
  let correctAnswer = 0;
  switch (operator) {
    case 1:
      console.log(`Question: ${firstOperand} + ${secondOperand}`);
      correctAnswer = firstOperand + secondOperand;
      break;
    case 2:
      console.log(`Question: ${firstOperand} - ${secondOperand}`);
      correctAnswer = firstOperand - secondOperand;
      break;
    case 3:
      console.log(`Question: ${firstOperand} * ${secondOperand}`);
      correctAnswer = firstOperand * secondOperand;
      break;
    default:
      break;
  }
  const userAnswer = parseInt(getUserAnswer(), 10);
  if (correctAnswer !== userAnswer) {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
  }
  return [userAnswer, correctAnswer];
};
