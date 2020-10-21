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