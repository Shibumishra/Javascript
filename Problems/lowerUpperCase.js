function characters(str) {
    return str.toLowerCase().replace(/\b./g, (item) => {
        return item.toUpperCase();
    });
};

var name = characters('saTYAbrat kumAR mISHRA');
console.log(name)