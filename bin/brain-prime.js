#!/usr/bin/env node
import playGame from '../src/index.js';
import { primeRules, prime } from '../src/games/prime.js';

playGame(prime, primeRules);
