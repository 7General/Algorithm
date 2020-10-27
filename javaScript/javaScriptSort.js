window.onload = function () {
    console.log('sssss')
    insertionSort(['20','12','10','15','2']);
}


/*************************1.冒泡排序*********************************************/
function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if(arr[j] > arr[j + 1]){
                const temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

/*************************2.选择排序*********************************************/
function selectionSort(arr) {
    const len = arr.length;
    let minIndex;
    let temp;
    for (let i = 0; i < len; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;//保存最小数的索引
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
/*************************3.插入排序*********************************************/
function insertionSort(arr) {
    const len = arr.length;
    let preIndex;
    let current;
    for (let i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i]
        // 大于新元素，将该元素移动到下一位置
        while(preIndex >= 0 && arr[preIndex] > current){
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
}
/*************************4.快速排序*********************************************/
/****
 * 快速排序一般用来处理大数据集，速度比较快。快速排序通过递归的方式，将数据依次分为包含较
 * 小元素和较大元素的不同子序列。
 * 
 * 实现原理
 * 
 * 这个算法首先要在列表中选择一个元素作为基准值，所有元素比基准值小的摆放在基准前面，所有 
 * 元素比基准值大的摆在基准的后面。这个基准值一般有 4 种取法:
 * 无脑拿第一个元素
 * 无脑拿最后一个元素 
 * 无脑拿中间的元素 
 * 随便拿一个
 */
function partition(arr,low,high) {
    let i = low - 1;
    const pivot = arr[high];
    for (let j = 0; j < high; j++) {
        // 当前的值比pivot小
        if (arr[j] < pivot) {
            i++;
            [arr[i],arr[j]] = [arr[j],arr[i]];
        }
        [arr[i+1],arr[high]] = [arr[high],arr[i+1]];
        return i+1;
    }
}
function quickSort(arr,low,high) {
    if(low < high){
        const pi = partition(arr,low,high);
        quickSort(arr,low,pi-1);
        quickSort(arr,pi+1,high);
    }
}

/*************************5.归并排序*********************************************/
/***
 * 归并排序是把一系列排好序的子序列合并成一个大的完整有序序列。
 
 * 实现原理
 * 把长度为 n 的输入序列分成两个长度为 n / 2 的子序列，载 对这两个子序列分别采用归并排序，最 
 * 后将两个排序好的子序列合并成一个最终的排序序列。
 */