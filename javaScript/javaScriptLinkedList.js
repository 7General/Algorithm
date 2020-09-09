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