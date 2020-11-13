/***
 * LRU就是Least Recently Used，即最近最少使用，是一种常用的页面置换算法，
 * 将最近长时间未使用的页面淘汰，其实也很简单，就是要将不受欢迎的页面及时淘汰，
 * 不让它占着茅坑不拉shit，浪费资源。
 * 其核心就是利用栈，进行操作，其中主要有两项操作，get和put
 * get
 * get时，若栈中有值则将该值的key提到栈顶，没有时则返回null
 * put
 * 栈未满时，若栈中有要put的key，则更新此key对应的value，并将该键值提到栈顶，
 * 若无要put的key，直接入栈
 * 栈满时，若栈中有要put的key，则更新此key对应的value，并将该键值提到栈顶；
 * 若栈中没有put的key 时，去掉栈底元素，将put的值入到栈顶
 */
var LURCache = function(capcaity){
    this.capcaity = capcaity;
    this.cache=[];
};

LURCache.prototype.put = function(key,value){
    var va = {
        'key':key,
        'val':value,
    }
    // 当缓存中存在键值时，更新键值，并将键值放在栈顶
    for (let i = 0; i < this.cache.length; i++) {
        if(this.cache[i]['key'] === key){
            this.cache[i] = va;
            // 返回当前的数组
            let el = this.cache.splice(i,1);
            this.cache.push(el[0]);

            return null;
        }
    }
    // 此时为缓存中的没有键值
    if(this.cache.length < this.capcaity){
        // 当缓存未存满时直接接入
        this.cache.push(va);
    } else {
        // 当缓存满了，去掉栈底元素，将新元素放在栈顶
        /**
         * 先入栈的元素在第0位开始，后面使用时，位置就越靠后
         * 当出现大于栈的数量时，则把最先进入栈的数据先删除
         * 添加的元素则索引在最大
         */
        this.cache.shift();
        this.cache.push(va);
    }
};

LURCache.prototype.get = function(key){
    let el
    for (let i = 0; i < this.cache.length; i++) {
        if(this.cache[i].key === key){
            // 当键值存在时，将键值移到栈顶
            var tail = this.cache.splice(i,1);
            this.cache.push(tail[0]);
            return tail[0].val;
        }
    }
    return -1;
};
/***
 * splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
 * 
 * splice() 方法可删除从 index 处开始的零个或多个元素，
 * 并且用参数列表中声明的一个或多个值来替换那些被删除的元素。
 * 如果从 arrayObject 中删除了元素，则返回的是含有被删除的元素的数组
 * 
 * 
 * slice() 方法可从已有的数组中返回选定的元素。
 * 返回值
 * 返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。
 * 
 * 说明
 * 请注意，该方法并不会修改数组，而是返回一个子数组。
 * 如果想删除数组中的一段元素，应该使用方法 Array.splice()。
 */

