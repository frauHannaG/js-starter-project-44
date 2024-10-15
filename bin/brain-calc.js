#!/usr/bin/env node
import playGame from '../src/index.js';
import { calcRules, calc } from '../src/games/calc.js';

playGame(calc, calcRules);
