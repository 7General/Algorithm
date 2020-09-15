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
 * 这道题通俗地将就是要删除给定节点。在获取当前节点后，可以将下一个节点的值赋给当前节点， 
 * 然后将当前节点指向下下个节点，完成删除。
 * 详解
 * 1. node.value = node->next.value 
 * 2. node->next=node->next->next
 */
const deleteNode = function(node){
   let firstnode = new ListNode();
    firstnode.next = head;
    let curr = firstnode;
    while(curr && curr.next){
        if(curr.next.val === val) {
            curr.next = curr.next.next;
        }
        curr = curr.next;
    }
    return firstnode.next;
}

/*************************4.反转链表*********************************************/
/***
 * 
 * 用迭代的方法实现。
 */
const reverseList = function(head) {
   if(head === null || head.next === null){
      return head;
   }
   const newHead = null;
   while(head){
      const temp = head.next;
      head.next = newHead;
      newHead = head;
      head = temp;
   }
   return newHead;
}
/***
 * 
 * 用递归的方法实现。
 */
const reverseListOther = function(head) {
   if(head === null || head.next === null){
      return head;
   }
   //这里的cur就是最后一个节点，也就是反转后的头节点
   const newHead = reverseListOther(head.next);// 反转后的头节点
   // 进过上面的递归，就得到了链表1->2<-3<-4<-5

   //这里请配合动画演示理解
   //如果链表是 1->2->3->4->5，那么此时的cur就是5
   //而head是4，head的下一个是5，下下一个是空
   //所以head.next.next 就是5->4
   head.next.next = head;// 将反转后的链表的尾结点与当前节点相连
   //防止链表循环，需要将head.next设置为空
   head.next = null;
   return newHead;
}
/*************************5.删除链表的倒数第N个节点*********************************************/
/***
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * 
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 */
const removeNthFromEnd = function(head,n) {
   let first = head;
   let second = head;
   while(n > 0){
      first = first.next;
      n--;
   }
   if(!first) return head.next;
   // 当双向指针指向【3，4】的时候，则second=3。则sec.next = sec.next.next
   while(first.next){
      first = first.next;
      second = second.next;
   }
   second.next = second.next.next;
   return head;
}

/*************************6.合并两个有序链表*********************************************/
/***
 * 
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * 
 * 示例
 * 输入:1->2->4, 1->3->4
 * 输出:1->1->2->3->4->4
 * 
 * 方法一 递归法
 * 思路
 * 用递归的方式，依次比较两个链表中首项的大小，保留数值小的为链表当前值，直到一个链表参数为空则结束
 * 详解
 * 1. 递归处理两个入参链表
 * 2. 若两个链表中有一个链表为空，则返回另一个链表
 * 3. 两个链表都不为空时比较两个链表中第一个节点的值，保留较小者(相同则均可)
 * 4. 继续递归执行去掉该节点的链表和另一个链表直至其中一个链表为空
 */
const mergeTwoLists = function(l1,l2) {
   if(l1 === null){
      return l2;
   }
   if(l2 === null) {
      return  l1;
   }
   if(l1.val <= l2.val){
      l1.next = mergeTwoLists(l1.next,l2)
      return l1;
   } else {
      l2.next = mergeTwoLists(l1,l2.next)
      return l2;
   }
}

/*************************7.两数相加*********************************************/
/****
 * 
 * 给出两个非空的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储
 * 的，并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。 
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 示例
 * 输入:(2->4->3)+(5->6->4)
 * 输出:7->0->8
 * 原因:342 + 465 = 807
 * 方法一 游标法
 * 思路 
 * 我们使用游标变量来跟踪进位，并从包含最低有效位的表头开始模拟逐位相加的过程。
 * 详解
 * 1. 设置游标变量 pointer1 和 pointer2，分别指向需要相加的两个链表 L1 和 L2 ;新建一个链表为 
 * sumListNode，存储 L1 和 L2逐位相加的结果。
 * 2. 逐步移动 pointer1 和 pointer2，对 L1 和 L2 的每个节点相加得到两数之和 sumListNode 的链 
 * 表节点
 */