class Heap {
  public values: number[];
  protected mode: "max" | "min";
  constructor(nums: number[] = []) {
    this.values = nums;
    this.mode = "max";
  }

  setMode(mode: "max" | "min"): void {
    this.mode = mode;
  }

  insert(val: number) {
    this.values.push(val);
    this.bubbleUp(this.values.length - 1);
  }

  bubbleUp(child_idx: number): void {
    if (child_idx === 0) return;
    // まず、調べる方向としては、下から上と調べる。つまり、最後のインデックスがから最初のインデックスまで調べる。
    // 子供からみた親のインデックスは　Math.floor（（n-1）/ 2）となるので、
    let parent_idx = this.getParentIdx(child_idx);
    let parent_num = this.values[parent_idx];
    let child_num = this.values[child_idx];
    let is_swap =
      this.mode === "max" ? child_num > parent_num : parent_num > child_num;
    if (is_swap) this.swap(parent_idx, child_idx);
    this.bubbleUp(child_idx - 1);
  }

  swap(idx1: number, idx2: number) {
    let num1 = this.values[idx1];
    let num2 = this.values[idx2];
    this.values[idx1] = num2;
    this.values[idx2] = num1;
  }

  exists(idx: number): boolean {
    return this.values[idx] !== undefined;
  }

  getParentIdx(child_idx: number): number {
    return Math.floor((child_idx - 1) / 2);
  }

  getChildIdxes(parent_idx: number): number[] {
    return [parent_idx * 2 + 1, parent_idx * 2 + 2];
  }
}

export class MaxBinaryHeap extends Heap {
  constructor(nums: number[] = []) {
    super(nums);
    this.mode = "max";
    super.bubbleUp(this.values.length - 1);
  }

  insert(val: number) {
    super.insert(val);
  }

  getMax(): number {
    return this.values[0];
  }
}

export class MinBinaryHeap extends Heap {
  constructor(nums: number[] = []) {
    super(nums);
    this.mode = "min";
    super.bubbleUp(this.values.length - 1);
  }

  insert(val: number) {
    super.insert(val);
  }

  getMin(): number {
    return this.values[0];
  }

  delete(num: number): void {
    let del_idx = this.values.findIndex((val) => val === num);
    let [del_l_child_idx, del_r_child_idx] = super.getChildIdxes(del_idx);
    let del_l_child_num = this.values[del_l_child_idx];
    let del_r_child_num = this.values[del_r_child_idx];
    let large_num = Math.min(del_l_child_num, del_r_child_num);
    this.values[del_idx] = large_num;
    this.values[del_l_child_idx] =
      del_l_child_num === large_num ? del_r_child_num : del_l_child_num;
    this.values;
  }
}
