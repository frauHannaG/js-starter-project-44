#!/usr/bin/env node
import playGame from '../src/index.js';
import { gcdRules, gcd } from '../src/games/gcd.js';

playGame(gcd, gcdRules);
