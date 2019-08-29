const binarySearch = (arr, value) => {
  let start = 0, 
    end = arr.length - 1 
          
    while (start <= end) { 
        let mid = Math.floor((start + end)/2) 
        if (arr[mid] === value) return 'Found' 
        arr[mid] < value ? start = mid + 1 : end = mid - 1 
    }

    return 'Not found'
}

module.exports = binarySearch
