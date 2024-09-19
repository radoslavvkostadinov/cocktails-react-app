/**
 * Searches for a term in the keys of an object
 *
 * @param {string} term - The term to search for.
 * @param {Object} obj - The object to search within.
 * @returns {Array} An array of values whose keys include the search term.
 */
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