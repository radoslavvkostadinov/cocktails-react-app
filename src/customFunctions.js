export const search = (term, obj) => {
    let results = [];
    for (let item in obj) {
        if (item.toLowerCase().includes(term.toLowerCase()) && !obj[item]) {
            break;
        }
        else if (item.toLowerCase().includes(term.toLowerCase())) {
            results.push(obj[item])
        }
    }
    return results;
};