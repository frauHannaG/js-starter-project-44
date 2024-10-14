#!/usr/bin/env node
import playGame from '../src/index.js';
import even from '../src/games/even.js';
import { evenRules } from '../src/games/even.js';


console.log('Answer "yes" if the number is even, otherwise answer "no".');
playGame(even, evenRules);