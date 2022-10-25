class Queue<T> {
  private _items: T[] = [];

  push(elem: T) {
    this._items.push(elem);
  }

  pop(): T | undefined {
    return this._items.shift();
  }
}

let queue = new Queue<number>();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
console.log(queue.pop()); // affiche 1

let queueString = new Queue<string>();
queueString.push("a");
queueString.push("b");
queueString.push("v");
queueString.push("d");
console.log(queueString.pop()); // affiche 1

let queueArray = new Queue<number[]>(); // new Queue<Array<number>>()
queueArray.push([1, 2]);
queueArray.push([3, 4]);
queueArray.push([5, 6]);
queueArray.push([7, 8]);

console.log(queueArray.pop()); // affiche [1,2]
