#!/usr/bin/env node
import playGame from '../src/index.js';
import progression from '../src/games/progression.js';
import { progressionRules } from '../src/games/progression.js';

playGame(progression, progressionRules);