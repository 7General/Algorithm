window.onload = function () {
    console.log('javaScriptLinkedList');
}

/**
 * Part 1
    回文链表
    环形链表
    删除链表中的节点
 * Part 2
    反转链表 
    删除链表的倒数第N个节点 
    合并两个有序链表 
    两数相加
 * Part 3
    排序链表
    相交链表
    奇偶链表
 */
/*************************1.回文链表*********************************************/
/**
 * 请判断一个链表是否为回文链表。
 * 输入: 1->2
 * 输出: false
 * 输入: 1->2->2->1
 * 输出: true
 * 
 * 进阶: 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题? 
 * 题目分析
    O(n) 的时间复杂度意味着只能遍历一趟链表;
    O(1) 的空间复杂度意味着只能使用常数个变量(也就是不能使用数组、集合等变量)

 * 方法一 字符串拼接比较
 * 思路 通过正向、反向将链表节点值拼接成字符串，最后比较正向、反向字符串是否相同。 
 * 详解
 * 1. 定义两个临时变量，存储正、反两个拼接的字符串 
 * 2. 遍历链表，进行字符串拼接
 * 3. 比较正、反字符串是否相同
 */
function isPalindrome(head) {
    let positiveStr = '';
    let reverseStr = '';
    while(head) {
        const nodeVal = head.val;
        // 正向字符串
        positiveStr += nodeVal;
        // 反向字符串
        reverseStr = nodeVal + reverseStr;
        // 下一个节点
        head = head.next;
    }
    return positiveStr === reverseStr;
}


/*************************2.环形链表*********************************************/
/***
 * 给定一个链表，判断链表中是否有环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表 
 * 尾连接到链表中的位置(索引从 0 开始)。 如果 pos 是 -1，则在该链表中没有环。
 * 方法一 双指针
 */
const hasCycle = function(head) {
   if(!head) return false;
   let fast = head;
   let slow = head;
   while(fast && fast.next){
      fast = fast.next.next;
      slow = head.next;
      if(fast === slow) return true;
   }
   return false;
}
/***
 * 方法二 哈希表
 * 
 * 详解
创建一个空 Map 对象并遍历链表中的所有节点，每遍历一个节点，就像空对象里插入一条组键值 
对为 { 当前节点: 1 }。 
1. 如果遍历完成，该 Map 对象中不存在相同节点，那么不是环形链表。 
2. 遍历中，发现该 Map 对象中存在相同节点且值为 1，即该节点已经遍历过了，那么链表是环形链 表
 */
const hasCycleOther = function(head){
   if(!head) return false;
   const newData = new Map();
   while(head){
      if(Map.has(head)) return true;
      newData.set(head,1)
      head = head.next;
   }
   return false;
}

/*************************3.删除链表中的节点*********************************************/
/***
 * 请编写一个函数，使其可以删除某个链表中给定的(非末尾)节点，你将只被给定要求被删除的节 点。
 * 现有一个链表 -- head = [4,5,1,9]，它可以表示为: 4 -> 5 -> 1 -> 9
 * 
 * 示例 1:
 * 输入: head = [4,5,1,9], node = 5
 * 输出: [4,1,9]
 * 解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9
 * 
 * 思路
 * 这道题通俗地将就是要删除给定节点。在获取当前节点后，可以将下一个节点的值赋给当前节点， 然后将当前节点指向下下个节点，完成删除。
 * 详解
 * 1. node.value = node->next.value 
 * 2. node->next=node->next->next
 */
const deleteNode = function(node){
   node.val = node.next.val;
   node.next = node.next.next;
}