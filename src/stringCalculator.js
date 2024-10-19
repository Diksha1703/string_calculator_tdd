function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    
    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
        const parts = numbers.split('\n');
        delimiter = new RegExp(`[${parts[0].charAt(2)}]`);
        numbers = parts[1];
    }
    const numArray = numbers.split(delimiter).map(Number);
    const negatives = numArray.filter(n => n < 0);
    if (negatives.length) {
        throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }
    
    return numArray.reduce((sum, current) => sum + current, 0);
}

module.exports = add;