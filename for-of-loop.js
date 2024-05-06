import { ElementCount } from './constants.js';
import { performance } from 'node:perf_hooks';

const array = new Array(ElementCount.million).fill();

performance.mark('start');

for (let element of array) {}

performance.measure('end', 'start');

console.log(performance.getEntriesByType('measure'));
