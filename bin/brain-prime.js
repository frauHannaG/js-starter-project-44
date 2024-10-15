#!/usr/bin/env node
import playGame from '../src/index.js';
import prime from '../src/games/prime.js';
import { primeRules } from '../src/games/prime.js';

playGame(prime, primeRules);