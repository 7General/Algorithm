
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

 const MinStack = function(){
     this.stack = [];
     this.minStack = [];
 };

 MinStack.prototype.push = function(x){
     this.stack.push(x);
     if(this.minStack.length === 0){
         this.minStack.push(x);
     } else {
         const min = Math.min(this.minStack[this.minStack
        .length - 1],x
        );
        this.minStack.push(x);
     }
 };

 MinStack.prototype.pop = function(x){
     this.minStack.pop();
     return this.stack.pop();
 }

 MinStack.prototype.top = function(){
     return this.minStack[this.minStack.length - 1];
 }

 MinStack.prototype.getMin = function(){
     return this.minStack[this.length - 1];
 }