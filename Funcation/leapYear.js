function isLeap(year) {
    if (year % 4 === 0) {
        return "Leap year.";
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year.";
            } else {
                return 'Not leap year.';
            }
        } else {
            return "Leap year.";
        }
    } else {
        return 'Not leap year.';
    }

};
isLeap(2400);
isLeap(1989);
console.log(isLeap(2400));
console.log(isLeap(1989));

