// Mapで先頭と末尾のIDXを管理
class Deque<T> {
  private map: Map<number, T>;
  private frontIdx: number | null;
  private backIdx: number | null;

  constructor(nums: T[]) {
    const map = new Map<number, T>();
    if (nums.length === 0) {
      this.map = map;
      this.frontIdx = null;
      this.backIdx = null;
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      map.set(i, nums[i]);
    }
    this.map = map;
    this.frontIdx = 0;
    this.backIdx = nums.length - 1;
  }

  insertFront(val: T): void {
    const newFrontIdx = this.frontIdx != null ? this.frontIdx - 1 : 0;
    this.map.set(newFrontIdx, val);
    this.frontIdx = newFrontIdx;
  }

  insertBack(val: T): void {
    const newBackIdx = this.backIdx != null ? this.backIdx + 1 : 0;
    this.map.set(newBackIdx, val);
    this.backIdx = newBackIdx;
  }

  deleteFront(): void {
    if (this.frontIdx == null) return;

    this.map.delete(this.frontIdx);
    this.frontIdx = this.frontIdx + 1;
  }

  deleteBack(): void {
    if (this.backIdx == null) return;

    this.map.delete(this.backIdx);
    this.backIdx = this.backIdx - 1;
  }

  front(): T | null {
    if (this.frontIdx == null) return null;

    return this.map.get(this.frontIdx) ?? null;
  }

  back(): T | null {
    if (this.backIdx == null) return null;

    return this.map.get(this.backIdx) ?? null;
  }

  show(): Map<number, T> {
    return this.map;
  }
}

// const nums: number[] = [];
const nums = [1, 2, 3, 4, 5];
const deque = new Deque(nums);

console.log(deque.show());
deque.insertFront(10);
console.log(deque.show());
console.log(deque.front());
deque.insertFront(20);
console.log(deque.show());
console.log(deque.front());
deque.deleteFront();
console.log(deque.show());
console.log(deque.front());
deque.insertBack(100);
console.log(deque.show());
console.log(deque.back());
deque.deleteBack();
deque.deleteBack();
deque.deleteBack();
deque.deleteBack();
deque.deleteBack();
deque.deleteBack();
console.log(deque.show());
console.log(deque.back());
