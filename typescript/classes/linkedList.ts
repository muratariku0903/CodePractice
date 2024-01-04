/*
  LinkedListは、種類が二つあり、各要素が次の要素を参照を持っているシーケンスなデータ構造と各要素が次と前の要素の参照を保持しているデータ構造。
  さまざまな分野で活用されている。Webサイトのユーザーの閲覧履歴を管理するブラウザのナビゲーション機能や音楽プレイヤーのプレイリスト管理アプリなど。
*/

/*
  LinkedListで管理するNodeクラス
*/
export class LinkedListNode<T> {
  public val: T;
  public next: LinkedListNode<T> | null = null;

  constructor(val: T | T[], next?: LinkedListNode<T> | null) {
    // 値が配列できた時はその順番でノードを構成する
    if (Array.isArray(val)) {
      if (val.length === 0) throw new Error("Unsupported empty array.");
      this.val = val[0];

      // 一つしかノードがないならnextを設定する必要はない。
      if (val.length === 1) return;

      // プロパティの参照を変数に受け渡す
      this.next = new LinkedListNode(val[1]);
      let next = this.next;
      // nextを更新していく
      for (let i = 2; i < val.length; i++) {
        next.next = new LinkedListNode(val[i]);
        next = next.next;
      }

      return;
    }

    this.val = val;
    this.next = next ?? null;
  }

  push(val: T): void {
    const newNext = new LinkedListNode(this.val, this.next);
    this.val = val;
    this.next = newNext;
  }

  pop(): void {
    if (!this.next) {
      throw new Error("Can not remove last val.");
    }

    this.val = this.next.val;
    this.next = this.next.next;
  }

  toArray(): T[] {
    const arr = [this.val];
    if (this.next) arr.push(...this.next.toArray());

    return arr;
  }
}

export class LinkedList<T> {
  public headNode: LinkedListNode<T> | null = null;
  public tailNode: LinkedListNode<T> | null = null;
  public size = 0;

  constructor(values: T[]) {
    values.forEach((value) => this.push(value));
  }

  // 要素を最後尾に追加 O(1)
  push(value: T): LinkedListNode<T> {
    const linkedListNode = new LinkedListNode(value);

    if (!this.headNode || !this.tailNode) {
      this.headNode = linkedListNode;
      this.tailNode = linkedListNode;
    } else {
      this.tailNode.next = linkedListNode;
      this.tailNode = linkedListNode;
    }

    this.size++;

    return linkedListNode;
  }

  // 最後尾の要素を削除 O(n)
  pop(): LinkedListNode<T> | null {
    if (!this.headNode || !this.tailNode) return null;

    // 要素が一つしかないならそれを返してnullでリセット
    if (this.size === 1) {
      const node = this.headNode;
      this.headNode = null;
      this.tailNode = null;
      this.size--;

      return node;
    }

    //　一個前のノードを特定してそれをtailNodeに置き換える
    let preTailNode = this.headNode;
    let tailNode = this.headNode.next;
    while (tailNode && tailNode.next) {
      preTailNode = tailNode;
      tailNode = tailNode.next;
    }

    preTailNode.next = null;
    this.tailNode = preTailNode;
    this.size--;

    return tailNode;
  }

  // indexの要素を検索 O(n)
  find(idx: number): LinkedListNode<T> | null {
    if (!this.headNode || !this.tailNode) return null;

    if (idx > this.size - 1) throw new Error(`Invalid idx : ${idx}`);

    let currIdx = 0;
    let currNode: LinkedListNode<T> | null = this.headNode;
    while (currIdx != idx) {
      if (!currNode) throw new Error(`Invalid idx : ${idx}`);
      currNode = currNode.next;
      currIdx++;
    }

    return currNode;
  }

  // 要素を検索 O(n)
  findBy(
    callback: (node: LinkedListNode<T>) => boolean
  ): LinkedListNode<T> | null {
    if (!this.headNode || !this.tailNode) return null;

    let targetNode: LinkedListNode<T> | null = this.headNode;
    while (targetNode != null) {
      if (callback(targetNode)) return targetNode;
      targetNode = targetNode.next;
    }

    return null;
  }

  // indexに要素を追加　O（n）
  insertAt(idx: number, value: T): LinkedList<T> {
    // idxが負の値、あるいはサイズを超過している場合は例外をスロー
    if (idx > this.size || idx < 0) throw new Error(`Invalid idx : ${idx}`);

    const newNode = new LinkedListNode(value);
    this.size++;

    // ノードが空の状態でインサートされた場合
    if (!this.headNode || !this.tailNode) {
      this.headNode = newNode;
      this.tailNode = newNode;

      return this;
    }

    // 処理内容としては、置き換える対象ノードを特定し、前後のノードの間に差し込む
    // 前のノードのnextに新規ノードを指定し、新規のノードのnextに後のノードを指定する
    let preNode: LinkedListNode<T> | null = null;
    let replaceNode: LinkedListNode<T> | null = this.headNode;
    let currIdx = 0;
    while (currIdx != idx) {
      preNode = replaceNode;
      replaceNode = replaceNode?.next ?? null;
      currIdx++;
    }

    newNode.next = replaceNode;

    if (preNode) {
      preNode.next = newNode;
    } else {
      this.headNode = newNode;
    }

    return this;
  }

  // indexの要素を削除　O（n）
  removeFrom(idx: number): LinkedList<T> {
    // idxが負の値、あるいはサイズを超過している場合は例外をスロー
    if (idx > this.size - 1 || idx < 0) throw new Error(`Invalid idx : ${idx}`);

    // 空のリストに対して削除しようとしたら例外をスロー
    if (this.size === 0)
      throw new Error("Can not remove node from empty ListNode.");

    // 最後の一つの要素を削除する場合
    if (this.size === 1) {
      this.headNode = null;
      this.tailNode = null;
      this.size--;

      return this;
    }

    // 処理内容としては、削除対象ノードを特定し、前後のノードから抜き取る
    // 前のノードのnextに削除対象ノードのnextを指定する
    let preNode: LinkedListNode<T> | null = null;
    let deleteNode: LinkedListNode<T> | null = this.headNode;
    let currIdx = 0;
    while (currIdx != idx) {
      preNode = deleteNode;
      deleteNode = deleteNode?.next ?? null;
      currIdx++;
    }

    // 削除対象のノードが特定できなかった場合は例外をスロー
    if (!deleteNode) throw new Error("Can not find target delete node.");

    if (preNode) {
      preNode.next = deleteNode.next;
      if (!preNode.next) {
        this.tailNode = preNode;
      }
    } else {
      this.headNode = deleteNode.next;
    }

    this.size--;

    return this;
  }

  // 値を配列で返す　O（n）
  values(): T[] {
    return this.headNode?.toArray() ?? [];
  }

  // イテレーター(インスタンスは「反復可能オブジェクト（iterable）」になる)
  *[Symbol.iterator](): Generator {
    let currNode = this.headNode;
    while (currNode != null) {
      yield currNode;
      currNode = currNode.next;
    }
  }
}

const linkedList = new LinkedList([1, 2, 3, 4]);
// const linkedList = new LinkedList<number>([]);

for (const item of linkedList) {
  console.log(item);
}

// console.log(linkedList.removeFrom(3));
// console.log(linkedList.removeFrom(1));
// console.log(linkedList.removeFrom(0));
// console.log(linkedList.removeFrom(0));
// console.log(linkedList.insertAt(1, 5));
// console.log(linkedList.removeFrom(2));
// console.log(linkedList.insertAt(1, 6));
// console.log(linkedList.insertAt(0, 7));
// console.log(linkedList.insertAt(7, 8));
// console.log(linkedList.insertAt(5, 9));
// console.log(linkedList.values());
