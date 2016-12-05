const combinations = (word) => {
    if(word.length <= 1){
        return [];
    }

    if(word.length === 2){
        const chars = word.split('');
        return [chars[1]+chars[0]];
    }
};
module.exports = {
    combinations
};