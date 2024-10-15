#!/usr/bin/env node
import playGame from '../src/index.js';
import calc from '../src/games/calc.js';
import { calcRules } from '../src/games/calc.js';

playGame(calc, calcRules);