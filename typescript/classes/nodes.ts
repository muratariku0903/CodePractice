export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


// nullを一つのnodeとしてカウントしているから、LeetCodeのテストケースと照合しない
export const createTreeNode = (arr: (number | null)[], idx: number = 0): TreeNode | null => {
    if (idx > arr.length - 1) return null;
    if (arr[idx] === null) return null;
    const left_idx = (idx + 1) * 2 - 1;
    const right_idx = (idx + 1) * 2;
    console.log(idx, left_idx, right_idx);
    return new TreeNode(
        Number(arr[idx]),
        createTreeNode(arr, left_idx),
        createTreeNode(arr, right_idx),
    );
}

export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export const createListNode = (arr: number[]): ListNode | null => {
    if (!arr.length) return null;
    return new ListNode(arr.shift(), createListNode(arr));
}

export const getArrFromListNode = (node: ListNode | null): number[] => {
    let res = [];
    while (node) {
        res.push(node.val);
        node = node.next;
    }
    return res;
}
