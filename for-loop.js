import { ElementCount } from './constants.js';
import { performance } from 'node:perf_hooks';

performance.mark('start');

for (let i = 0; i < ElementCount.tenMillions; i++) { }

performance.measure('end', 'start');

console.log(performance.getEntriesByType('measure'));
