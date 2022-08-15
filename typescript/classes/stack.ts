import { MinBinaryHeap } from "./heap";

export class MinStack {
    public stack: { val: number, prevMin: number }[];
    public min: number;
    constructor() {
        this.stack = [];
        this.min = Infinity;
    }

    push(val: number): void {
        // 追加する数と追加された時点で一番小さい数をセットで保存しておく。
        // そうすることによって、後々、末尾要素を削除しても、そのstackがその時点での最小値を記録しているからそれをthis.minに再セットするだけで良kなる。
        const valMinPair = { val: val, prevMin: this.min };
        this.stack.push(valMinPair);
        this.min = Math.min(val, this.min);
    }

    pop(): number {
        const valMinPair = this.stack.pop();
        this.min = valMinPair !== undefined ? valMinPair.prevMin : 0;
        return valMinPair !== undefined ? valMinPair.val : 0;
    }

    top(): number {
        return this.stack[this.stack.length - 1].val;
    }

    // ヒープから参照する
    getMin(): number {
        return this.min;
    }
}



