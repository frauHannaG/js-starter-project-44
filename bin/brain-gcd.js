#!/usr/bin/env node
import playGame from '../src/index.js';
import gcd from '../src/games/gcd.js';
import { gcdRules } from '../src/games/gcd.js';

playGame(gcd, gcdRules);