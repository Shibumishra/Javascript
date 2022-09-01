class HouseKeeper {
    constructor(yearOfExprience, name, cleaningRepertoire) {
        this.yearOfExprience = yearOfExprience;
        this.name = name;
        this.cleaningRepertoire = cleaningRepertoire;
        this.clean = function () {
            alert("Cleaning in progress..")
        }
    }
};

let houseKeeper1 = new HouseKeeper(12, "Tom", ["Lobby", "bedroom"]);
console.log(houseKeeper1);

let houseKeeper2 = new HouseKeeper(22, "Janet", ["bathroom", "house"]);
console.log(houseKeeper2);