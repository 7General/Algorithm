
/*************************1.最小栈*********************************************/
/***
 * 最小栈
 * 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。
 * push(x) -- 将元素 x 推入栈中。 
 * pop() -- 删除栈顶的元素。
 * top() -- 获取栈顶元素。
 * getMin() -- 检索栈中的最小元素。
 * 
 * 
 * 思路
 * 根据数组的性质，push、pop、top都能在常数时间内完成，而此题关键是常数时间内检索最小元 素，此解法是开辟一个数组存储，push数据同时，存储当前栈中最小元素，pop数据的同时pop最 小元素栈栈顶数据;
 * 详解
 * 1. 创建最小元素栈时，开辟 stack 及 minStack 数组，stack 用于存储压栈元素，minStack 用于 存储最小元素序列;
 * 2. push操作执行元素 x 压栈:
 * 3. 如果 minStack 数组为空时，添加元素 x 到 minStack 数组。
 * 4. 否则比较元素 x 与数组末尾元素，取最小值添加到 minStack 数组末尾。表示当前栈中元素的 最小值为x。
 * 5. pop操作:
 * 6. 删除 stack 数组末尾元素的同时，删除数组 minStack 末尾元素。 7. getMin操作:
 * 7. 直接调用 pop 方法，返回 minStack 数据中末尾元素即可。
 */

const MinStack = function () {
    this.stack = [];
    this.minStack = [];
};

MinStack.prototype.push = function (x) {
    this.stack.push(x);
    if (this.minStack.length === 0) {
        this.minStack.push(x);
    } else {
        const min = Math.min(this.minStack[this.minStack
            .length - 1], x
        );
        this.minStack.push(x);
    }
};

MinStack.prototype.pop = function (x) {
    this.minStack.pop();
    return this.stack.pop();
}

MinStack.prototype.top = function () {
    return this.minStack[this.minStack.length - 1];
}

MinStack.prototype.getMin = function () {
    return this.minStack[this.length - 1];
}

/*************************2.Shuffle an Array*********************************************/
/***
 * 打乱一个没有重复元素的数组。
 * 
 * // 以数字集合 1,2 和 3 初始化数组。 2
* int[]nums={1,2,3};
* Solutionsolution=newSolution(nums);
* // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。 8
* solution.shuffle();
* // 重设数组到它的初始状态[1,2,3]。 12
* solution.reset();
* // 随机返回数组[1,2,3]打乱后的结果。 16
* solution.shuffle();
* 
* 思路
* reset 函数:缓存传入的原始数据，用于在函数调用时返回。但值得一提的是，进行缓存原 始数据时，必须进行浅拷贝，因为原始数据为数组，普通的赋值会导致引用对象传递，一旦变 更了 this.nums 的数组内容，缓存的数组也将同步变更
* shuffle 函数:我们模拟一个这样的场景，有 n 个标着数的球，我们把这 n 个球放入一个看 不见的袋子中，每次从中摸一个球出来，并按照摸出的顺序，直到摸空袋子。具体的操作，我 们把原始数组复制一份为 nums，每次根据 nums 的长度随机生成一个下标从 nums 中取一个 数出来，将其放入新数组 ary 中，并删除 nums 中对应下标的数
* 详解
* 1. 定义   存储传入的数据this.nums
* 2. 定义    this.original存储nums的克隆数组
* 3. 定义重置   方法，将 this.nums 重制为 this.original 的克隆数组，并将
this.original重新克隆一遍(因数组为引用对象，不重新缓存新数组会导致this.original 和 this.nums 同步变化)

* 4. 定义打乱 shuffle  方法，根据this.nums 的长度进行循环，每次从根据this.nums   
   长度 通过 math.random()  随机生成一个下标
* 5. 根据随机生成的下标，将值存入 ary 数组中 
* 6. 最后返回 ary 数组
代码
*/
const Solution = (nums) => {
    this.nums = nums;
    this.original = nums.slice(0);
};

// 重置数组并返回 return {number[]}
Solution.prototype.reset = () => {
    this.nums = this.original;
    this.original = this.original.slice(0);
    return this.original;
}
// 返回一个随机重拍数组
Solution.prototype.shuffle = () => {
    const array = [];
    const nums = this.nums.slice(0);
    const len = nums.length;
    for (let index = 0; index < array.length; index++) {
        const taretIndex = Math.floor(Math.random() * nums.length);
        array[index] = nums[taretIndex];
        nums.splice(taretIndex, 1);
    }
    return array;
}


