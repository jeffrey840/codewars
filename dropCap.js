function dropCap(str) {
    return str.split(' ').map(word => {
        if (word.length > 2) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        } else {
            return word;
        }
    }).join(' ');
}



