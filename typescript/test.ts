import { NumNumArr, StrStrArr, Matrix, NumMatrix, NodeType } from './types';
import { ListNode, TreeNode } from './classes/nodes';

const performance = require('perf_hooks').performance;

// 各関数の返り値がanyになってるけど、ジェネリクス使って呼び出し元で型を指定できるようにすれば？

// テストデータとして文字列を取る。
const test_1 = function (func: (...msg: string[]) => any, test_cases: string[][]): void {
    for (const test_case of test_cases) {
        const start = performance.now();
        console.log(func(...test_case));
        const end = performance.now();
        console.log(end - start + "[ms]\n");
    }
}

// テストデータとして、数値の配列を取る
const test_2 = function (func: (...nums: number[][]) => any, test_cases: number[][][]): void {
    for (const test_case of test_cases) {
        const start = performance.now();
        console.log(func(...test_case));
        const end = performance.now();
        console.log(end - start + "[ms]\n");
    }
}

// テストデータとして、数値配列と数値をとる
const test_3 = function (func: (numArr: number[], ...nums: number[] | any) => any, test_cases: NumNumArr[]): void {
    for (const test_case of test_cases) {
        const nums = test_case.splice(1, test_case.length);
        const start = performance.now();
        console.log(func(test_case[0], ...nums));
        const end = performance.now();
        console.log(end - start + "[ms]\n");
    }
}

// テストデータとして、マトリックス(複数)をとる
const test_4 = function (func: (...matrix: Matrix[]) => any, test_cases: Matrix[][]): void {
    for (const test_case of test_cases) {
        const start = performance.now();
        console.log(func(...test_case));
        const end = performance.now();
        console.log(end - start + "[ms]\n");
    }
}

// テストデータとして、数値をとる
const test_5 = function (func: (...num: number[]) => any, test_cases: number[][]): void {
    for (const test_case of test_cases) {
        const start = performance.now();
        console.log(func(...test_case));
        const end = performance.now();
        console.log(end - start + "[ms]\n");
    }
}

// テストデータとして、文字列と文字列配列をとる
const test_6 = function (func: (s: string, s_arr: string[]) => any, test_cases: StrStrArr[]): void {
    for (const test_case of test_cases) {
        const start = performance.now();
        console.log(func(test_case[0], test_case[1]));
        const end = performance.now();
        console.log(end - start + "[ms]\n");
    }
}

//　テストデータとしてノードを受け取る。
const test_7 = function (func: (...root: (ListNode | null)[]) => any, test_cases: (ListNode | null)[][]): void {
    for (const test_case of test_cases) {
        const start = performance.now();
        console.log(func(...test_case));
        const end = performance.now();
        console.log(end - start + "[ms]\n");
    }
}

//　テストデータとして文字列配列を受け取る。
const test_8 = function (func: (...strArr: string[][]) => any, test_cases: string[][][]): void {
    for (const test_case of test_cases) {
        const start = performance.now();
        console.log(func(...test_case));
        const end = performance.now();
        console.log(end - start + "[ms]\n");
    }
}


const test_9 = function (func: (matrix: Matrix, ...num: number[] | any) => any, test_cases: NumMatrix[]): void {
    for (const test_case of test_cases) {
        const nums = test_case.splice(1, test_case.length);
        const start = performance.now();
        console.log(func(test_case[0], ...nums));
        const end = performance.now();
        console.log(end - start + "[ms]\n");
    }
}

const test_10 = function (func: (str: string, num: number) => any, test_cases: [string, number][]): void {
    for (const test_case of test_cases) {
        const start = performance.now();
        console.log(func(test_case[0], test_case[1]));
        const end = performance.now();
        console.log(end - start + "[ms]\n");
    }
}

const test_11 = function (func: (...root: (TreeNode | null)[]) => any, test_cases: (TreeNode | null)[][]): void {
    for (const test_case of test_cases) {
        const start = performance.now();
        console.log(func(...test_case));
        const end = performance.now();
        console.log(end - start + "[ms]\n");
    }
}


export const tests = {
    'str': test_1,
    'num': test_5,
    'numArr': test_2,
    'num_numArr': test_3,
    'num_matrix': test_9,
    'str_strArr': test_6,
    'matrix': test_4,
    'list_node': test_7,
    'tree_node': test_11,
    'strArr': test_8,
    'str_num': test_10,
};
