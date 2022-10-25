var Queue = /** @class */ (function () {
    function Queue() {
        this._items = [];
    }
    Queue.prototype.push = function (elem) {
        this._items.push(elem);
    };
    Queue.prototype.pop = function () {
        return this._items.shift();
    };
    return Queue;
}());
var queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
console.log(queue.pop()); // affiche 1
var queueArray = new Queue(); // new Queue<Array<number>>()
queueArray.push([1, 2]);
queueArray.push([3, 4]);
queueArray.push([5, 6]);
queueArray.push([7, 8]);
console.log(queueArray.pop()); // affiche [1,2]
