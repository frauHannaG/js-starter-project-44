#!/usr/bin/env node
import playGame from '../src/index.js';
import { evenRules, even } from '../src/games/even.js';

playGame(even, evenRules);
