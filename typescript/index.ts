import { ListNode, TreeNode } from './classes/nodes';
import { TestData } from './classes/test_data';
import { NumArr } from './classes/numarr';
import { MinStack } from './classes/stack';
import { NumNumArr, StrStrArr, Matrix, NumMatrix, NodeType } from './types';
import { fact, is_prime } from './functions/functions';
import { difference, union, intersection } from './functions/set';
import { counter } from './functions/counter';
import { chdir, exit, memoryUsage, nextTick } from 'process';
import { tests } from './test';
import { MinBinaryHeap, MaxBinaryHeap } from './classes/heap';



// 返り値もジェネリクスを使って、指定できるようにすれば
const func = (n: number): number => {
    //　3項探索でやってみる。
    // 二分探索の場合、ピボット（mid）がひとつだったけど、多分それが二つになる。
    let low = 1;
    let high = n;

    return 0;
}

const test_data = new TestData();
const test_cases: Matrix = [
    [10],
    [1000],
];

tests['num'](func, test_cases);
