#!/usr/bin/env node
import playGame from '../src/index.js';
import even from '../src/games/even.js';
import { evenRules } from '../src/games/even.js';

playGame(even, evenRules);