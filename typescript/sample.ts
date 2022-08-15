import { ListNode, TreeNode, createListNode, createTreeNode, getArrFromListNode } from './classes/nodes';
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

class Tmp {
    private name;

    constructor(name?: string) {
        this.name = name;
    }

    public tmp() {
        if (!this.name) ;
        console.log(this.name);
    }
}

const tmp = new Tmp();
tmp.tmp();



exit();


// 返り値もジェネリクスを使って、指定できるようにすれば
const func = (head: ListNode | null): boolean => {
    const swap = (node: ListNode | null): ListNode | null => {
        let prev = null, tmp: ListNode | null;
        while (node) {
            tmp = node.next;
            node.next = prev;
            prev = node;
            node = tmp;
        }
        return prev;
    }

    console.log(getArrFromListNode(swap(head)));

    return true;
}


const test_data = new TestData();
const test_cases: (ListNode | null)[][] = [
    // [createListNode([1, 2, 2, 1])],
    // [createListNode([1, 2, 2, 1, 3])],
    // [createListNode([1, 2, 2, 2, 1])],
    // [createListNode([1, 2, 5, 2, 1])],
    [createListNode([1, 2, 5, 6, 7, 5, 2, 1])],
    [createListNode([1, 2, 5, 6, 7, 5, 2])],
];

tests['list_node'](func, test_cases);
