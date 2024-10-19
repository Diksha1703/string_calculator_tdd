function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    
    const numArray = numbers.split(',');
    return numArray.reduce((sum, current) => sum + parseInt(current), 0);
}

module.exports = add;