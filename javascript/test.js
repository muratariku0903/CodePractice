import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const performance = require('perf_hooks').performance;

const test = (func, test_data) => {
    for (const test_el of test_data) {
        const start = performance.now();

        if (Array.isArray(test_el)) {
            console.log('結果' + func(...test_el));
        } else {
            console.log('結果' + func(test_el));
        }

        const end = performance.now();

        console.log(end - start + "[ms]\n");
    }
}

export default test;
