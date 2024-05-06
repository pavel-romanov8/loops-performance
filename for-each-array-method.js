import { ElementCount } from './constants.js';
import { performance } from 'node:perf_hooks';

const array = new Array(ElementCount.tenMillions).fill();

performance.mark('start');

array.forEach(() => {});

performance.measure('end', 'start');

console.log(performance.getEntriesByType('measure'));
