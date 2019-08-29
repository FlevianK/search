const linearSearch = (array, value) => {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === value) {
            return 'Found'
        }

    }
    return 'Not found'
}

module.exports = linearSearch
