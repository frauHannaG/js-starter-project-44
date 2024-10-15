#!/usr/bin/env node
import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

const getUserAnswer = () => readlineSync.question('Your answer: ');
export const progressionRules = 'What number is missing in the progression?';

const generateProgression = (number) => {
  const progress = [];
  progress.push(number);
  const d = getRandomInt(1, 10);
  let nextNumber = number;
  for (let i = 1; i < 10; i += 1) {
    nextNumber += d;
    progress.push(nextNumber);
  }
  return progress;
};

export const progression = () => {
  const start = getRandomInt(1, 20);
  const progressionArray = generateProgression(start);
  const x = getRandomInt(1, 10);
  const correctAnswer = progressionArray[x];
  progressionArray[x] = '..';
  const progressionString = progressionArray.join(' ');
  console.log(`Question: ${progressionString}`);
  const userAnswer = parseInt(getUserAnswer(), 10);
  if (correctAnswer !== userAnswer) {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
  }
  return [userAnswer, correctAnswer];
};
