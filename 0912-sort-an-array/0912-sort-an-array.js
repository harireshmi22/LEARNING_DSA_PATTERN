/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {

    function merge(arr, temp, left, mid, right) {
        let i = left;
        let j = mid + 1;
        let k = left;

        while (i <= mid && j <= right) {
            if (arr[i] <= arr[j]) {
                temp[k++] = arr[i++];
            } else {
                temp[k++] = arr[j++]
            }
        }

        // bache hua element 
        while (i <= mid) {
            temp[k++] = arr[i++];
        }

        while (j <= right) {
            temp[k++] = arr[j++];
        }

        for(let idx = left; idx <= right; idx++) {
            arr[idx] = temp[idx]; 
        }
    }

    function mergeSort(arr, temp, left, right) {
        if (left >= right) return;

        let mid = Math.floor((left + right) / 2);

        mergeSort(arr, temp, left, mid)
        mergeSort(arr, temp, mid + 1, right);
        merge(arr, temp, left, mid, right);
    }

    let n = nums.length - 1;
    let temp = new Array(n);
    mergeSort(nums, temp, 0, n)

    return nums; 
};